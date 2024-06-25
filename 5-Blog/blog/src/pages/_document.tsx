import { Html, Head, Main, NextScript } from "next/document";
import StyledComponentsRegistry from "./registry";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <StyledComponentsRegistry>
        <body>
          <Main />
          <NextScript />
        </body>
      </StyledComponentsRegistry>
    </Html>
  );
}
