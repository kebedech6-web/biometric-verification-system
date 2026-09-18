# Biometric Verification System

Vercel-ready Next.js demo with face-camera UI, five-step fingerprint animation, and editable admin content.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and `/admin`.

## Demo admin login

Password: `admin123`

For a different demo password, add this Vercel environment variable:

`NEXT_PUBLIC_ADMIN_PASSWORD`

## Important

This public starter is a UI demo. Face detection is represented by the camera and a timed scan; fingerprint verification is simulated because browsers cannot directly read arbitrary fingerprint hardware. Admin content is stored in browser localStorage, so edits are local to the browser. For production, replace this with a server database and real authentication before handling biometric data.
