# Deploying to Google Cloud Platform (GCP)

This guide covers deploying your Next.js app to GCP. There are several options:

## Option 1: Cloud Run (Recommended - Easiest & Serverless)

Cloud Run is Google's serverless container platform - perfect for Next.js apps.

### Prerequisites

1. **Install Google Cloud SDK:**
   ```bash
   # Download from: https://cloud.google.com/sdk/docs/install
   # Or use PowerShell:
   (New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")
   Start-Process "$env:Temp\GoogleCloudSDKInstaller.exe"
   ```

2. **Initialize and Login:**
   ```bash
   gcloud init
   gcloud auth login
   ```

3. **Enable required APIs:**
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable containerregistry.googleapis.com
   ```

### Step 1: Create Dockerfile

Create a `Dockerfile` in your `web_app` directory:

```dockerfile
# Use the official Node.js runtime as base image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Step 2: Update next.config.js for Standalone Output

Update `next.config.js` to enable standalone output:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Required for Docker
}

module.exports = nextConfig
```

### Step 3: Build and Deploy

```bash
cd web_app

# Set your GCP project
gcloud config set project YOUR_PROJECT_ID

# Build and deploy to Cloud Run
gcloud run deploy smadar-express \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3000
```

### Step 4: Map Custom Domain

1. **In Cloud Run Console:**
   - Go to your service → "Manage Custom Domains"
   - Click "Add Mapping"
   - Enter: `www.smadar-express.com`

2. **Update DNS at Your Registrar:**
   ```
   Type: CNAME
   Name: www
   Value: ghs.googlehosted.com
   ```

   For root domain (smadar-express.com), you may need to use:
   ```
   Type: A
   Name: @
   Value: (IP provided by Cloud Run)
   ```

### Step 5: Set Environment Variables (Optional)

```bash
gcloud run services update smadar-express \
  --update-env-vars NEXT_PUBLIC_BASE44_API_URL=your_url,NEXT_PUBLIC_BASE44_API_KEY=your_key \
  --region us-central1
```

---

## Option 2: Compute Engine VM (Full Control)

If you want a traditional VM with full control.

### Step 1: Create VM Instance

```bash
# Create VM instance
gcloud compute instances create smadar-express-vm \
  --zone=us-central1-a \
  --machine-type=e2-small \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --boot-disk-size=20GB \
  --tags=http-server,https-server
```

### Step 2: SSH into VM

```bash
gcloud compute ssh smadar-express-vm --zone=us-central1-a
```

### Step 3: Install Dependencies on VM

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

### Step 4: Clone and Build Your App

```bash
# Clone your repository (or upload files)
git clone YOUR_REPO_URL
cd web_app

# Install dependencies
npm install

# Build the app
npm run build

# Start with PM2
pm2 start npm --name "smadar-express" -- start
pm2 save
pm2 startup  # Follow the instructions it shows
```

### Step 5: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/smadar-express
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name smadar-express.com www.smadar-express.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/smadar-express /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: Setup SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d smadar-express.com -d www.smadar-express.com
```

### Step 7: Configure Firewall

```bash
# Allow HTTP and HTTPS
gcloud compute firewall-rules create allow-http-https \
  --allow tcp:80,tcp:443 \
  --source-ranges 0.0.0.0/0 \
  --target-tags http-server,https-server
```

### Step 8: Update DNS

At your domain registrar, add:

```
Type: A
Name: @
Value: (Your VM's external IP - get it with: gcloud compute instances describe smadar-express-vm --zone=us-central1-a --format='get(networkInterfaces[0].accessConfigs[0].natIP)')

Type: A
Name: www
Value: (Same IP as above)
```

---

## Option 3: App Engine (Managed Platform)

App Engine is Google's fully managed platform.

### Step 1: Create app.yaml

Create `app.yaml` in `web_app` directory:

```yaml
runtime: nodejs18

env_variables:
  NODE_ENV: production

handlers:
  - url: /.*
    script: auto
```

### Step 2: Deploy

```bash
cd web_app
gcloud app deploy
```

### Step 3: Map Custom Domain

```bash
gcloud app domain-mappings create www.smadar-express.com
```

Then update DNS as instructed by GCP.

---

## Cost Comparison

- **Cloud Run:** Pay per request (~$0.40 per million requests) + compute time. Free tier: 2 million requests/month
- **Compute Engine:** ~$10-20/month for small VM (e2-small)
- **App Engine:** Similar to Cloud Run, pay per use

## Recommendation

**Use Cloud Run** - It's:
- ✅ Cheapest for low-medium traffic
- ✅ Auto-scales (handles traffic spikes)
- ✅ No server management
- ✅ Free SSL included
- ✅ Easy to deploy

## Troubleshooting

### Cloud Run Issues

**Build fails:**
```bash
# Check build logs
gcloud builds list
gcloud builds log BUILD_ID
```

**App not accessible:**
- Check if service allows unauthenticated access
- Verify DNS is pointing correctly
- Check Cloud Run service logs

### Compute Engine Issues

**Can't connect:**
- Check firewall rules
- Verify VM has external IP
- Check Nginx is running: `sudo systemctl status nginx`

**PM2 not starting on reboot:**
```bash
pm2 startup
# Run the command it outputs
pm2 save
```

## Environment Variables

For all options, set environment variables:

**Cloud Run:**
```bash
gcloud run services update smadar-express \
  --update-env-vars KEY=value \
  --region us-central1
```

**Compute Engine:**
```bash
# In your app directory, create .env file
nano .env
# Add your variables
# PM2 will pick them up automatically
```

## Monitoring

- **Cloud Run:** Built-in monitoring in GCP Console
- **Compute Engine:** Use Cloud Monitoring or PM2 monitoring
- **App Engine:** Built-in monitoring and logs

## Need Help?

- GCP Documentation: https://cloud.google.com/docs
- Cloud Run Docs: https://cloud.google.com/run/docs
- Compute Engine Docs: https://cloud.google.com/compute/docs

