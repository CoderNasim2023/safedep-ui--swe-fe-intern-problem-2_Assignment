# SafeDep UI 🚀

A clean and minimal UI for browsing package details and versions built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🔍 Overview

**SafeDep UI** provides a small frontend to view package information using filesystem-based dynamic routes. It's intended as a frontend for exploring package ecosystems, package names, and versions using URLs of the form:

```
/p/:ecosystem/:name/:version
```

Example:

`http://localhost:3000/p/npm/nextjs/15.5.4`

---

## 📷 Preview

![SafeDep UI demo]
<img width="1300" height="568" alt="image" src="https://github.com/user-attachments/assets/5193fcd3-256d-41ae-a22b-c539e09301a3" />


A small demonstration screenshot showing the package details page; replace this with a real screenshot or GIF for your repository.

---

## ⚙️ Features

- Dynamic App Router routes: `app/p/[ecosystem]/[name]/[version]/page.tsx`
- Built with **Next.js 16 (App Router)** and **TypeScript**
- Styling with **Tailwind CSS**
- Minimal, easy-to-read package details page for quick testing and demos

---

## 🧰 Prerequisites

- Node.js 18 or newer
- npm (or yarn / pnpm)

---

## 🚀 Quick Start

1. Clone the repo

```bash
git clone <repo-url>
cd safedep-ui
```

2. Install dependencies

```bash
npm install
```

3. Run the dev server

```bash
npm run dev
```

4. Open in your browser

```
http://localhost:3000
```

Visit a package route like `http://localhost:3000/p/npm/nextjs/15.5.4` to see the dynamic page in action.

---

## 📁 Project Structure

- `app/` - Next.js App Router pages and layouts
  - `app/p/[ecosystem]/[name]/[version]/page.tsx` - dynamic package details page
- `lib/` - helper utilities
- `public/` - static assets
- `styles/` or `globals.css` - global styles

---

## 🔧 Environment

This project supports a local `.env.local` file for server-only environment variables (Next.js loads `.env.local` automatically during development).

**Required variables for SafeDep API access:**

Create a file named `.env.local` at the project root and add:

```env
SAFEDEP_TENANT_ID=your-tenant-id-here
SAFEDEP_API_KEY=your-api-key-here
```

After adding or updating `.env.local`, **restart the dev server** so Next.js picks up the new values:

```bash
npm run dev
```

> Tip: Keep secrets out of source control. You can add a `.env.example` with placeholder keys (no real secrets) for other developers to copy.

---

## ✅ Development Notes

- Restart the dev server after adding new top-level routes or folders to ensure Next.js picks up filesystem changes.
- Lint with:

```bash
npm run lint
```

- Build for production:

```bash
npm run build
npm start
```

---

## 🤝 Contributing

Contributions are welcome! Please open issues for bugs or feature requests and submit pull requests for changes. Follow these guidelines:

- Fork the repository and create feature branches
- Keep changes focused and add tests where applicable
- Use clear commit messages and descriptive PR titles

---

## 📄 License

This repository does not include a LICENSE file. Add a license (for example, `MIT`) to make the project's license explicit.

---

## ✉️ Contact

If you have questions or want help improving the README, open an issue or reach out in the repository.

---

Thank you for using SafeDep UI! 💡
