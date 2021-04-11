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
import Plot from "../components/plot";

export default function PlotCountry() {
  const [geographyValue, setGeographyValue] = useState("Country");

  const geographies = [
    { name: "Country", value: "Country" },
    { name: "Region", value: "Region" },
    // { name: "County", value: "County" },
    // { name: "Constituency", value: "Constituency" },
  ];

  const [measureValue, setMeasureValue] = useState("Seat_Share");

  const measures = [
    { name: "Seat Share", value: "Seat_Share" },
    { name: "Seats", value: "Seats" },
    { name: "Vote Share", value: "Vote_Share" },
    { name: "Votes", value: "Votes" },
  ];

  return (
    <Layout>
      <Container>
        <Row>
          <PageTitle text="UK General Election Results, 1955-2019"></PageTitle>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <ButtonGroup toggle>
              {geographies.map((geography, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="light"
                  name
                  const="geography"
                  value={geography.value}
                  checked={geographyValue === geography.value}
                  onChange={(e) => setGeographyValue(e.currentTarget.value)}
                >
                  {geography.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
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
      <Plot measure={measureValue} geographyType={geographyValue} />
    </Layout>
  );
}
