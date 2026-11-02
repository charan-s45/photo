# Photo Gallery

A single-page React app that shows photos from the [Lorem Picsum](https://picsum.photos) feed with infinite scroll.

## Features

- **One-column layout**: each row has the photo thumbnail, the author's name, and a like button.
- **Infinite scroll**: when you near the bottom of the page, the next page of the feed (`https://picsum.photos/v2/list?page=N`) loads and is added to the list. Loading stops once a page comes back empty.
- **Likes**: each photo has a Font Awesome thumbs-up icon with a count that starts at 0 and goes up by one on every click.
- Loading, error (with a retry button) and end-of-feed messages.

## Run it locally

You need [Node.js](https://nodejs.org) 20.19 or newer.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

To make a production build: `npm run build`, then `npm run preview` to view it.

## How it works

- `src/App.jsx` keeps the list of photos and the next page number. An empty `<div>` sits below the list, and an `IntersectionObserver` watches it. When it comes into view, the next page is fetched and appended. A ref stops the same page from being fetched twice.
- `src/components/PhotoCard.jsx` renders one photo row and keeps that photo's like count in its own state. It loads a 200px-wide resized image from Picsum instead of the full-size `download_url`, so the page stays fast. Clicking a thumbnail opens the full-size image.
- `src/index.css` holds the styles.

## Tech

React, Vite, Font Awesome (`@fortawesome/react-fontawesome`).
