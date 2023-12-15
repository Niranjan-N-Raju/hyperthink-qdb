import Post from "./Post";
import CustomPagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 3;

const Blog = ({ posts, type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const from = (currentPage - 1) * POSTS_PER_PAGE;
    const to = from + POSTS_PER_PAGE;
    const post = posts.slice(from, to);
    setFilteredPosts(post);
  }, [currentPage, posts]);

  return (
    <>
      {filteredPosts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
      <div style={{ paddingTop: "24px" }}>
        <CustomPagination
          defaultCurrent={currentPage}
          total={posts.length}
          perPage={POSTS_PER_PAGE}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default Blog;
