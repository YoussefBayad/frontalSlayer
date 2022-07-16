/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Subscribe from "sections/subscribe";
import Footer from "./footer";
import LeftNav from "./navs";
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        <LeftNav sx={styles.left} />
        {children}
      </main>
    </React.Fragment>
  );
}

const styles = {
  left: {
    position: "fixed",
    top: "150px",
    left: "200px",
    zIndex: "1000",
  },
};
