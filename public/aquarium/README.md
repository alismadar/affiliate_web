# Aquarium Background Images

Place your aquarium images in this folder to use them as background images.

## How to add background images:

1. **Add your images** to this folder (`public/aquarium/`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 1920x1080px or larger (landscape format works best for backgrounds)

2. **Update the image array** in `Components/landing/AquaDealsHeroSection.tsx`:
   ```typescript
   const aquariumBackgroundImages = [
     '/aquarium/your-main-background.jpg',  // Main background image
     '/aquarium/your-secondary-background.jpg',  // Optional: secondary background for depth
   ];
   ```

3. **Or use external URLs** (if you prefer):
   ```typescript
   const aquariumBackgroundImages = [
     'https://example.com/aquarium-background.jpg',
   ];
   ```

## Notes:
- The first image will be used as the main background covering the entire hero section
- The second image (if provided) will appear on the right side for added depth
- Images are displayed with 30% opacity to ensure text readability
- A gradient overlay is applied to maintain text contrast
- Make sure image file names don't have spaces (use hyphens or underscores)

