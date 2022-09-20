import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsNoData from "highcharts/modules/no-data-to-display";
import React from "react";

if (typeof Highcharts === "object") {
  HighchartsNoData(Highcharts);
}

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
  lang: {
    noData: "No data to Show",
  },
  noData: {
    style: {
      fontWeight: "bold",
      fontSize: "15px",
      color: "#303030",
    },
  },
  series: [
    {
      type: "area",
      name: "Visitors",
      data: data?.map((x) => [x.date, x.head]),
    },
  ],
  credits: {
    enabled: false,
  },
});

const LineChart = ({ data = [] }) => {
  return <HighchartsReact highcharts={Highcharts} options={options(data)} />;
};

export default LineChart;
