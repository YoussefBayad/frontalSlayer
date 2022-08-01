import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Products from "sections/products";

import Wig1 from "assets/images/wigs/1.png";
import Wig2 from "assets/images/wigs/2.png";
import Wig3 from "assets/images/wigs/3.png";
import Wig4 from "assets/images/wigs/4.png";
import Wig5 from "assets/images/wigs/5.png";
import Wig6 from "assets/images/wigs/6.png";
import Wig7 from "assets/images/wigs/7.png";
import Wig8 from "assets/images/wigs/8.png";
import Wig9 from "assets/images/wigs/9.png";
import customWig from "assets/images/gif/custom-wig.gif";
import hdLace from "assets/images/gif/hd-lace.gif";
import transparentLace from "assets/images/gif/transparent-lace.gif";

const data = {
  rowOne: {
    products: [
      {
        src: Wig2,
        alt: "wig",
      },
      {
        src: Wig1,
        alt: "wig",
      },
      {
        src: Wig3,
        alt: "wig",
      },
    ],
    title: hdLace,
    path: "/products/hd-lace",
  },
  rowTwo: {
    products: [
      {
        src: Wig5,
        alt: "Transparent",
      },
      {
        src: Wig4,
        alt: "Transparent",
      },
      {
        src: Wig6,
        alt: "Transparent",
      },
    ],
    title: transparentLace,
    path: "/products/transparent-lace",
  },
  rowThree: {
    products: [
      {
        src: Wig7,
        alt: "Customized",
      },
      {
        src: Wig8,
        alt: "Customized",
      },
      {
        src: Wig9,
        alt: "Customized",
      },
    ],
    title: customWig,
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
