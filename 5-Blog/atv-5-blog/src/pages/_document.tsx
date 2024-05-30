import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className={`flex flex-col justify-between h-vh w-vw`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
