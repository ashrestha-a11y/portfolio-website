# Portfolio Website

A multi-page software engineering portfolio built with Next.js, React, and TypeScript.

## Features

- Responsive multi-page layout
- Dark mode toggle
- Resume preview and download
- Visual skills and project sections
- Backend-powered contact form using Resend
- Client-side validation, loading state, and success/error messaging

## Run locally

```bash
npm install
npm run dev
```

## Environment variables

Create `.env.local` in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=your_resend_account_email_here
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

## Build

```bash
npm run build
npm start
```
