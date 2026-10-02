# Bobber the Water Safety Dog — Tulsa District

A responsive, static website that brings together Bobber the Water Safety Dog resources and water safety information for the U.S. Army Corps of Engineers Tulsa District. It consolidates the Bobber program page and cartoons/graphics library into one searchable, accessibility-minded experience.

## Run locally

No build tools or server-side code are required. Open `index.html` in a browser, or serve this folder with any static web server. Resource PDFs, thumbnail artwork, and the Bobber logo (`assets/bobber-logo.png`) are stored in `assets/` and load locally.

## Publish with GitHub Pages

1. Push the site files to the GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then choose **Save**.

The site has no build step. GitHub Pages serves `index.html`, `styles.css`, `script.js`, and `assets/` directly. All internal links use relative paths, so the site works from a project page URL such as `https://usaceswosu.github.io/Tulsa-District-Water-Safety-Web-Platform/`.

## Updating resources

Add the PDF to `assets/` and its preview image to `assets/graphics/`, then add an entry to the `resources` list in `script.js`. Use the exact filenames (including spaces and punctuation); the site URL-encodes them when creating links.

External video and official program links point to YouTube and USACE websites. The safety reminders are educational and do not replace local rules, adult supervision, or professional guidance.

## Before official publication

The Spanish interface and water-safety content are draft translations and need review by a fluent Spanish speaker and a district water-safety reviewer. The resource titles are translated for navigation, but linked PDFs remain the original files. See [CONTENT_REVIEW.md](CONTENT_REVIEW.md) for the content, link, branding, and accessibility review checklist. This site has not yet had a formal Section 508 / WCAG conformance review.
