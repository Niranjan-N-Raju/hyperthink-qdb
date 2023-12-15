import { useEffect, useState } from "react";

import { Button } from "antd";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  StepBackwardOutlined,
  EditOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

import classes from "./PostDetails.module.scss"; 
import DeleteModal from "../Modal/DeleteModal";

const PostDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date();

  const postId = params.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`)
      .then((data) => data.json())
      .then((result) => {
        setPost(result);
        setLoading(false);
      });
  }, [postId]);

  const deletePost = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((result) => navigate("/blogs"));
  };

  const date = today.toLocaleDateString("en-US", options);
  return (
    <>
      <div>
        <div style={{ color: "#000" }}>
          {loading ? (
            <LoadingOutlined />
          ) : (
            <>
              <div>
                <img
                  src="http://via.placeholder.com/400x200"
                  alt={post.title}
                />
              </div>
              <div style={{ padding: "24px", width: "100%" }}>
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
                <div style={{ textAlign: "left", paddingTop: "24px" }}>
                  <p>{post.body}</p>
                  <p>
                    <Link to="/">Read More...</Link>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button
            type="default"
            icon={<StepBackwardOutlined />}
            size={"default"}
            onClick={() => navigate("/blogs-all")}
          >
            Go Back
          </Button>
        </div>
        <div>
          <Button
            classNames={classes.primaryButton}
            icon={<EditOutlined />}
            size={"default"}
            onClick={() =>
              navigate("/edit-post/" + postId, {
                state: { postDetails: post },
              })
            }
          >
            Edit
          </Button>
          <Button
            style={{ marginLeft: 8 }}
            danger
            icon={<DeleteOutlined />}
            size={"default"}
            onClick={() => setShowModal(true)}
          >
            Delete
          </Button>
        </div>
        {showModal && (
          <DeleteModal
            onCancel={() => setShowModal(false)}
            onProceed={() => deletePost()}
          />
        )}
      </div>
    </>
  );
};

export default PostDetails;
