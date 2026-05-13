# Vercel Deployment Guide

## Project: Architecture Portfolio - Dilnaz Esengildina

### Prerequisites
- GitHub account with repository access
- Vercel account (free tier available)
- Node.js and npm installed locally

### Setup Steps

#### 1. Connect to GitHub
1. Push all changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Clean Vercel deployment configuration"
   git push origin main
   ```

#### 2. Create Vercel Project
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Select your GitHub repository (`portfolio-kisa`)
5. Click "Import"

#### 3. Configure Project Settings
- **Project Name**: `portfolio-kisa` (or your preferred name)
- **Framework Preset**: Select "Other" (Angular not in presets)
- **Root Directory**: leave empty (default)
- **Build Command**: `npm run build` (pre-configured)
- **Output Directory**: `dist/portfolio-kisa` (pre-configured)

#### 4. Environment Variables (Optional)
If needed, add environment variables in Project Settings → Environment Variables.
Currently not required for static deployment.

#### 5. Deploy
1. Click "Deploy"
2. Wait for build to complete (usually 2-3 minutes)
3. Get your Vercel URL: `https://your-project-name.vercel.app`

### Post-Deployment

#### Verify Deployment
- Check all pages load correctly
- Test responsive design on mobile devices
- Verify all links and assets work

#### Set Custom Domain (Optional)
1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain (e.g., `portfolio.example.com`)
3. Follow DNS configuration instructions

#### Automatic Deploys
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests are created automatically

### Project Configuration Files

#### Key Files for Deployment
- `vercel.json` - Vercel-specific configuration
- `.vercelignore` - Files to exclude from deployment
- `angular.json` - Angular build configuration
- `package.json` - Dependencies and build scripts
- `tsconfig.app.json` - TypeScript configuration
- `.gitignore` - Git ignore rules

#### What Was Cleaned Up
- ✓ Removed GitHub Pages configuration (`baseHref` from angular.json)
- ✓ Removed old build artifacts from root directory
- ✓ Removed unnecessary dependencies (SSR, test tools)
- ✓ Fixed TypeScript configuration errors
- ✓ Renamed project from "my-app" to "portfolio-kisa"
- ✓ Added Vercel-specific headers for caching optimization

### Troubleshooting

#### Build Fails
1. Check build logs in Vercel Dashboard
2. Verify all dependencies are in `package.json`
3. Ensure `npm run build` works locally: `npm run build`
4. Check for TypeScript errors: Look for `.ts` files with issues

#### Page Not Found Errors
- Single Page Application (SPA) routing is configured in `vercel.json`
- All non-file routes redirect to `/index.html`

#### Performance Issues
- Check cached assets in browser (Ctrl+Shift+Delete)
- Clear Vercel cache in Dashboard → Settings → Git

### Local Testing

#### Build Locally
```bash
npm install
npm run build
```

#### Test Production Build Locally
```bash
npm install -g serve
serve -s dist/portfolio-kisa
```

Then visit `http://localhost:3000`

### Support
For additional help, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Angular Documentation](https://angular.dev)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

**Last Updated**: May 13, 2026
**Status**: Ready for Vercel Deployment ✓
