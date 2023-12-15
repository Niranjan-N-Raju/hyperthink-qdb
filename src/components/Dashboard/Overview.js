import React from "react";
import { Timeline } from "antd";
const Overview = () => (
  <div style={{ textAlign: "left" }}>
    <Timeline
      items={[
        {
          children: "Dashboard - 1",
        },
        {
          children: "Dashboard - 2",
        },
        {
          children: "Dashboard - 3",
        },
        {
          children: "Dashboard - 4",
        },
      ]}
    />
  </div>
);
export default Overview;
