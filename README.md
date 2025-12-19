This project statically exports a Next.js site for GitHub Pages.

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view changes. Edit `app/page.tsx` to update the content.

## Build and export

Pages are published from the static export in `out/`.

```bash
npm run build && npm run export
```

The `basePath` and `assetPrefix` are set to `/gh-poc`, so assets and routes resolve correctly under the repository name when the site is hosted on GitHub Pages.

## Deploying to GitHub Pages via Actions

1. Enable GitHub Pages to deploy from GitHub Actions in the repository settings.
2. Push to `main` to run `.github/workflows/deploy.yml`. The workflow installs dependencies, builds, exports, uploads `out/` as the Pages artifact, and deploys it with `actions/deploy-pages`.
3. The site will be available at `https://<username>.github.io/gh-poc/` with trailing slashes on routes to match the static export configuration.
