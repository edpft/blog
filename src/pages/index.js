import React, { useState } from "react";
import {
  ButtonGroup,
  Col,
  Container,
  Row,
  ToggleButton,
} from "react-bootstrap";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PlotSeatShare from "../components/plot-share-seat";
import PlotVoteShare from "../components/plot-share-vote";
import PlotSeats from "../components/plot-count-seat";
import PlotVotes from "../components/plot-count-vote";

export default function PlotCountry() {
  const [measureValue, setMeasureValue] = useState("ss");

  const measures = [
    { name: "Seat Share", value: "ss" },
    { name: "Seats", value: "s" },
    { name: "Vote Share", value: "vs" },
    { name: "Votes", value: "v" },
  ];

  return (
    <Layout>
      <Container>
        <Row>
          <PageTitle text="UK General Election Results by Country, 1955-2019"></PageTitle>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <ButtonGroup toggle>
              {measures.map((measure, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="light"
                  name
                  const="measure"
                  value={measure.value}
                  checked={measureValue === measure.value}
                  onChange={(e) => setMeasureValue(e.currentTarget.value)}
                >
                  {measure.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        <br />
      </Container>
      {
        {
          ss: <PlotSeatShare />,
          s: <PlotSeats />,
          vs: <PlotVoteShare />,
          v: <PlotVotes />,
        }[measureValue]
      }
    </Layout>
  );
}
