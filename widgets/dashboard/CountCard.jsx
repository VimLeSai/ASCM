import React from "react";
import CountUp from "react-countup";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "areaspline",
    height: 100,
  },
  title: {
    text: "",
  },
  xAxis: {
    enabled: false,
    title: null,
    labels: {
      enabled: false,
    },
    gridLineWidth: 0,
    alignTicks: false,
    lineWidth: 0,
    tickLength: 0,
  },
  yAxis: {
    enabled: false,
    title: null,
    labels: {
      enabled: false,
    },
    gridLineWidth: 0,
  },
  tooltip: {
    pointFormat:
      "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 1,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
      lineColor: "coral",
      linecap: "round",
      lineWidth: 1,
      crisp: false,
      fillColor: {
        linearGradient: {
          x1: 2,
          y1: 4,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, "red"],
          [1, "pink"],
        ],
      },
    },
  },
  series: [
    {
      name: "USA",
      data: [
        3, 5, 1, 13, 2, 5, 12, 13, 2, 12, 4, 21, 5, 2, 5, 3, 1, 6, 3, 5, 1, 13,
        2, 5, 12, 13, 2, 12, 4, 21, 5, 2, 5, 3, 1, 6,
      ],
    },
  ],
  credits: {
    enabled: false,
  },
};

const CountCard = ({
  label = "Number of Visitors",
  count = 0,
  color = "#ffd70038",
  countSuffix = "",
}) => {
  return (
    <div className="w-full p-2 lg:w-1/3 md:w-1/2">
      <div className="flex flex-col px-6 py-10 overflow-hidden duration-300 bg-white border border-gray-100 shadow rounded-xl hover:shadow-lg group">
        <div className="w-full h-20">
          <HighchartsReact
            allowChartUpdate
            highcharts={Highcharts}
            options={options}
          />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-700 transition-all duration-300 delay-100 sm:text-4xl xl:text-5xl group-hover:text-gray-800">
          <CountUp end={count} suffix={countSuffix} />
        </h1>
        <div className="flex flex-row justify-between duration-300 group-hover:text-gray-800">
          <p>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
