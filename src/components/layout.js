/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Subscribe from "sections/subscribe";
import Footer from "./footer";
import Header from "./header/header";
export default function Layout({ children, spaceLeft }) {
  return (
    <React.Fragment>
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        <Header spaceLeft={spaceLeft} />
        {children}
      </main>
    </React.Fragment>
  );
}
