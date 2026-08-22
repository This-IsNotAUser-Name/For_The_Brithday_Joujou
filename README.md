# Birthday Adventure

A little "choose your own adventure" birthday page: a landing screen with a
message, then a branching story told through photos + text.

## The only file you need to edit
**`story.js`** — this is where the birthday message, the photos, and every
scene of the story live. It's heavily commented — open it and read the
comments at the top before changing anything.

## Adding your own photos
Put your photos in the `images/` folder and point to them from `story.js`
(e.g. `image: "images/our-trip.jpg"`). Use lowercase file names with no
spaces (`beach-day.jpg`, not `Beach Day.jpg`).

## Previewing your changes
Just double-click `index.html` to open it in your browser. No install,
no server, nothing to run. Edit `story.js`, save, refresh the page.

## Publishing
See the full step-by-step in the chat where this was built, or in short:
1. Create a GitHub repository and upload these files (keeping the `images/`
   folder structure intact).
2. In the repo, go to **Settings → Pages**, set source to your main branch,
   root folder, and save.
3. GitHub gives you a link like `https://yourname.github.io/repo-name/`.

## Files
- `index.html` — page structure (no need to edit)
- `style.css` — visual styling (no need to edit, but tweak colors if you want)
- `story.js` — **your content — edit this one**
- `app.js` — the logic that runs the story (no need to edit)
- `images/` — your photos go here
