import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const options = {
  chart: {
    type: "column",
  },
  title: {
    enabled: null,
    text: "",
    align: "center",
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
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
    headerFormat: "<b>Analysis</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  legend: {
    enabled: false,
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
      name: "Visitors",
      data: [3, 5, 1, 13, 2, 5, 12, 13, 2, 12, 4, 21, 5, 2, 5, 3, 1, 6],
    },
    {
      name: "Form Submitted",
      data: [14, 8, 8, 12, 3, 5, 3, 12, 4, 12, 4, 12, 42, 12, 4, 2, 2, 2],
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
