#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Blue Resources Website Deployment ===${NC}"
echo -e "${YELLOW}Preparing files for deployment...${NC}"

# Make sure the script is executable
chmod +x deploy.sh

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null
then
    echo -e "${YELLOW}Netlify CLI not found. Installing...${NC}"
    npm install -g netlify-cli
fi

# Ensure we have all dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

# Create a production-ready directory
echo -e "${YELLOW}Creating deployment directory...${NC}"
mkdir -p deploy
cp -r *.html css js images public .nojekyll netlify.toml deploy/

# Navigate to the deployment directory
cd deploy

# Deploy to Netlify
echo -e "${GREEN}Deploying to Netlify...${NC}"
netlify deploy --prod

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "${YELLOW}Note: If this is your first deployment, you may need to authenticate with Netlify.${NC}"
echo -e "${YELLOW}Run 'netlify login' if prompted.${NC}" 