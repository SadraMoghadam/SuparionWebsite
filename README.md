# Suparion Games — Website

Marketing site for **Suparion Games** and its first title, **Rydash**. Built with Vite + React + TypeScript + Tailwind. Deploys to GitHub Pages on push to `main`.

## Run locally

```powershell
# Install Node 20+ (one-time)
winget install OpenJS.NodeJS.LTS

# In a fresh PowerShell window so PATH picks up Node:
npm install
npm run dev
# open http://localhost:5173
```

## Build for production

```powershell
npm run build
npm run preview   # preview the built site
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` triggers `.github/workflows/deploy.yml` and publishes to your Pages URL.

### Custom domain (when you buy `suparion.com`)

1. Create a file `public/CNAME` containing exactly: `suparion.com`
2. At your registrar, set DNS records:

   | Type  | Host | Value                                  |
   |-------|------|----------------------------------------|
   | A     | @    | `185.199.108.153`                      |
   | A     | @    | `185.199.109.153`                      |
   | A     | @    | `185.199.110.153`                      |
   | A     | @    | `185.199.111.153`                      |
   | CNAME | www  | `<your-github-username>.github.io`     |

3. In **Settings → Pages**, enter `suparion.com` as the custom domain and tick **Enforce HTTPS** once the cert provisions (a few minutes).

## Things to fill in before launch

Search the codebase for `TODO:` — every editable spot is marked.

- **`src/data/studio.ts`**
  - `contact.email` — your public contact address
  - `socials.*` — Instagram / YouTube / Twitter / TikTok URLs
  - `about[]` — replace with your real studio bio (placeholder copy is in place)
- **`src/data/games.ts`**
  - `storeLinks.ios` and `storeLinks.android` — App Store and Play Store URLs after launch
  - `description[]` — replace placeholder copy with the real Rydash pitch
- **`public/media/founder.jpg`** — drop in a real photo (any square image ~800x800 works). Until then the About card hides the image gracefully.

## Adding a new game later

1. Drop assets into `public/media/games/<slug>/`
2. Add an entry to the array in `src/data/games.ts`
3. Copy `RydashPage.tsx` to a new file and update the slug — or refactor to a dynamic route when you have a few more games.

## Asset notes

The Rydash trailer (`Rydash.MOV`) was re-encoded to web-friendly MP4 (H.264 + AAC) for cross-browser playback. To re-do it:

```powershell
ffmpeg -i "Games\Rydash\Rydash.MOV" -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p -movflags +faststart -crf 23 -c:a aac -b:a 128k "public\media\games\rydash\trailer.mp4"
```
