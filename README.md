# Urwashi Dhawas – Portfolio (React + Vite + TypeScript + Tailwind + Framer Motion)

## Run locally (VS Code)
1. Install Node.js 18+ from nodejs.org.
2. Unzip, then `File > Open Folder` in VS Code. Open a terminal (Ctrl+`).
3. `npm install`
4. `npm run dev` and open the printed http://localhost:5173 link.
5. Production check: `npm run build` then `npm run preview`.

## Make it yours (all in `src/data.ts`)
- `config`: email, LinkedIn, GitHub, resume and photo paths.
- Photo: copy to `public/profile.jpg`. Resume: copy to `public/resume.pdf`.
- Certificates: put PDFs in `public/certs/` and set `link: '/certs/name.pdf'` (or a verification URL). Add real dates and IDs.
- Projects: fill `contribution`, `learnings` and `stack` (replace the "EDIT ME" text).
- Skills, experience dates, research references: edit the arrays.
- Contact form opens the visitor's email app (mailto), so no backend or keys are needed.

## Deploy: GitHub + Vercel
1. Create an empty repo on github.com. In the project folder: `git init`, `git add .`, `git commit -m "Portfolio"`, `git branch -M main`, `git remote add origin <repo-url>`, `git push -u origin main`.
2. On vercel.com choose Add New > Project, import the repo. Framework: Vite (auto-detected), build `npm run build`, output `dist`. Click Deploy.
3. Every `git push` redeploys automatically.

## Final checklist
- [ ] Nav links scroll and highlight; theme toggle works; back-to-top appears after scrolling
- [ ] Project filters, detail modals (Esc closes) and timeline expansion work
- [ ] Real email, LinkedIn, GitHub, resume, photo added; certificate links and dates added
- [ ] Noise project tools confirmed; no unproven claims remain
