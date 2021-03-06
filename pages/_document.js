import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700&family=Patua+One&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.png" /> 
        </Head>
        <body className='font-base'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument