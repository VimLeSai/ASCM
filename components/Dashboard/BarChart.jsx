import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsNoData from "highcharts/modules/no-data-to-display";
import React from "react";

if (typeof Highcharts === "object") {
  HighchartsNoData(Highcharts);
}

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
    headerFormat: "<b>{series.name}</b><br/>",
    pointFormat: " {point.y}<br/>",
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
      name: "Visitors",
      data: data.map((x) => x.head),
    },
    {
      name: "Form Submitted",
      data: data.map((x) => x.submitted),
    },
  ],
  credits: {
    enabled: false,
  },
});

const BarChart = ({ data = [] }) => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options(data)} />
    </>
  );
};

export default BarChart;
