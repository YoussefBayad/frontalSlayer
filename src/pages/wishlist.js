import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";

import Wishlist from "sections/wishlist";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Your Wishlist" />
      <Wishlist />
    </ThemeProvider>
  );
}
