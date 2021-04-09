import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlotCount } from "./plot-count";
import VotesEng from "../data/plot-votes-england";
import VotesNI from "../data/plot-votes-northern-ireland";
import VotesSco from "../data/plot-votes-scotland";
import VotesWal from "../data/plot-votes-wales";

export default function plotVotes() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>England</h3>
          <PlotCount {...VotesEng} />
        </Col>
        <Col>
          <h3>Northern Ireland</h3>
          <PlotCount {...VotesNI} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Scotland</h3>
          <PlotCount {...VotesSco} />
        </Col>
        <Col>
          <h3>Wales</h3>
          <PlotCount {...VotesWal} />
        </Col>
      </Row>
    </Container>
  );
}
