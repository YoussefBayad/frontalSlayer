/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Subscribe from "sections/subscribe";
import Footer from "./footer";
import Header from "./navigationMenu/header";
import Logo from "./logo";
export default function Layout({ children, spaceLeft, homeToggle, noLogo }) {
  return (
    <React.Fragment>
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        <Logo home={homeToggle} noLogo={noLogo} />
        <Header spaceLeft={spaceLeft} homeToggle={homeToggle} />
        {children}
      </main>
    </React.Fragment>
  );
}
