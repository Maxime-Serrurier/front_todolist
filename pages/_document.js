import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      className='bg-gradient-to-br from-violet-900 to-blue-700'
      lang='fr'
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
