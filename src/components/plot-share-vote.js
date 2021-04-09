import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PlotShare } from "./plot-share";
import VoteShareEng from "../data/plot-vote-share-england";
import VoteShareNI from "../data/plot-vote-share-northern-ireland";
import VoteShareSco from "../data/plot-vote-share-scotland";
import VoteShareWal from "../data/plot-vote-share-wales";

export default function plotVoteShare() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>England</h3>
          <PlotShare {...VoteShareEng} />
        </Col>
        <Col>
          <h3>Northern Ireland</h3>
          <PlotShare {...VoteShareNI} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Scotland</h3>
          <PlotShare {...VoteShareSco} />
        </Col>
        <Col>
          <h3>Wales</h3>
          <PlotShare {...VoteShareWal} />
        </Col>
      </Row>
    </Container>
  );
}
