import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Blog from "../Blog/Blog";
import PageHeader from "../PageHeader/PageHeader";

const BlogPageContent = ({ type }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}users/${process.env.REACT_APP_USER_ID}/posts`
    )
      .then((data) => data.json())
      .then((result) => {
        setPosts(result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PageHeader />
      {loading && <LoadingOutlined />}
      {posts.length > 0 && !loading && (
        <Tabs
          defaultActiveKey="all-posts"
          onTabClick={(e) => console.log(e)}
          items={[
            {
              label: "All Posts",
              key: "all-posts",
              children: <Blog type="all" posts={posts} />,
            },
            {
              label: "Latest Posts",
              key: "latest-posts",
              children: <Blog type="latest" posts={posts} />,
            },
            {
              label: "Archived",
              key: "archived",
              children: <Blog type="archived" posts={posts} />,
            },
          ]}
        />
      )}
    </>
  );
};

export default BlogPageContent;
