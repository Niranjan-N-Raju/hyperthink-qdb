import React from "react";
import { Select } from "antd";

import { WechatOutlined } from "@ant-design/icons";

const PageHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "24px",
      }}
    >
      <div style={{display:'flex', alignItems:'center'}}>
        <div
          style={{
            padding: "16px",
            fontSize: "16px",
            backgroundColor: "#397BF6",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          <WechatOutlined />
        </div>
        <div style={{padding: '8px', textAlign: 'left'}}>
          <h3>All Blog Posts</h3>
          <p>Qatar Development Bank</p>
        </div>
      </div>
      <Select
        defaultValue="Sort/Filter By"
        style={{
          width: 200,
        }}
        options={[
          {
            label: "Sort/Filter By",
          },
          {
            label: "Date",
          },
          {
            label: "Views",
          },
        ]}
      />
    </div>
  );
};

export default PageHeader;
