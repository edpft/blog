import React from "react";
import * as d3 from "d3-array";
import Data from "../data/array.json";
import { PlotShare } from "./plot-share";

export default function Plot(props) {
  const axisLookup = {
    "Northern Ireland": "",
    Scotland: 2,
    Wales: 3,
    England: 4,
    "North East": 4,
    "North West": 5,
    "Yorks / Humber": 6,
    "West Midlands": 7,
    "East Midlands": 8,
    Anglia: 9,
    "South West": 10,
    London: 11,
    "South East": 12,
  };

  const rowsLookup = {
    Country: 2,
    Region: 6,
  };

  function filterData(data, geographyType, measure) {
    const filtered = data.filter(
      (row) =>
        (row.Geography_Type === geographyType) & (row.Measure === measure)
    );

    return filtered;
  }

  function unpack(rows, key) {
    return rows.map((row) => row[key]);
  }

  function makeTrace(data, xValue, yValue, groups, index) {
    const dates = unpack(data, xValue);
    const values = unpack(data, yValue);
    const parties = unpack(data, groups);

    const trace = {
      type: "scatter",
      x: dates,
      y: values,
      transforms: [
        {
          type: "groupby",
          groups: parties,
          styles: [
            { target: "CON", value: { marker: { color: "#0087dc" } } },
            { target: "LAB", value: { marker: { color: "#d50000" } } },
            { target: "LIB", value: { marker: { color: "#FDBB30" } } },
            { target: "NAT", value: { marker: { color: "#3F8428" } } },
            { target: "OTH", value: { marker: { color: "#808080" } } },
          ],
        },
      ],
      xaxis: "x".concat(axisLookup[index]),
      yaxis: "y".concat(axisLookup[index]),
      legendgroup: "one",
      showlegend: index === "Northern Ireland" ? true : false,
    };

    return trace;
  }

  function makeTraces(data, geographyType, measure) {
    const filtered = filterData(data, geographyType, measure);

    const grouped = d3.group(filtered, (d) => d.Geography_Name);

    const traces = Array.from(grouped, ([key, values]) =>
      makeTrace(values, "Date", "Value", "Party", key)
    );

    return traces;
  }

  const data = makeTraces(Data, props.geographyType, props.measure);

  function makeTitles(lookup, geographyType) {
    var titles = [];

    for (const [key, value] of Object.entries(lookup)) {
      titles.push({
        text: key,
        font: {
          size: 20,
        },
        showarrow: false,
        x: 0,
        xref: `x${value} domain`,
        y: 1.25,
        yref: `y${value} domain`,
      });
    }

    titles = geographyType === "Country" ? titles.slice(0, 4) : titles;

    return titles;
  }

  const titles = makeTitles(axisLookup, props.geographyType);

  const layout = {
    grid: {
      rows: rowsLookup[props.geographyType],
      columns: 2,
      pattern: "independent",
    },
    annotations: titles,
  };

  return <PlotShare data={data} layout={layout} />;
}
