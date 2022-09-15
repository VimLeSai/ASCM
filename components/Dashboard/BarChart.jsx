import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Major trophies for some English teams",
    align: "center",
  },
  yAxis: {
    min: 0,
    title: {
      text: "Count trophies",
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: "bold",
        textOutline: "none",
      },
    },
  },
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  plotOptions: {
    column: {
      stacking: "normal",
      className: "column-chart",
      maxPointWidth: 10,
      dataLabels: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: "BPL",
      data: [3, 5, 1, 13, 2, 5, 12, 13, 2, 12, 4, 21, 5, 2, 5, 3, 1, 6],
    },
    {
      name: "FA Cup",
      data: [14, 8, 8, 12, 3, 5, 3, 12, 4, 12, 4, 12, 42, 12, 4, 2, 2, 2],
    },
    {
      name: "CL",
      data: [0, 2, 6, 3, 23, 2, 23, 34, 12, 4, 3, 23, 4, 5, 3, 2, 5, 3, 9],
    },
  ],
};

const BarChart = () => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default BarChart;
