# Ashley Schlabach — Software Developer Portfolio

A responsive, static portfolio site with accessible tabs, a structured geometric layout, nature-inspired grain/contour artwork, larger supporting text, and stronger color contrast for readability. The Home, About, Experience, Skills, Projects, Education, and Contact views switch in place instead of requiring a long scroll.

## Files
- `index.html` — all page sections and content
- `styles.css` — layout, responsive behavior, colors, decorative background
- `script.js` — accessible tab switching, current year, copy-phone button

## Preview locally
Open `index.html` in a browser. For the smoothest experience, use a local static server (for example, VS Code's Live Server extension).

## Publish free with GitHub Pages
1. Create a new public GitHub repository (for example, `ash557.github.io` if available for your account).
2. Upload the files in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment section, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and use the URL shown on the Pages settings screen.

## Before publishing
- Review your contact details and decide whether you want your phone number publicly visible.
- Replace the generic GitHub profile links on each project with direct repository URLs when available.
- Add a downloadable PDF résumé if you'd like one available from the page.
- Confirm dates, wording, and any employer/project details are okay to share publicly.
- If you want a portrait, add it later; the current design intentionally uses abstract botanical/geometric artwork rather than a stock photo.

This site uses Google Fonts from a CDN. If you'd prefer no external requests, remove the Google Fonts `<link>` tags and use the system fallback fonts defined in `styles.css`.


University logos in the Education tab are included in the `assets/` folder. Keep that folder beside `index.html` when deploying.
