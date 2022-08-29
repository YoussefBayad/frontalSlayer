import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";

import Cart from "sections/cart";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Your Cart" />
      <Cart />
    </ThemeProvider>
  );
}
