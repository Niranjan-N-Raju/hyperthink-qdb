import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";

const Hamberger = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  font-size: 16px;
  color: #fff;
`;

const H1 = styled.h1`
  font-size: 26px;
  color: #fff;
`;
const SubHeading = styled.span`
  font-size: 12px;
  padding-bottom: 4px;
  color: #fff;
`;

const menuLogo = {
  display: "flex",
  justifyContent: "space-between",
  padding: "6px 4px",
  backgroundColor: "#397BF6",
  color: "#fff",
};

const HeaderLogo = () => {
  return (
    <>
      <div style={menuLogo}>
        <div>
          <H1>QDB</H1>
          <SubHeading>Qatar Development Bank</SubHeading>
        </div>
        <Hamberger>
          <span style={{ color: "#fff" }}>
            <MenuOutlined />
          </span>
        </Hamberger>
      </div>
    </>
  );
};

export default HeaderLogo;
