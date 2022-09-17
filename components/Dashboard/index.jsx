import React from "react";
import CountCard from "widgets/dashboard/CountCard";
import Analysis from "./Analysis";
import useSWR from "swr";
import { fetcher } from "../../api";

const Dashboard = () => {
  const { data = {}, error } = useSWR("/dashboard/counts", fetcher, {
    refreshInterval: 1e3 * 1,
  });
  const { data: chart = [] } = useSWR("/dashboard/chart", fetcher, {
    refreshInterval: 1e3 * 1,
  });

  return (
    <main
      className="flex flex-col w-full p-6 bg-white hover:shadow-md"
      style={{
        maxWidth: "calc(100vw - 256px)",
      }}
    >
      <Analysis data={chart} />
      <div className="grid items-center w-full grid-cols-1 gap-3 m-auto mt-5 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        <CountCard
          label="Number of Visitors"
          count={data.total}
          chartData={data.headCounts}
          lineColor="coral"
          fromColor="red"
          toColor="pink"
        />
        <CountCard
          label="Number of Giveaway Entrants"
          count={data.submitted}
          chartData={data.surveyCounts}
          lineColor="cornflowerblue"
          fromColor="blue"
          toColor="skyblue"
        />
        <CountCard
          label="% of visitors who submitted a survey"
          count={data.submittedPercentage}
          countSuffix={"%"}
          decimals={2}
          chartData={data.surveyCounts?.map(
            (x, index) => (x || 1) / (data.headCounts[index] || 1)
          )}
          lineColor="gold"
          fromColor="yellow"
          toColor="lightgoldenrodyellow"
        />
      </div>
    </main>
  );
};

export default Dashboard;
