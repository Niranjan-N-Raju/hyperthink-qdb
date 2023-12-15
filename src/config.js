import { Link } from "react-router-dom";
import {
  MenuOutlined,
  CalendarOutlined,
  BellOutlined,
  MessageOutlined,
  InfoCircleOutlined,
  WechatOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, path, children) {
  return {
    key,
    icon,
    children,
    label: <Link to={`/${path}`}>{label}</Link>,
  };
}

export const headerOptions = [
  getItem("Dashboards", "1", "", "dashboard", [
    getItem("Overview", "11", <MenuOutlined />, "overview"),
    getItem("Calendar", "12", <CalendarOutlined />, "calendar"),
    getItem("Schedule Actions", "13", <MessageOutlined />, "schedule-sctions"),
    getItem("Live ALerts", "14", <BellOutlined />, "live-alerts"),
  ]),
  getItem("Blogs", "2", "", "blogs", [
    getItem("All", "21", <WechatOutlined />, "blogs-all"),
    getItem("Latest", "22", <InfoCircleOutlined />, "blogs-latest"),
    getItem("Archived", "23", <CalendarOutlined />, "blogs-archived"),
  ]),
];
