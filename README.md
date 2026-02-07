## NextStore: Modern E-Commerce Lab

### Overview

NextStore is a high-performance web application built with **Next.js 16**. As an iOS developer learning web architecture, this project serves as a deep dive into **Fluid Design**, **Server-Side Rendering (SSR)**, and the **Next.js App Router**.

### Tech Stack & Architecture

- **Framework:** Next.js 16 (using the stable **Turbopack** engine for builds).
- **Styling:** CSS Modules, for the proximity with the bare-metal of the web and better performance overall (since Styled Components requires a runtime provider, using it often forces you to turn your layout or pages into Client Components).
- **Routing:** App Router with **Incremental Prefetching**, reducing total transfer sizes during navigation.
- **Runtime:** Node.js (utilizing the new `proxy.ts` for routing logic).

### Performance Strategy: Hybrid ISR

The Product Detail route (`/product/[id]`) implements a Hybrid Incremental strategy:

- **Build-time SSG:** `generateStaticParams` ensures top-tier SEO and instant loads for existing inventory.
- **On-demand ISR:** `revalidate: 3600` and `dynamicParams: true` allow the store to scale infinitely without full redeploys, updating the background cache every hour.

### Development

The project uses a `Makefile` to streamline development workflows:

```bash
make dev     # Starts Next.js 16 with Turbopack
make build   # Production build with separate output directory (.next/dev)
make format  # Prettier code formatting
```
