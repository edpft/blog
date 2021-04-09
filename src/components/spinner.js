import React from "react";
import { Spinner } from "react-bootstrap";

export default function StyledSpinner() {
  return (
    <Spinner animation="border" variant="light" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
