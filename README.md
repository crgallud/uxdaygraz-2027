# UX Day Graz 2027 – Eleventy Website

Conference website for the fictional event **UX Day Graz 2027**, built with the
static site generator [Eleventy (11ty)](https://www.11ty.dev/) and Nunjucks
templates. All pages are generated from JSON data during the build; the
generated site contains no client-side JavaScript.

The project is the Eleventy case study of a survey paper on static site
generators (Hugo, Eleventy, and Astro).

Live site: <https://crgallud.github.io/uxdaygraz-2027/>


## Requirements

- [Node.js](https://nodejs.org/) 18 or newer (the deployment uses Node.js 22)
- npm (included with Node.js)
- Git


## Getting Started

Clone the repository and install the dependencies. All commands are run
inside the project folder `uxdaygraz-2027/`:

```
git clone https://github.com/crgallud/uxdaygraz-2027.git
cd uxdaygraz-2027/uxdaygraz-2027
npm install
```


## Local Development

Start the development server:

```
npx @11ty/eleventy --serve
```

The site is then available at <http://localhost:8080/>. Eleventy watches the
source files and rebuilds the site automatically whenever a file is saved.


## Build

Generate the static website:

```
npx @11ty/eleventy
```

The generated site is written to the folder `_site/`. This folder is created
by the build and is not stored in the repository (see `.gitignore`).


## Project Structure

```
uxdaygraz-2027/
├── eleventy.config.js    # input folder src/, output folder _site/
├── package.json          # dependency: @11ty/eleventy
└── src/
    ├── _data/            # JSON data, available in all templates
    │   ├── program.json
    │   └── speakers.json
    ├── _includes/
    │   └── base.njk      # shared layout of all pages
    ├── assets/           # CSS and AVIF photos, copied unchanged into _site/
    ├── index.njk
    ├── program.njk
    ├── registration.njk
    ├── speaker.njk       # generates one page per speaker (pagination)
    ├── speakers.njk
    ├── thank-you.njk
    └── venues.njk
```

All internal links are relative, so the site also works when served from a
subfolder, as on GitHub Pages.


## Updating Content

Speakers and sessions are edited in `src/_data/speakers.json` and
`src/_data/program.json`. Adding a speaker to `speakers.json` automatically
creates a new speaker page during the next build.


Speaker photos are served as AVIF. New photos can be converted with
[ImageMagick](https://imagemagick.org/), resized to a width of 800 pixels:

```
magick photo.jpg -auto-orient -resize '800x800>' -strip -quality 60 photo.avif
```


## Deployment

Every push to the `main` branch triggers the GitHub Actions workflow
`.github/workflows/deploy.yml`. It installs the dependencies, runs the build,
and publishes the folder `_site/` on GitHub Pages.


## Licence

This project is licensed under the MIT Licence. See [LICENSE](LICENSE).
