import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import "components/modal/modal.css";
import "typeface-dm-sans";
import "assets/css/react-slick.css";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);

    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };
    console.log("innerHeight", `${window.innerHeight}px`);

    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return <Component {...pageProps} />;
}
