import { Link } from "react-router-dom";
import classes from "./Post.module.scss";

const Post = ({ post }) => {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date();

  const date = today.toLocaleDateString("en-US", options);
  return (
    <>
      <Link to={`/post-details/${post.id}`}>
        <div style={{ display: "flex", color: "#000" }}>
          <div>
            <img src="http://via.placeholder.com/200x200" alt={post.title} />
          </div>
          <div style={{ padding: "0 24px", width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <span className={classes.postHeading}>{post.title}</span>
              <span>{date}</span>
            </div>
            <div style={{ textAlign: "left", paddingTop: "8px" }}>
              <p>{post.body}</p>
              <p>
                <Link to="/">Read More...</Link>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Post;
