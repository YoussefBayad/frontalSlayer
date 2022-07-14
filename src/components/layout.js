/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Subscribe from "sections/subscribe";
import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
    </React.Fragment>
  );
}
