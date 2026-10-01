<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Base44 Dev Environment

- **Stack**: Next.js 16 (Turbopack) static-export site, React 19, Three.js (react-three-fiber/drei), GSAP, Tailwind CSS 4. No backend, no database, no external secrets.
- **basePath**: `next.config.mjs` hardcodes `basePath: "/yarin"` for GitHub Pages. It is now env-configurable via `NEXT_PUBLIC_BASE_PATH` (defaults to `"/yarin"`). The Base44 compose sets it to empty so the dev server serves from `/`.
- **allowedDevOrigins**: Set in `next.config.mjs` from `BASE44_PUBLIC_HOST_SUFFIX` so the preview origin can access HMR/dev assets. Without it, the page loads but live reload is blocked.
- **Fonts**: `next/font/google` (Rubik, Cormorant_Garamond, Suez_One) downloads at dev startup — requires network access.
- **Images**: Remote images from Pexels (`images.pexels.com`) are used throughout; `images.unoptimized: true` is set for static export.
- **Verify**: `docker compose -f docker-compose.base44.yml up -d`, then curl `http://localhost:3000/` and `http://localhost:3000/gallery/` — both should return 200.
- **Prebuilt artifacts**: `out/`, `index.html`, `404.html`, `_next/`, `gallery/` at repo root are from `next build` (static export for GitHub Pages). They are NOT used by the dev server and can be ignored during development.
