import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Shop from "sections/shop";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Shop" />
      <Shop />
    </ThemeProvider>
  );
}
