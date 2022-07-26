import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDodument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600&family=Josefin+Sans:wght@200;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDodument;
