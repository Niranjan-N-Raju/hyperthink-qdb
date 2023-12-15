import React from "react";

import { Layout, Menu, theme } from "antd";
import { Route, Routes } from "react-router-dom";

import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import Header from "./components/Header/Header";
import UserDetails from "./components/UserDetails/UserDetails";
import CalendarComponent from "./components/Dashboard/Calendar";
import BlogPageContent from "./components/BlogPageContent/BlogPageContent";
import Overview from "./components/Dashboard/Overview";
import PostDetails from "./components/PostDetails/PostDetails";
import EditPost from "./components/PostDetails/EditPost";

import { headerOptions as items } from "./config";
import classes from "./App.module.scss";

const { Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: colorBgContainer,
          width: "220px",
          minWidth: "220px",
          maxWidth: "220px",
        }}
      >
        <HeaderLogo />
        <UserDetails />
        <Menu theme="light" mode="inline" items={items} />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header />
        <div className={classes.ContentWrapper}>
          <Content
            style={{
              overflow: "initial",
              borderRadius: 0,
            }}
          >
            <div className={classes.Content}>
              <Routes>
                <Route path="/" element={"Welcome to our bank(QDB)"} />
                <Route path="/dashboard" element={"Dashboard"} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/calendar" element={<CalendarComponent />} />
                <Route path="/blogs" element={<BlogPageContent />} />
                <Route path="/post-details/:id" element={<PostDetails />} />
                <Route path="/edit-post/:id" element={<EditPost />} />
                <Route
                  path="/blogs-all"
                  element={<BlogPageContent type="all-posts" />}
                />
                <Route
                  path="/blogs-latest"
                  element={<BlogPageContent type="latest-posts" />}
                />
                <Route
                  path="/blogs-archived"
                  element={<BlogPageContent type="archived-posts" />}
                />
              </Routes>
            </div>
          </Content>
        </div>
        <Footer className={classes.FooterText}>
          Design ©2023 Created by HyperThink
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
