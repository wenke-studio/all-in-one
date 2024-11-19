## 0.2.0 (2024-11-19)

### Feat

- **clerk**: add user-button component
- **clerk**: add signed-in and signed-out component as auth guard
- **clerk**: add sign-in and sign-out buttons
- **clerk**: initial clerk client
- add a store for app settings
- implement dashboard layout
- implement sign-in and sign-up pages
- add the initial authentication and protected routes
- add auth-guard component
- add a error page
- set the initial theme to the dark mode
- update the root page as landing page

### Fix

- **auth,dashboard**: remove auth and rewrite dashbaord with clerk components
- **clerk**: update components to get clerk instance via clerk-loaded
- **clerk**: remove the catch of `clerk.load` that is unnecessary
- **clerk**: remove clerk.subscribe to assign Clerk to the window
- **clerk**: add props to sign-in-button to control actions
- fix a type of hooks filename
- **dashboard**: add namespace select and search model to header
- **dashboard**: add user info to sidebar CTA
- **auth**: add user type
- **dashboard**: add `activeUrl` to sidebar
- **dashboard**: update sidebar-brand to show title and logo
- **dashboard**: update header-brand to show beta status
- use SPA mode for goto works
- set `bg-gray-900` as default dark background

### Refactor

- **clerk**: refactor clerk components with official document

## 0.1.0 (2024-11-14)

### Feat

- add used aliases of flex styles
- the initial project created by SvelteKit
- remove this project created by vite
