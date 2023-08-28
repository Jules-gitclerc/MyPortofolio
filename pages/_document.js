import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
          <link rel="shortcut icon" href="/icons8-portefeuille-16.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/icons8-portefeuille-96.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons8-portefeuille-32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons8-portefeuille-16.png" />
          <title>Jules Clerc Portfolio</title>
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
