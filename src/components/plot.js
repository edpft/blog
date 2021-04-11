import React from "react";
import * as d3 from "d3-array";
import Data from "../data/array.json";
import { PlotShare } from "./plot-share";

export default function Plot(props) {
  const axisLookup = {
    Country: {
      "Northern Ireland": "",
      Scotland: 2,
      Wales: 3,
      England: 4,
    },
    Region: {
      "Northern Ireland": "",
      Scotland: 2,
      Wales: 3,
      "North East": 4,
      "North West": 5,
      "Yorks / Humber": 6,
      "West Midlands": 7,
      "East Midlands": 8,
      Anglia: 9,
      "South West": 10,
      London: 11,
      "South East": 12,
    },
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

  function makeTrace(
    data,
    xValue,
    yValue,
    groups,
    lookup,
    geographyType,
    index
  ) {
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
      xaxis: "x".concat(lookup[geographyType][index]),
      yaxis: "y".concat(lookup[geographyType][index]),
      legendgroup: "one",
      showlegend: index === "Northern Ireland" ? true : false,
    };

    return trace;
  }

  function makeData(data, geographyType, lookup, measure) {
    const filtered = filterData(data, geographyType, measure);

    const grouped = d3.group(filtered, (d) => d.Geography_Name);

    const traces = Array.from(grouped, ([key, values]) =>
      makeTrace(values, "Date", "Value", "Party", lookup, geographyType, key)
    );

    return traces;
  }

  const data = makeData(Data, props.geographyType, axisLookup, props.measure);

  function makeTitles(lookup, geographyType) {
    var titles = [];

    for (const [key, value] of Object.entries(lookup[geographyType])) {
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

  function makeAxes(param, number, value) {
    var axesKeys = [];

    var layoutAxes = [];

    const numbers = [...Array(number).keys()];

    numbers.forEach((number) =>
      number === 0
        ? axesKeys.push(param)
        : axesKeys.push(param.concat(number + 1))
    );

    axesKeys.forEach((axesKey) => {
      layoutAxes[axesKey] = value;
    });

    return layoutAxes;
  }

  const yaxesValue = {
    range: [0, 1],
    tickformat: "%",
  };

  const yaxesCountry = makeAxes("yaxis", 4, yaxesValue);

  const yaxesRegion = makeAxes("yaxis", 12, yaxesValue);

  const xaxesValue = {
    showspikes: true,
    spikecolor: "#999999",
    spikemode: "across",
  };

  const xaxesCountry = makeAxes("xaxis", 4, xaxesValue);

  const xaxesRegion = makeAxes("xaxis", 12, xaxesValue);

  function makeLayout(geographyType, measure) {
    if ((geographyType === "Country") & measure.includes("Share")) {
      return {
        ...yaxesCountry,
        ...xaxesCountry,
      };
    } else if ((geographyType === "Country") & measure.endsWith("s")) {
      return {
        ...xaxesCountry,
      };
    } else if ((geographyType === "Region") & measure.includes("Share")) {
      return {
        ...yaxesRegion,
        ...xaxesRegion,
      };
    } else if ((geographyType === "Region") & measure.endsWith("s")) {
      return {
        ...xaxesRegion,
      };
    }
  }

  const layoutAdditional = makeLayout(props.geographyType, props.measure);

  const layout = {
    grid: {
      rows: rowsLookup[props.geographyType],
      columns: 2,
      pattern: "independent",
    },
    annotations: titles,
    autosize: true,
    height: props.geographyType === "Country" ? 600 : 1800,
    ...layoutAdditional,
  };

  return <PlotShare data={data} layout={layout} />;
}
