# Deploy to GitHub Pages

This guide covers deploying the portfolio to **GitHub Pages** at:

**https://arifm507.github.io/arif_portfolio/**

GitHub Pages serves **static files only** (no Node.js/SSR). The project includes a `github-pages` build configuration that produces a static prerendered site.

---

## What is already configured in this project

| File | Purpose |
|------|---------|
| `angular.json` → `github-pages` | Static build with `baseHref: /arif_portfolio/` |
| `package.json` → `build:gh-pages` | Build command for GitHub Pages |
| `.github/workflows/github-pages.yml` | Auto-deploy on push to `master`/`main` |
| Asset paths | Use relative `assets/...` paths (work with subpath hosting) |

---

## Step 1 — GitHub repository settings

1. Open your repo: [github.com/arifm507/arif_portfolio](https://github.com/arifm507/arif_portfolio)
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source:** `GitHub Actions` (not “Deploy from a branch”)
4. Save — no branch selection needed when using Actions

---

## Step 2 — Push the project (including workflow)

Commit and push to `master` (or `main`):

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin master
```

The **Deploy to GitHub Pages** workflow runs automatically and publishes the site.

---

## Step 3 — Verify deployment

1. Go to **Actions** tab in GitHub — confirm the workflow succeeded (green check)
2. Open **Settings** → **Pages** — note the live URL
3. Visit: **https://arifm507.github.io/arif_portfolio/**

First deploy may take 1–3 minutes.

---

## Manual build (optional, local test)

Test the GitHub Pages build locally before pushing:

```bash
npm run build:gh-pages
```

Output folder: `dist/arif_portfolio/browser/`

Serve locally with a static server to verify paths:

```bash
npx serve dist/arif_portfolio/browser -l 5000
```

Open [http://localhost:5000/arif_portfolio/](http://localhost:5000/arif_portfolio/) — note the subpath in the URL.

---

## Important: Repository name and URL

GitHub Pages project sites use this URL pattern:

```
https://<username>.github.io/<repository-name>/
```

Your repo is `arif_portfolio`, so:

- **Site URL:** `https://arifm507.github.io/arif_portfolio/`
- **baseHref:** `/arif_portfolio/` (already set in `angular.json`)

### Optional: Use root domain (no subpath)

If you want **https://arifm507.github.io/** (cleaner URL):

1. Create/rename repo to **`arifm507.github.io`**
2. Change `baseHref` in `angular.json` → `github-pages` to `"/"`
3. Update `.github/workflows/github-pages.yml` if repo name changes

---

## SSR vs GitHub Pages

| Mode | Use case |
|------|----------|
| `npm run build` | SSR (Node server) — for VPS, Azure, Render, etc. |
| `npm run build:gh-pages` | Static — for **GitHub Pages** |

GitHub Pages cannot run `npm run serve:ssr:arif_portfolio`.

---

## Troubleshooting

### Blank page or missing assets

- Confirm the URL includes the subpath: `/arif_portfolio/`
- Hard refresh (Ctrl+Shift+R)
- Check **Actions** log for build errors

### 404 on refresh

The workflow copies `index.html` → `404.html` for SPA fallback. This app is a single route, so this is usually sufficient.

### Workflow permission errors

Ensure **Settings** → **Actions** → **General** → Workflow permissions allows **Read and write**.

### Custom domain (optional)

1. **Settings** → **Pages** → **Custom domain** → enter your domain
2. Add DNS records at your registrar (GitHub shows instructions)
3. Update SEO canonical URLs after domain is live

---

## After deployment checklist

- [ ] Hero profile image loads
- [ ] Resume PDF downloads
- [ ] LinkedIn / GitHub links work
- [ ] Theme toggle works
- [ ] All sections scroll correctly
- [ ] Mobile layout looks correct

---

## Useful commands

```bash
npm run build:gh-pages    # Build static site for GitHub Pages
npm run verify            # Production build + tests (default SSR config)
git push origin master    # Trigger deploy workflow
```
