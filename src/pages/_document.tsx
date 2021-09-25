/* eslint-disable @next/next/google-font-preconnect */
/* eslint-disable @next/next/google-font-display */
import Document, { Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="preconnet" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
