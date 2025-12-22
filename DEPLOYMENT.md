# Deployment Guide for smadar-express.com

This guide will help you deploy your Next.js app to your domain `www.smadar-express.com`.

## Option 1: Vercel (Recommended - Easiest & Free)

Vercel is made by the creators of Next.js and offers the easiest deployment process.

### Step 1: Prepare Your Code

1. Make sure all your code is committed to Git:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

2. Push to GitHub/GitLab/Bitbucket (if not already done):
   ```bash
   git push origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub/GitLab/Bitbucket account (recommended) or email

2. **Import Your Project:**
   - Click "Add New..." → "Project"
   - Import your Git repository (GitHub/GitLab/Bitbucket)
   - Select the `web_app` folder as the root directory (or deploy from root and set root to `web_app`)
   - Vercel will auto-detect Next.js

3. **Configure Build Settings:**
   - **Root Directory:** `web_app` (if deploying from parent repo) or leave empty if `web_app` is the repo root
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

4. **Environment Variables:**
   - Add your environment variables:
     - `NEXT_PUBLIC_BASE44_API_URL` (if you have one)
     - `NEXT_PUBLIC_BASE44_API_KEY` (if you have one)
   - These are optional since you're using mock data

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (2-5 minutes)
   - Your app will be live at `your-project-name.vercel.app`

### Step 3: Connect Your Domain

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter: `smadar-express.com` and `www.smadar-express.com`

2. **Configure DNS:**
   Vercel will show you DNS records to add. You need to add these to your domain registrar:

   **For smadar-express.com (Root domain):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www.smadar-express.com:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   Or use Vercel's nameservers (easier):
   ```
   Nameserver 1: ns1.vercel-dns.com
   Nameserver 2: ns2.vercel-dns.com
   ```

3. **Update DNS at Your Registrar:**
   - Log into your domain registrar (where you bought smadar-express.com)
   - Go to DNS settings
   - Add the records Vercel provided
   - Wait 24-48 hours for DNS propagation (usually faster, 1-2 hours)

4. **SSL Certificate:**
   - Vercel automatically provides free SSL certificates
   - Your site will be available at `https://www.smadar-express.com`

## Option 2: Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure:
   - **Base directory:** `web_app`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Add environment variables if needed
6. Deploy and add your custom domain in Site settings → Domain management

## Option 3: Self-Hosted (VPS/Dedicated Server)

If you prefer to host on your own server:

### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy

### Steps:

1. **Build the app:**
   ```bash
   cd web_app
   npm install
   npm run build
   ```

2. **Start with PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "smadar-express" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx:**
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
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Setup SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d smadar-express.com -d www.smadar-express.com
   ```

## Pre-Deployment Checklist

- [ ] All code is committed to Git
- [ ] Environment variables are documented (in `.env.example`)
- [ ] App builds successfully: `npm run build`
- [ ] No console errors in development
- [ ] All links and routes work correctly
- [ ] Images and assets load properly

## Post-Deployment

1. **Test your domain:**
   - Visit `https://www.smadar-express.com`
   - Test all pages and links
   - Check mobile responsiveness

2. **Monitor:**
   - Check Vercel/Netlify dashboard for build logs
   - Monitor error logs if any issues occur

3. **Update Base44 API (if needed):**
   - Once you have your Base44 API credentials, add them as environment variables in your hosting platform
   - The app will automatically use the real API instead of mock data

## Troubleshooting

**Domain not working?**
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Verify DNS records are correct
- Wait up to 48 hours for full propagation

**Build fails?**
- Check build logs in Vercel/Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Environment variables not working?**
- Make sure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Domain DNS Help: Contact your domain registrar support

