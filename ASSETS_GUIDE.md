# Assets Setup Guide

This guide will help you add images and assets to your portfolio.

## Quick Start: Adding Your Images

### 1. Profile Photo

**Location**: `public/images/profile.jpg`

**Specifications**:
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **File size**: < 500KB (optimized)

**How to add**:
1. Save your photo as `profile.jpg` in `public/images/`
2. Uncomment the image section in `src/ui/sections/hero.tsx` (lines 33-45)

**Example code** (already in hero.tsx, just uncomment):
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-8"
>
  <Image
    src="/images/profile.jpg"
    alt="Rajeshwory"
    width={200}
    height={200}
    className="rounded-full mx-auto border-4 border-gray-100 shadow-lg"
    priority
  />
</motion.div>
```

---

### 2. Project Screenshots

**Location**: `public/images/projects/`

**Specifications**:
- **Size**: 1200x800px (3:2 ratio) or 1200x900px (4:3 ratio)
- **Format**: JPG or PNG
- **File size**: < 800KB each

**How to add**:
1. Add screenshots to `public/images/projects/`
2. Update `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "...",
    technologies: ["React", "TypeScript"],
    imageUrl: "/images/projects/ecommerce.jpg",  // Add this
    githubUrl: "https://github.com/yourusername/project",  // Optional
    liveUrl: "https://yourproject.com",  // Optional
  },
  // ... more projects
];
```

**Naming convention**:
- Use descriptive, lowercase names with hyphens
- Examples: `ecommerce-platform.jpg`, `task-manager.jpg`

---

### 3. Favicon

**Location**: `public/favicon.ico`

**Specifications**:
- **Size**: 32x32px or 16x16px
- **Format**: ICO format (preferred) or PNG

**How to create**:
1. Use a tool like [favicon.io](https://favicon.io) to generate from image or text
2. Download and replace `public/favicon.ico`
3. Restart the dev server

---

### 4. Social Media Preview Image (Open Graph)

**Location**: `public/images/og-image.jpg`

**Specifications**:
- **Size**: 1200x630px (mandatory for proper display)
- **Format**: JPG or PNG
- **Content**: Your name, title, and maybe a design element

**Why it matters**:
When someone shares your portfolio on LinkedIn, Twitter, or Facebook, this image appears as the preview.

**Tools to create**:
- [Canva](https://www.canva.com) - Use "Facebook Post" template (1200x630px)
- Figma or Adobe Photoshop

**Example content**:
```
Rajeshwory
React | React Native Developer
[Your website URL]
```

---

## Image Optimization Tips

### Before Adding Images:

1. **Compress images**: Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
2. **Use appropriate formats**:
   - Photos: JPG (better compression)
   - Graphics/Logos: PNG (transparency support)
   - Modern browsers: WebP (best quality/size ratio)

3. **Resize to exact dimensions** needed (don't use large images and scale down in CSS)

### Next.js Image Component Benefits:

The portfolio already uses `next/image` which provides:
- ✅ Automatic lazy loading
- ✅ Automatic format optimization (WebP when supported)
- ✅ Responsive images
- ✅ Blur placeholder while loading

---

## Quick Checklist

Before deploying your portfolio, make sure you have:

- [ ] Profile photo added (`public/images/profile.jpg`)
- [ ] Profile image uncommented in Hero section
- [ ] Project screenshots added (`public/images/projects/`)
- [ ] Project `imageUrl` fields updated in `projects.ts`
- [ ] Custom favicon added (`public/favicon.ico`)
- [ ] Open Graph image created (`public/images/og-image.jpg`)
- [ ] All images optimized and compressed
- [ ] GitHub/Live URLs added to projects (if applicable)

---

## Testing Your Images

After adding images, test them:

```bash
npm run dev
```

1. **Profile photo**: Should appear in Hero section (if uncommented)
2. **Project images**: Should appear at top of each project card
3. **Favicon**: Check browser tab icon
4. **OG image**: Use [Open Graph Debugger](https://www.opengraph.xyz/) to preview social shares

---

## Example File Structure

```
public/
├── favicon.ico
├── images/
│   ├── profile.jpg              # Your photo (400x400px)
│   ├── og-image.jpg             # Social preview (1200x630px)
│   └── projects/
│       ├── ecommerce-platform.jpg
│       ├── task-manager.jpg
│       ├── weather-dashboard.jpg
│       └── social-feed.jpg
```

---

## Need Help?

- Images not showing? Check the file path and name matches exactly
- Image too large? Use TinyPNG to compress
- Wrong format? Convert using online tools like CloudConvert
- Blurry images? Use higher resolution source images

Remember: Good images make a big difference in portfolio presentation! 📸


