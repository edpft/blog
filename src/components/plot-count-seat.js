import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlotCount } from "./plot-count";
import SeatsEng from "../data/plot-seats-england";
import SeatsNI from "../data/plot-seats-northern-ireland";
import SeatsSco from "../data/plot-seats-scotland";
import SeatsWal from "../data/plot-seats-wales";

export default function plotSeats() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>England</h3>
          <PlotCount {...SeatsEng} />
        </Col>
        <Col>
          <h3>Northern Ireland</h3>
          <PlotCount {...SeatsNI} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Scotland</h3>
          <PlotCount {...SeatsSco} />
        </Col>
        <Col>
          <h3>Wales</h3>
          <PlotCount {...SeatsWal} />
        </Col>
      </Row>
    </Container>
  );
}
