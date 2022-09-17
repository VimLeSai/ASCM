import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const options = (data = []) => ({
  chart: {
    zoomType: "x",
    // type: "spline",
  },
  title: {
    text: "",
  },
  xAxis: {
    type: "datetime",
    // type: "spline",
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    title: {
      text: null,
    },
  },
  series: [
    {
      type: "area",
      name: "Visitors",
      data: data?.map((x) => [x.date, x.head]),
    },
  ],
});

const LineChart = ({ data = [] }) => {
  return <HighchartsReact highcharts={Highcharts} options={options(data)} />;
};

export default LineChart;
