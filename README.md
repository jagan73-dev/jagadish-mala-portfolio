# Jagadish Mala — Portfolio

A high-performance, single-page developer portfolio showcasing full-stack Java, Spring Boot, and modern web applications.

**Live site:** [https://jagadish-mala-portfolio.vercel.app](https://jagadish-mala-portfolio.vercel.app)

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

---

## Tech Stack
- **Framework & Tooling:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Effects:** Framer Motion, AOS (Animate on Scroll), WebGL (Splash Cursor)
- **Integration:** EmailJS, React QR Code

---

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Environment Variables

For the contact form direct email dispatch, configure these in a `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If omitted or unconfigured, the contact form automatically falls back to a pre-filled `mailto:` client prompt.)*
