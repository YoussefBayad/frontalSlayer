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
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
    ],
    title: "CUSTOM WIG",
    path: "/products/custom",
  },
  rowTwo: {
    products: [
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
    ],
    title: "CUSTOM WIG",
    path: "/products/custom",
  },
  rowThree: {
    products: [
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
      {
        src: Customized,
        alt: "Customized",
      },
    ],
    title: "CUSTOM WIG",
    path: "/products/custom",
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
