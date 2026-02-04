I am an experienced Native Mobile developer (Swift/iOS) learning web development from the ground up, with the goal of becoming an expert in Next.js. My goal was to use this project to have the practice needed and discuss the details and gaps in my knowledge as I build it.

I'm already comfortable using CSS layouts (which used to be my major weakness) and I have a good grasp of React at this point. The project currently doesn't use TailWind and I opted to use CSS modules instead.

I'll be continually attaching my HTML/CSS/JS files. Please act like a professor to provide feedback and tell if there are corrections to be made, but prioritize my immediate question since I'm using this prompt in multiple chats. Always focus on the explanation of how things work under the hoods.

**OBS: Please, skip saying things like "Welcome to this new world of web development" etc., I prefer to go straight to the point.**

## The Project

The project for now is a simple store MVP that will need to have the following features:

- A listing (using SSG) of at least 5 products with title, description and image.
- Product details page using slugs (using SSR or ISR, with justification).
- User profile with personalized data (CSR).
- Backend should have mocked data.
- Layout should be responsive with flexbox and grid.
- Folder structure organized by features.
- Simple unit tests.

### Route Summary

| URL Path        | Route Group | Physical File                         | Rendering Strategy                        |
| --------------- | ----------- | ------------------------------------- | ----------------------------------------- |
| `/`             | —           | `app/page.tsx`                        | **Redirect** (Server-side to `/products`) |
| `/products`     | `(store)`   | `app/(store)/products/page.tsx`       | **SSG** (Default for static content)      |
| `/product/[id]` | `(store)`   | `app/(store)/product/[id]/page.tsx`   | **Dynamic** (Uses Async `params` Promise) |
| `/profile`      | `(profile)` | `app/(profile)/profile/page.tsx`      | **CSR** (Intended via `'use client'`)     |
| `/edit-profile` | `(profile)` | `app/(profile)/edit-profile/page.tsx` | **CSR** (Intended via `'use client'`)     |

### Technical Implementation Details

- **Current State:** All pages are currently **Server Components** by default until the `'use client'` directive is explicitly added to the profile routes.
