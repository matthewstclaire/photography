import Document, { Html, Head, Main, NextScript } from 'next/document';
import emailjs from '@emailjs/browser';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          >
            (function(){emailjs.init('cqnaG6ergeuhUBgPF')})();
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
