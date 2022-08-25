import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Products from "sections/products";

import Wig from "assets/images/wig.png";
import Transparent from "assets/images/transparent.png";
import Customized from "assets/images/customized.png";

const data = {
  rowOne: {
    products: [
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
    ],
    title: "TRANSPARENT LACE",
    path: "/products/transparent-lace",
  },
  rowTwo: {
    products: [
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
    ],
    title: "TRANSPARENT LACE",
    path: "/products/transparent-lace",
  },
  rowThree: {
    products: [
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
      {
        src: Transparent,
        alt: "Transparent",
      },
    ],
    title: "TRANSPARENT LACE",
    path: "/products/transparent-lace",
  },
};

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Products" />
        <Products data={data} />
      </Layout>
    </ThemeProvider>
  );
}
