import React, { useState } from "react";
import styled from "styled-components";
import { CustomButton } from "components/common";
import VideoModal from "../../../components/common/VideoModal";

const SolutionCards = ({
  solutionIcon,
  solutionTitle,
  SolutionDesc,
  showComingSoon,
  showButton,
  videoSrc, // New prop for video source
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="climate-card-section">
        <div className="climate-btn-img">
          <div>
            <img src={solutionIcon} alt={`${solutionTitle} Icon`} />
          </div>
          {showComingSoon && (
            <div className="coming-soon-btn">
              <CustomButton title={"Coming Soon"} />
            </div>
          )}
        </div>
        <div className="title">{solutionTitle}</div>
        <div className="desc">{SolutionDesc}</div>
        {showButton && (
          <CustomButton
            title="Watch Tutorial Video"
            onClick={handleOpenModal} // Open modal on click
            className={"white"}
          />
        )}
      </div>
      {isModalOpen && (
        <VideoModal onClose={handleCloseModal} isModalOpen={isModalOpen} videoSrc={videoSrc} />
      )}
    </Wrapper>
  );
};

export default SolutionCards;


const Wrapper = styled.div`
  background-color: #3f674e;
  border-radius: 5px;
  padding: 25px;
  height: 350px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
  }

  .climate-card-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }

  .climate-btn-img {
    display: flex;
    justify-content: space-between;
  }

  .coming-soon-btn {
    position: relative;
    top: -8px;
  }

  .coming-soon-btn .btn {
    padding: 2px 12px;
    font-size: 12px;
  }

  .title {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
  }

  .desc {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 13px;
  }

  @media (max-width: 1470px) {
    height: 380px;
  }

  @media (max-width: 1250px) {
    height: 390px;
  }

  @media (max-width: 1200px) {
    height: 350px;
  }

  @media (max-width: 1040px) {
    height: 360px;
  }

  @media (max-width: 994px) {
    height: 340px;
  }

  @media (max-width: 500px) {
    height: 100%;
  }

  /* Apply different styles to the 1st, 3rd, and 5th cards */
  &:nth-child(1),
  &:nth-child(3),
  &:nth-child(5) {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensure the button is at the bottom */
  }
`;


