import React from "react";
import Loadable from "react-loadable";
import Spinner from "./spinner";

const Plotly = Loadable({
  loader: () => import("react-plotly.js"),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <Spinner variant="light" />
    ),
  timeout: 10000,
});

export const PlotShare = ({ layout, style, config, ...rest }) => {
  return (
    <Plotly
      layout={{
        margin: { l: 50, b: 50, r: 50, t: 60 },
        paper_bgcolor: `rgba(0, 0, 0, 0)`,
        plot_bgcolor: `rgba(0, 0, 0, 0)`,
        font: {
          color: `black`,
          size: 16,
        },
        // yaxis: {
        //   range: [0, 1],
        //   tickformat: "%",
        // },
        autosize: true,
        ...layout,
      }}
      style={{ width: `100%`, ...style }}
      useResizeHandler
      config={{
        displayModeBoard: false,
        showTops: false,
        ...config,
      }}
      {...rest}
    />
  );
};
