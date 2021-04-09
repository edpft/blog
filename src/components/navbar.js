import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{data.site.siteMetadata.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}
