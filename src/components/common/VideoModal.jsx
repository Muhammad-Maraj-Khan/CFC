import React from "react";
import styled from "styled-components";
import { Modal } from "antd";

const VideoModal = ({ onClose, isModalOpen, videoSrc }) => {
  return (
    <StyledModal
      title={""}
      visible={isModalOpen}
      onCancel={onClose} // Ensure the modal can be closed
      footer={false}
      centered // Center the modal on the screen
      bodyStyle={{ padding: "4px", backgroundColor: "black" }}
      width={800} // Set the desired width of the modal
    >
      <video
        src={videoSrc} // Dynamic video source
        autoPlay
        controls
        loop
        style={{ width: "100%", height: "100%" }} // Video styling
      />
    </StyledModal>
  );
};

// Styled component to customize the modal
const StyledModal = styled(Modal)`
  .ant-modal-close {
    color: #00b840;
  }

  .ant-modal-header {
    background-color: black; // Optional: Change header background to black
  }

  .ant-modal-title {
    color: white; // Change title color to white
  }

  .ant-modal-body {
    background-color: black; // Ensure modal body background is black
  }
`;

export default VideoModal;