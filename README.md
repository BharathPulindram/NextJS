This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## BHARATH PULINDRAM

### NextJS supports two types of pre-rendering

- Static Generation
- Server Side Rendering

### Static Generation

- getStaticProps runs only on server side not on client side. It will run on every request.
  getStaticProps is allowed only in page folder and not in regular component. It is used only for pre-rendering and not client side data fetching.
  (video 21)
- When a page with getStaticProps is pre-rendered at build time, in addition to the page HTML file, Nextjs generates json file holding the result of running getstaticprops. The JSON file will be used in client side routing through next/link or next/router.

- getStaticPaths fallback:
  For example you have list of 10 items and you navigate to 11th or someother item by dynamic SSG then, fallback false throws 404 page.
  i.e If fallback is set to false, then any paths not returned by getstaticpaths will result in 404 page.

If fallback is true
if router.isFallback is not used you will get an error
i.e If fallback is set to true, the paths that have not been generated at build time will not result 404 page. Instead next js will serve fallback version of page on first request to such a path.
If you want 404 page for data that is not in the list use notFound logic.

If fallback is blocking
i.e If fallback is set to blocking, the paths that have not been generated at build time will not result 404 page. Instead on first request, next js will render page on server and return generated html.
When thats done, the browser receives the HTML for generated path. From users perspective it eill transition frommbrowser is requesting the page to full page is loaded. There is no flash of loading/fallback state.
Takes much time for loading page.

#### Incremental Static Regeneration

- revalidate static pages at particular time interval i.e after revalidate time

### Server Side Rendering

- getServerSideProps
  Runs only on server side.
  The function will never run client side.
  The code written getServerSideProps wont include in JS bundle that is sent to browser.
  You can write server side code directly in getServerSideProps like accesing fs module or querying database etc inside it.

  - getServerSideProps is allowed only in page folder and not in regular component. It is used only for pre-rendering and not client side data fetching. It will run at request time
