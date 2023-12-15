import React, { useState } from "react";
import { Button, Modal } from "antd";
const DeleteModal = ({ onCancel, onProceed }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Modal
        open={open}
        title="Delete Post?"
        afterClose={onCancel}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setOpen(false);
              onCancel();
            }}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={onProceed}
          >
            Proceed
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this post?</p>
      </Modal>
    </>
  );
};
export default DeleteModal;
