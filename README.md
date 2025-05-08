# Blog Website

A personal blog website built with React and Vite, deployed to Cloudflare Workers and Pages.

## 📋 Overview

This project is a modern, fast blog website built using the React framework with Vite as the build tool. It's deployed and hosted using Cloudflare Workers and Pages for optimal performance and global distribution.

## ⚙️ Technologies Used

- **Frontend**: React.js
- **Build Tool**: Vite
- **Deployment**: Cloudflare Workers & Pages
- **Version Control**: GitHub

## 🚀 Deployment

This website is automatically deployed from GitHub to Cloudflare Pages.

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git
- Cloudflare account
- GitHub account

### Setup and Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/Arious18/React-vite-Blog-Website.git
   cd React-vite-Blog-Website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

This will generate a `dist` directory with the production build.

### GitHub Setup

1. Create a new repository on GitHub
2. Initialize git in your project if not already done
   ```bash
   git init
   ```
3. Add your GitHub repository as remote
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```
4. Add, commit and push your changes
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Cloudflare Pages Setup

1. Log in to your Cloudflare dashboard
2. Go to Workers & Pages
3. Click "Create application" > "Pages"
4. Connect to your GitHub account and select your repository
5. Configure your build settings:
   - Build command: `npm run build` or `yarn build`
   - Build output directory: `dist`
   - Node.js version: Select appropriate version (14+)
6. Click "Save and Deploy"

## 🔄 Continuous Deployment

This project is set up for continuous deployment. Every push to the `main` branch will trigger a new build and deployment to Cloudflare Pages.




## 🧩 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to Cloudflare server



## 👤 Author

Azat Vepakulyyev


