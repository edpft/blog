import React from "react";
import { Container } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from "./navbar";
import Footer from "../components/footer";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            footer
          }
        }
      }
    `
  );
  return (
    <Container>
      <NavBar />
      <br />
      <Container>{children}</Container>
      <br />
      <Footer footerText={data.site.siteMetadata.footer}></Footer>
    </Container>
  );
}
