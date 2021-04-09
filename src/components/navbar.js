import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import NavBarLinks from "./navbar-links";

export default function NavBar() {
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
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">{data.site.siteMetadata.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavBarLinks />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
