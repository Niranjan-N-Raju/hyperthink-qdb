import styled from "styled-components";
import {
  SearchOutlined,
  PlusOutlined,
  BellOutlined,
  MailOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import { Input, Layout } from "antd";
const { Header: HeaderComponent } = Layout;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderMenuItem = styled.div`
  padding: 0 8px;
`;
const items = [
  {
    label: 'Your Profile',
    key: "0",
  },
  {
    label: 'Settings',
    key: "1",
  },
  {
    label: "Log Out",
    key: "3",
  },
];

const Header = () => {
  return (
    <HeaderComponent
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <HeaderWrapper>
        <Row>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Type here to search"
              prefix={<SearchOutlined />}
            />
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
          }}
        >
          <HeaderMenuItem>
            <PlusOutlined /> Add
          </HeaderMenuItem>
          <HeaderMenuItem>
            <BellOutlined />
          </HeaderMenuItem>
          <HeaderMenuItem>
            <MailOutlined />
          </HeaderMenuItem>
          <HeaderMenuItem>
            <AppstoreAddOutlined />
          </HeaderMenuItem>
          <HeaderMenuItem>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()} href="/">
                <Space>
                  <img
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "100%",
                      marginTop: "20px",
                    }}
                    alt="user"
                  />
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </HeaderMenuItem>
        </div>
      </HeaderWrapper>
    </HeaderComponent>
  );
};

export default Header;
