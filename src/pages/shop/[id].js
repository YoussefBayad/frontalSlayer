import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Shop from "sections/shop";
import Cart from "components/features/cart";
import { useRouter } from "next/router";

export default function page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ThemeProvider theme={theme}>
      <Cart />
      <SEO title="Shop" />
      <Shop query={id} />
    </ThemeProvider>
  );
}
