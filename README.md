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
