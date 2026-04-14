# Pritesh Patel Portfolio

Premium personal portfolio built with Next.js, Tailwind CSS, and Framer Motion for a Senior Backend / IAM Engineer targeting executive-level financial institution roles.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- next-themes for dark/light mode
- Vercel-ready structure

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
app/
  layout.tsx
  loading.tsx
  page.tsx
components/
  architecture-flow.tsx
  animated-counter.tsx
  experience-timeline.tsx
  project-card.tsx
  section-heading.tsx
  theme-provider.tsx
  theme-toggle.tsx
public/
  Pritesh-Patel-Resume.pdf
```

## Deployment

This project is ready to deploy on Vercel:

```bash
npm run build
```

Then import the repository into Vercel or deploy with the Vercel CLI.

## Customization Notes

- Update `metadataBase` in `app/layout.tsx` with your production domain.
- Replace the placeholder LinkedIn / calendar text in `app/page.tsx` with your live URLs before deployment.
- Swap or expand project content directly in `app/page.tsx` if you want to tune messaging for a specific employer.
