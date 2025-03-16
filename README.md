# Blue Resources Website

Corporate website for Blue Resources Co., Ltd., showcasing AI services, case studies, and resources.

## Local Development

To run the static site locally:

```bash
# Install dependencies
npm install

# Run the static file server (serves from current directory)
npm run static-serve
```

The site will be available at http://localhost:4041

## Directory Structure

- `*.html` - Main HTML pages
- `css/` - Stylesheets
- `js/` - JavaScript files
- `images/` - Image assets
- `public/` - Other static assets

## Deployment

### Netlify Deployment

The site is configured for deployment with Netlify. There are multiple ways to deploy:

#### Option 1: Netlify CLI

```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Deploy to Netlify (production)
netlify deploy --prod
```

#### Option 2: Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag and drop the entire project directory
3. Your site will be instantly deployed with a Netlify URL

#### Option 3: GitHub Integration

The site can also be deployed automatically from GitHub by connecting your repository to Netlify.

### GitHub Pages Deployment

The site is also configured for GitHub Pages deployment. Push to the main branch, and GitHub Actions will automatically deploy the site.

## Troubleshooting

### Local Development Issues

If you encounter issues with the Next.js development server:

```bash
# Complete cleanup and reinstall
rm -rf .next node_modules package-lock.json
npm install
```

### Deployment Issues

- Make sure all assets are properly referenced with relative paths
- Check that all necessary files are included in the deployment
- Verify that the Netlify configuration in `netlify.toml` is correct

## License

All rights reserved © Blue Resources Co., Ltd. 