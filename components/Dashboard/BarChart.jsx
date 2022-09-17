import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const options = (data) => ({
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
      data: data.map((x) => x.head),
    },
    {
      name: "Form Submitted",
      data: data.map((x) => x.submitted),
    },
  ],
});

const BarChart = ({ data = [] }) => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options(data)} />
    </>
  );
};

export default BarChart;
