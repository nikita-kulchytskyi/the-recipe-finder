# The Recipe Finder

This is a Next.js-based Recipe Finder Application that allows users to search for recipes with filters, view search results, and check detailed recipe information.

## Features

- **Home Search Page**  
  - Search recipes by query text, cuisine type, and max preparation time.  
  - Form validation enables the search button only if at least one filter is provided.  
  - Navigation to Recipes page with applied filters as URL query parameters.

- **Recipes Page**  
  - Server-side data fetching from Spoonacular API using filters from query params.  
  - Recipe list with title and image displayed in a responsive grid.  
  - Clicking on a recipe navigates to its detailed page.  
  - Error handling and empty-state display for no results.

- **Recipe Details Page**  
  - Server-side fetching of detailed recipe data by recipe ID.  
  - Displays title, image (with fallback), preparation time, servings, ingredients, and summary.

- **Client and Server Components**  
  - Proper use of `"use client"` directive for interactive components (e.g. search form).  
  - Asynchronous server components for data fetching and rendering.

- **Styling**  
  - Fully styled using Tailwind CSS for responsiveness and accessibility.

- **Additional Improvements**  
  - Implemented a reusable error/empty state component with customizable messages and images.  
  - Added a client-side Back button component for better navigation.  
  - Used React Suspense where applicable to improve UX during data loading.

## Getting Started

1. Clone the repo.

2. Create `.env.local` in the root directory and add your Spoonacular API key:

```env
SPOONACULAR_API_KEY=your_api_key_here
NEXT_PUBLIC_SPOONACULAR_BASE_URL=base_api_url_here
```
3. Install dependencies and run the development server:

```bash
npm install
npm run dev
```
4. Open http://localhost:3000 in your browser.

## Notes
- API responses are cached for 1 minute to reduce redundant requests.

- Error and loading states are gracefully handled.

- The project uses Next.js 13+ App Router conventions.

# Technologies Used
- Next.js 15+ (App Router)

- React 19

- Tailwind CSS

- Spoonacular API