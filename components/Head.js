import Head from 'next/head'

export default function HeadObject({children}) {
  const title = "Sarthak Mohanty";
  const description = "student. developer. designer.";
  const keywords = "sarthak, mohanty, sarthak mohanty, san antonio, texas, san, antonio, design, designer, developer, programmer, html, css, js, node, express, react, next, gatsby, vercel";
  const author = "Sarthak Mohanty";
  const twitter = "@sarthaktexas";
  const image = "/og-image.png";
    return (
      <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <meta property="og:url" content="https://sarthakmohanty.me" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={twitter} />
          <meta name="twitter:creator" content={twitter} />
          <script async data-website-id="e39b497a-ff19-4ad0-bad6-4ef80cab9cde" src="https://analytics.sarthakmohanty.me/umami.js"></script>
          {children}
        </Head>
    )
}