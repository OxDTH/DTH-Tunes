<h1 align="center"> DTHTunes Web Application ✨</h1>

### Setup Project Frontend

```bash
cd frontend
npm install vite @latest
npm audit fix if found any vulnerabilities
npm install
npm i zustand
npm i axios
npm i react-router-dom
npm i socket.io-client
npm install -D tailwindcss postcss autoprefixer
npm install -D @types/node
npx shadcn@latest
npm install @clerk/clerk-react
npm run dev

```

### Setup Project backend

```bash
cd backend
npm i express mongoose dotenv cloudinary cors @clerk/express socket.io
npm i -D nodemon
npm i express-fileupload
npm i node-cron


```

### Setup .env file in _backend_ folder

```bash
PORT=...
MONGODB_URI=...
ADMIN_EMAIL=...
NODE_ENV=...

CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLOUDINARY_CLOUD_NAME=...


CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

### Setup .env file in _frontend_ folder

```bash
VITE_CLERK_PUBLISHABLE_KEY=...
```

For building App:

- npm install --save-dev electron

For Run:

- npm run build

For Build ( Testing):

- npm electron start

For Build App:

- npm electron build

## 🔄 Automated Dependency Management

This project uses **Dependabot** to automatically keep dependencies up to date. Here's what's configured:

### What Dependabot Does

- **Weekly scans** every Monday at 9:00 AM for outdated dependencies
- **Monitors multiple package.json files**: root, backend, and frontend
- **Creates pull requests** automatically when updates are available
- **Limits open PRs** to prevent spam (10 for root, 5 each for backend/frontend)

### How It Works

1. **Automatic Detection**: Dependabot scans your package.json files weekly
2. **PR Creation**: Creates separate PRs for each dependency update
3. **CI Validation**: GitHub Actions automatically test each Dependabot PR
4. **Review & Merge**: PRs are assigned to @OxDTH for review

### PR Labels & Organization

- `dependencies` - All dependency updates
- `npm` - NPM package updates
- `backend` - Backend-specific updates
- `frontend` - Frontend-specific updates
- `github-actions` - GitHub Actions workflow updates

### Configuration Files

- `.github/dependabot.yml` - Main Dependabot configuration
- `.github/workflows/dependabot.yml` - Automated testing for Dependabot PRs
- `.github/workflows/ci.yml` - Continuous integration workflow

### Managing Dependabot PRs

- **Review**: Check compatibility and breaking changes before merging
- **Auto-merge**: Small patch updates can often be merged automatically
- **Batch updates**: Consider merging related updates together
- **Testing**: CI automatically runs build and test processes
