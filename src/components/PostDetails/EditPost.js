import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const EditPost = () => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(state?.postDetails?.title);
  const [description, setDescription] = useState(state?.postDetails?.body);

  const submitPost = () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/${state?.postDetails?.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body: description }),
    })
      .then((data) => data.json())
      .then((result) => {
        setLoading(false);
        navigate("/blogs");
      });
  };

  const formElementChanged = (e) => {
    console.log(e);
    if (e.description) {
      setDescription(e.description);
    } else if (e.title) {
      setTitle(e.title);
    }
  };

  return (
    <>
      <Form
        onFinish={submitPost}
        onValuesChange={formElementChanged}
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
          initialValue={state?.postDetails?.title}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
          initialValue={state?.postDetails?.body}
        >
          <Input.TextArea style={{ resize: "none", height: "200px" }} />
        </Form.Item>
        {loading ? (
          <LoadingOutlined />
        ) : (
          <Form.Item label=" ">
            <Button type="default" htmlType="submit">
              Back
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
              Submit
            </Button>
          </Form.Item>
        )}
      </Form>
    </>
  );
};

export default EditPost;
