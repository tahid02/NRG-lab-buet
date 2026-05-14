# Local Images Folder

This folder contains static images that are served directly by the web server. Files here are **not** processed by the build system — they are copied as-is into the `dist/images/` directory during `npm run build`.

## How to use

1. **Add your images here** (e.g., `public/images/team-photo.jpg`).
2. **Reference them in React components** using an absolute path:

   ```tsx
   // In any component
   <img src="/images/team-photo.jpg" alt="Team photo" />
   ```

   If you are using the `<LazyImage>` component:
   ```tsx
   <LazyImage src="/images/team-photo.jpg" alt="Team photo" />
   ```

3. **Build and deploy** as usual. The images will be available at:
   ```
   https://your-domain.com/images/team-photo.jpg
   ```

## Converting external URLs

Instead of:
```tsx
const image = 'https://i.ibb.co/GQRBzNxG/image.png';
```

Download the image, place it in `public/images/`, then use:
```tsx
const image = '/images/image.png';
```

## Important: cPanel / GitHub deployment notes

- Make sure your cPanel deployment script runs `npm run build` and serves the contents of the `dist/` folder (or copies `dist/` to `public_html/`).
- Images in this folder will end up in `dist/images/` after the build.
- If your site is hosted in a **subdirectory** (e.g., `https://example.com/ngr-lab/` instead of the root domain), update `vite.config.ts`:

  ```ts
  export default defineConfig({
    base: '/ngr-lab/',   // <-- add this line
    plugins: [react()],
    // ...
  });
  ```

  Then reference images with a relative path or update the base accordingly.

## Supported formats

- `.jpg`, `.jpeg`
- `.png`
- `.webp` (recommended for best performance)
- `.gif`
- `.svg`
- `.avif`

For best web performance, prefer **WebP** or **AVIF** formats.
