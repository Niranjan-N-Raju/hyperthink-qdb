import styled from "styled-components";
import { CaretDownOutlined, BarChartOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Button } from "antd";
import { useEffect, useState } from "react";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const UserDetailsElement = styled.div`
  text-align: center;
`;

const CustomImage = styled.div`
  background-image: url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png);
`;

const UserDetails = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}users/${process.env.REACT_APP_USER_ID}`
    )
      .then((data) => data.json())
      .then((result) => setUser(result));
  }, []);

  return (
    <UserDetailsElement>
      <div style={{ padding: "8px" }}>
        <CustomImage />
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          style={{ width: "120px", height: "120px", borderRadius: "100%" }}
          alt={user.name}
        />
        <div style={{ margin: "4px 0" }}>Hello</div>
        <div style={{ margin: "4px 0" }}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            style={{ color: "#fff", margin: "4px 0" }}
          >
            <Space>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>
                {user.name}
              </span>
              <CaretDownOutlined />
            </Space>
          </Dropdown>
        </div>
      </div>
      <div style={{ padding: "8px" }}>
        <Button type="primary" style={{ color: "#fff" }}>
          <BarChartOutlined /> Live Metrics
        </Button>
      </div>
    </UserDetailsElement>
  );
};

export default UserDetails;
