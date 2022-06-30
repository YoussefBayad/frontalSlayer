import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/second-banner";
import WhyUs from "sections/why-us";
import Clients from "sections/clients";
import IntroVideo from "sections/intro-video";
import Testimonials from "sections/testimonials";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Why us" />
        <Banner title="WHAT SETS US " accent="APART" />
        <WhyUs />
        <IntroVideo />
        <Clients />
        <Testimonials />
      </Layout>
    </ThemeProvider>
  );
}
