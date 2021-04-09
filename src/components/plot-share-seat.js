import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlotShare } from "./plot-share";
import SeatShareEng from "../data/plot-seat-share-england";
import SeatShareNI from "../data/plot-seat-share-northern-ireland";
import SeatShareSco from "../data/plot-seat-share-scotland";
import SeatShareWal from "../data/plot-seat-share-wales";

export default function plotSeatShare() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>England</h3>
          <PlotShare {...SeatShareEng} />
        </Col>
        <Col>
          <h3>Northern Ireland</h3>
          <PlotShare {...SeatShareNI} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Scotland</h3>
          <PlotShare {...SeatShareSco} />
        </Col>
        <Col>
          <h3>Wales</h3>
          <PlotShare {...SeatShareWal} />
        </Col>
      </Row>
    </Container>
  );
}
