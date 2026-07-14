# บทเรียนออนไลน์วิชาวิทยาการคำนวณ ม.3

React + Vite application connected to Firebase project `com3-669cd` and ready
for deployment on Vercel.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable output is written to `dist`.

## Vercel

Import the GitHub repository in Vercel. The included `vercel.json` configures
the Vite build and SPA fallback automatically.

After the first deployment, add the production Vercel hostname in Firebase:
`Authentication > Settings > Authorized domains`.

## Firebase

Enable Email/Password Authentication, Firestore, and Storage. Security rules
are provided in the `firebase` directory. Never commit a service account key.
