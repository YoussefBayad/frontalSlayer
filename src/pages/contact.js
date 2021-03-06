import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "components/second-banner";
import ContactForm from "components/contactForm";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Contact" />
        <Banner title="Get in touch  " accent="with us" />
        <ContactForm />
      </Layout>
    </ThemeProvider>
  );
}
