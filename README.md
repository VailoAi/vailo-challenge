# Vailo Frontend Challenge — Credit Packs (2–3h)

Build a pixel-perfect credit packs landing page from the **reference images** in `/reference` and implement a small data flow (form submission + persistence + listing).

This challenge uses the same core technologies we use at Vailo: **React 19**, **TypeScript**, **TailwindCSS**, and **Radix UI**.

## Requirements

### UI

- **Top bar**: Logo and avatar placeholders (already scaffolded)
- **Title**: "Pick Your Credit Pack" with gradient text (already scaffolded)
- **Responsive grid of 6 credit pack cards**:
  - Desktop (≥1200px): **3 columns**
  - Tablet (≥768px): **2 columns**
  - Mobile: **1 column**
- **Card styling** (match the reference as closely as possible):
  - Dark gradient background
  - 28px border radius
  - Thin border with subtle opacity
  - Separator line between content sections
  - Purple pill "Buy Now" CTA button
- **Purchase modal** (use Radix UI Dialog — already scaffolded in `src/components/Modal.tsx`):
  - Form fields: `name`, `email`, `packId` (preselected)
  - Styled to match the dark theme
  - Accessible (keyboard navigation, focus trap via Radix)

### Data & State

- Use **Zustand** (already in dependencies) to manage application state (selected pack, modal open/close, orders list)
- On form submit, **persist the order** using the helpers in `src/lib/storage.ts` (localStorage)
- Display a **"Recent Purchases"** section below the cards grid showing persisted orders

### Stretch Goals (optional, not required)

- Add form validation (required fields, email format)
- Add animations/transitions on modal open/close or card hover
- Implement a minimal API (`POST/GET /api/orders`) writing to a JSON file or SQLite instead of localStorage
- Add unit tests with Vitest

## What We Evaluate

| Area | What we look for |
|------|-----------------|
| **TypeScript** | Strict types, no `any`, proper interfaces/types |
| **Component architecture** | Clean separation, reusable components, clear props |
| **TailwindCSS** | Effective use of utility classes, responsive design, consistent spacing |
| **Accessibility** | Proper use of Radix UI Dialog, semantic HTML, keyboard navigation |
| **State management** | Clean Zustand store, appropriate separation of concerns |
| **Pixel-perfect** | Attention to detail matching the reference design |
| **Git workflow** | Small, descriptive commits with a clean PR |
| **Code quality** | Readable, maintainable, well-organized code |

## Getting Started

The project is already scaffolded with the basic structure. You need to:

1. Complete the card styling to match the reference design
2. Implement the purchase modal form
3. Create a Zustand store for state management
4. Add the recent purchases list
5. Polish the UI to be pixel-perfect

```bash
pnpm i
pnpm dev
# or: npm i && npm run dev / yarn && yarn dev
```

## Tech Stack (pre-configured)

- **React 19** + **TypeScript**
- **Vite 6** (dev server + bundler)
- **TailwindCSS 4** (utility-first CSS)
- **Radix UI** Dialog (accessible modal)
- **Zustand** (state management)

## Project Structure

```
src/
├── main.tsx              # Entry point
├── index.css             # TailwindCSS import
├── App.tsx               # Main layout (scaffolded)
├── components/
│   ├── CreditCard.tsx    # Card component (basic scaffolding)
│   ├── Grid.tsx          # Responsive grid (scaffolded)
│   └── Modal.tsx         # Purchase modal (Radix Dialog scaffolding)
├── data/
│   └── packs.ts          # Credit packs data + types
└── lib/
    └── storage.ts        # localStorage helpers (ready to use)
```

## Deliverables

- **Branch**: `feature/credit-packs-challenge`
- Small, descriptive commits + **Pull Request** to `main`
- **README updates**: How to run, decisions you made, time spent
- **2–3 screenshots** or a short GIF of your solution
- Download this repo, upload it to your **personal GitHub account** (private repo)
- Invite **@ismaelmartinezc** as a collaborator

## Time

This challenge is designed to take **2–3 hours**. Focus on quality over quantity — a well-implemented core is better than a rushed complete solution.
