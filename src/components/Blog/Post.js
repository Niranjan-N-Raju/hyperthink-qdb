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
        <div className={classes.PostWrapper}>
          <div>
            <img src="http://via.placeholder.com/200x200" alt={post.title} />
          </div>
          <div className={classes.Content}>
            <div className={classes.TextContent}>
              <span className={classes.PostHeading}>{post.title}</span>
              <span>{date}</span>
            </div>
            <div className={classes.Body}>
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
