import React from "react";
import { Nav } from "react-bootstrap";

const links = [{ href: "/dashboard-ukge", text: "UK GE Dashboard" }];

export default function NavBarLinks() {
  return (
    <Nav className="mr-auto">
      {links.map((link, idx) => (
        <Nav.Link eventKey={idx} href={link.href}>
          {link.text}
        </Nav.Link>
      ))}
    </Nav>
  );
}
