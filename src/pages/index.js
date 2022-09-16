import React, { useEffect, useState } from "react";
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
        alt: "RAW",
      },
      {
        src: Wig1,
        alt: "VIRGIN",
      },
      {
        src: Wig3,
        alt: "613",
      },
    ],
    title: "HD LACE",
    src: hdLace,
    path: "/shop/hd-lace",
  },
  rowTwo: {
    products: [
      {
        src: Wig5,
        alt: "RAW",
      },
      {
        src: Wig4,
        alt: "VIRGIN",
      },
      {
        src: Wig6,
        alt: "613",
      },
    ],
    title: "TRANSPARENT LACE",
    src: transparentLace,
    path: "/shop/transparent-lace",
  },
  rowThree: {
    products: [
      {
        src: Wig7,
        alt: "TRANSPARENT",
      },
      {
        src: Wig8,
        alt: "HD",
      },
      {
        src: Wig9,
        alt: "WATERCOLOR",
      },
    ],
    title: "CUSTOM WIG",
    src: customWig,
    path: "/shop/custom",
  },
};
export default function IndexPage() {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
      document.body.style.height = `${window.innerHeight}px`;
      setHeight(`${window.innerHeight}px`);
    };
    console.log("innerHeight", height);
    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout homeToggle noLogo>
        <SEO title="Products" />
        <Products data={data} />
      </Layout>
    </ThemeProvider>
  );
}
