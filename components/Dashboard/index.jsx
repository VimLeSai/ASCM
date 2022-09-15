import React from "react";
import CountCard from "widgets/dashboard/CountCard";
import Analysis from "./Analysis";
import useSWR from "swr";
import { fetcher } from "../../api";

const Dashboard = () => {
  const { data = {}, error } = useSWR("/dashboard/counts", fetcher, {
    refreshInterval: 1e3 * 60,
  });

  return (
    <div
      className="flex flex-col w-full p-6 hover:shadow-md"
      style={{
        maxWidth: "calc(100vw - 256px)",
      }}
    >
      <Analysis />
      <div className="flex items-center w-full m-auto mt-5 ">
        <CountCard label="Number of Visitors" count={data.total} />
        <CountCard
          color="#f0f8fffc"
          label="Number of Giveaway Entrants"
          count={data.submitted}
        />
        <CountCard
          color="#f07a7a38"
          label="% of visitors who submitted a survey"
          count={data.submittedPercentage}
          countSuffix={"%"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
