import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Products from "sections/products";

import Wig from "assets/images/wig.png";
import Transparent from "assets/images/transparent.png";
import Customized from "assets/images/customized.png";
// import ex from "assets/images/rowOne.jpg";

const data = {
  rowOne: {
    products: [
      {
        src: Wig,
        alt: "wig",
      },
      {
        src: Wig,
        alt: "wig",
      },
      {
        src: Wig,
        alt: "wig",
      },
      {
        src: Wig,
        alt: "wig",
      },
      {
        src: Wig,
        alt: "wig",
      },
      {
        src: Wig,
        alt: "wig",
      },
    ],
    title: "HD LACE",
    path: "/products/hd-lace",
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
      <Layout spaceLeft noLogo>
        <SEO title="Products" />
        <Products data={data} />
      </Layout>
    </ThemeProvider>
  );
}
