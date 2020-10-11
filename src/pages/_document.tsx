import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class MyDocument extends Document {  
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <title>Joinville Implementos</title>
          <meta name="description" content="A melhor maneira de ampliar sua frota"/>

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml"/>
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}