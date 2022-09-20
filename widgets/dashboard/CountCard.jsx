import React from "react";
import CountUp from "react-countup";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsNoData from "highcharts/modules/no-data-to-display";

if (typeof Highcharts === "object") {
  HighchartsNoData(Highcharts);
}

const options = ({ data, lineColor, fromColor, toColor }) => ({
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
    enabled: false,
    // pointFormat: "<b>{point.y:,.0f}</b> visitors",
  },
  legend: {
    enabled: false,
  },
  lang: {
    noData: "No data to Show",
  },
  noData: {
    style: {
      fontSize: "12px",
      color: "#303030",
    },
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
      lineColor: lineColor,
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
          [0, fromColor],
          [1, toColor],
        ],
      },
    },
  },
  series: [
    {
      name: "",
      data,
    },
  ],
  credits: {
    enabled: false,
  },
});

const CountCard = ({
  label = "Number of Visitors",
  count = 0,
  lineColor = "coral",
  fromColor = "red",
  toColor = "pink",
  countSuffix = "",
  decimals,
  chartData = [],
}) => {
  return (
    <div className="w-full">
      <style jsx>
        {`
          .card-chart::before {
            content: " ";
            width: 100%;
            height: calc(100% + 12px);
            position: absolute;
            z-index: 3;
            top: -6px;
            left: 0;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0) 86%,
              rgba(255, 255, 255, 0.75) 100%
            );
          }
        `}
      </style>
      <div className="flex flex-col px-6 py-10 overflow-hidden duration-300 bg-white border border-gray-100 shadow rounded-xl hover:shadow-lg group">
        <div
          className="relative w-full h-20 -mx-6 card-chart"
          style={{
            width: "calc(100% + 48px)",
          }}
        >
          <HighchartsReact
            allowChartUpdate
            highcharts={Highcharts}
            options={options({
              data: chartData,
              lineColor,
              fromColor,
              toColor,
            })}
          />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-gray-700 transition-all duration-300 delay-100 sm:text-4xl xl:text-5xl group-hover:text-gray-800">
          <CountUp
            end={count}
            suffix={countSuffix}
            preserveValue
            decimals={decimals}
          />
        </h1>
        <div className="flex flex-row justify-between duration-300 group-hover:text-gray-800">
          <p>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default CountCard;
