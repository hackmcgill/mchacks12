# [McHacks 12](https://mchacks.ca)

This repository contains the code behind the static site of McHacks 12.

## Setup

1. Make sure you have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/) installed.
2. Run `yarn global add gatsby-cli` to install Gatsby CLI locally.
3. Run `yarn` to install dependencies.
4. Run `gatsby develop` / `yarn start` to start dev server! 🚀

## Scripts

**Start the development server:**

`yarn start` or `gatsby develop`

**Build the website:**

`yarn build` or `gatsby build`

**Start the production server:**

`yarn serve` or `gatsby serve`

**Format code:**

`yarn format`

## Folder Structure

    .
    ├── docs                    # Documentation files
    ├── public                  # Build and bundled files
    ├── src                     # Source files
    │   ├── components          # Page sections files
    │   ├── assets              # Assets files
    │   │   ├── fonts
    │   │   └── images
    │   └── pages               # Page files
    │   └── styles              # Style files
    ├── static                  # Unbundled assets

## Contributing

> Want to contribute to the McHacks site?

See our [contributing guide](https://github.com/hackmcgill/mchacks7/blob/develop/docs/CONTRIBUTING.md).

## Deployment

We are using Vercel to compile and host our code. When a PR is created, Vercel builds the site and generates a deploy preview to confirm everything is working as expected. Once code is merged to `main` branch, Vercel will promote the code to production at `mchacks.ca`. Vercel also handles the SSL certificate for this site.

### Domains

The primary domain for this site `mchacks.ca` is registered with the HackMcGill Namecheap and DNS is with Cloudflare.
