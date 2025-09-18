# Background and Motivation
We need a very simple Todo List app using React.js (Next.js) with Tailwind UI styling. Node.js backend is optional; the MVP can work fully client-side with localStorage persistence. The goal is to quickly ship a minimal, clean, and responsive todo app.

# Key Challenges and Analysis
- Keep scope minimal: add todo, toggle complete, delete.
- Ensure Tailwind is properly configured and base styles loaded.
- Handle client-only persistence (localStorage) with SSR-safe hydration.
- Keep components small and testable; use TDD where feasible for core behaviors.
- Optional API: simple Next.js route with in-memory store to demonstrate Node.js usage.

# High-level Task Breakdown
1. Initialize Next.js app with Tailwind CSS
   - Success: `npm run dev` serves a page with Tailwind styles applied.
2. Set up Tailwind UI base styles and config
   - Success: Typography and forms styles available; basic layout looks correct.
3. Implement minimal Todo UI: add, toggle, delete
   - Success: User can add items, mark complete, and delete; UI updates immediately.
4. Add localStorage persistence and hydration
   - Success: Refreshing the page preserves todos; no SSR hydration warnings.
5. Add basic component tests with React Testing Library
   - Success: Tests cover add/toggle/delete and persistence logic.
6. Optional: Implement Next.js API routes for todos (in-memory)
   - Success: `/api/todos` supports GET/POST/DELETE; UI can switch to API mode.
7. Wire simple page styling with Tailwind UI components
   - Success: Clean layout using Tailwind UI patterns; accessible and responsive.
8. Write concise README with run scripts
   - Success: Clear instructions to install, run, test.

# Project Status Board
- [x] Initialize Next.js app with Tailwind CSS
- [x] Set up Tailwind UI base styles and config
- [x] Implement minimal Todo UI: add, toggle, delete
- [x] Add localStorage persistence and hydration
- [x] Add basic component tests with React Testing Library
- [ ] Optional: Implement Next.js API routes for todos (in-memory)
- [x] Wire simple page styling with Tailwind UI components
- [x] Write concise README with run scripts

# Current Status / Progress Tracking
- Verified production build and tests pass (4/4).
- Attempted to start dev server and probe `http://localhost:3000`. If it does not auto-start in this environment, run locally: `cd web && npm run dev`.
- Next: User to open the app in a browser and check DevTools Console for any errors.

# Executor's Feedback or Assistance Requests
- Please share any browser console errors or terminal output from `npm run dev` so I can fix promptly.

# Lessons
- Include helpful debug info in output where appropriate.
- Always read files before editing them.
- If vulnerabilities appear during install, run `npm audit` and report.
- Ask before using git `-force` operations.

---

# New Goal: Desktop App (Planner)
We need the exact same Simple Todo app but as a native desktop-style application (not a website), placed in a separate directory on D: independent of the existing Next.js project.

## Proposed Stack
- Electron + Vite + React + TypeScript (Windows-friendly, Node-based)
- Tailwind CSS for styling (same look & feel)
- Persistence: localStorage (simple) or `electron-store` (optional upgrade)

## Target Directory
- D:\simpletodo-desktop (separate from D:\simpletodo)

## Key Requirements
- Same functionality: add, toggle, delete todos; persisted across app restarts
- Same minimal UI using Tailwind
- Single executable dev flow: `npm run dev` launches Electron window with the app
- Build scripts to produce distributables later (optional)

## High-level Task Breakdown (Desktop)
1. Scaffold Electron + Vite + React + TS project
   - Success: `npm run dev` opens an Electron window showing a placeholder React page.
2. Add Tailwind CSS and base styles
   - Success: Tailwind classes apply in the renderer; components render styled.
3. Implement Todo UI (add/toggle/delete)
   - Success: Behaves like web version inside the Electron window.
4. Add persistence
   - Option A: localStorage in renderer
   - Option B: `electron-store` via main process (safer). Success: Restart app and todos remain.
5. Wire minimal menu/shortcuts (optional)
   - Success: Basic app menu and Ctrl+R reload work.
6. Package build scripts (optional)
   - Success: `npm run build` creates an installable artifact.
7. README for desktop app
   - Success: Clear setup and run instructions.

## Risks / Notes
- Ensure Tailwind builds correctly in the renderer with Vite.
- Avoid SSR/hydration issues (Electron is client-only, simpler).
- If `electron-store` is used, ensure preload IPC is safe and minimal.

## Success Criteria
- Running `npm run dev` opens a window; todos add/toggle/delete; persist on restart.
- UI mirrors the website’s look and behavior.

---

# Updated Goal: Mobile App (Planner)
User clarified they want a mobile app, not a desktop app. We'll build a lightweight React Native app using Expo. Styling will mirror the web app via Tailwind-like utilities using NativeWind.

## Proposed Stack (Mobile)
- Expo (React Native + TypeScript)
- NativeWind (Tailwind CSS for RN) + Tailwind config
- Persistence: `@react-native-async-storage/async-storage`

## Target Directory
- D:\simpletodo-mobile (separate from other projects)

## Key Requirements
- Same functionality: add, toggle, delete todos
- Persist across app restarts using AsyncStorage
- Simple, responsive, accessible UI using NativeWind utilities
- Run on Android emulator or iOS simulator (or Expo Go on device)

## High-level Task Breakdown (Mobile)
1. Scaffold Expo app (TypeScript)
   - Success: `npx create-expo-app` completes; `npx expo start` runs; default screen shows on emulator or Expo Go.
2. Add NativeWind and Tailwind config
   - Success: Utility classes work in RN components; sample styled text renders.
3. Implement Todo UI (add/toggle/delete)
   - Success: Behaves like web version in the mobile UI.
4. Add persistence with AsyncStorage
   - Success: Restart the app and todos remain.
5. Add minimal tests (optional)
   - Success: Basic component tests with `@testing-library/react-native` pass locally.
6. README for mobile app
   - Success: Clear setup (Android/iOS/Expo Go), run and test instructions.

## Risks / Notes
- Ensure NativeWind and Tailwind config are properly integrated with Expo.
- Keyboard avoidance and input focus handling on small screens.
- iOS/Android differences minimal for this scope.

## Success Criteria
- `npx expo start` shows the Todo app; todos add/toggle/delete and persist; UI matches the web look within RN constraints.
