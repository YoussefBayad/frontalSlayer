import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Features from "sections/features";
import Clients from "sections/clients";
import Sub from "sections/subs";
import Stats from "sections/stats";
import Testimonials from "sections/testimonials";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Impeerforyou" />
        {/* <Banner /> */}
        {/* <Stats /> */}
        <Features />
        <Sub />
        <Clients />
        <Testimonials />
      </Layout>
    </ThemeProvider>
  );
}
