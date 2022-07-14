import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Features from "sections/features";
import Clients from "sections/clients";
import Sub from "sections/subs";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Frontal Slayer" />
        <Banner />
      </Layout>
    </ThemeProvider>
  );
}
