import React from "react";
import styled from "styled-components";

const PlaygroundSubCard = ({ climateIcon, climateTitle, climateDesc }) => {
  return (
    <Wrapper>
      <div className="climate-card-section">
        <div>
          <img src={climateIcon} />
        </div>
        <div className="desc">{climateDesc}</div>
      </div>
    </Wrapper>
  );
};

export default PlaygroundSubCard;

const Wrapper = styled.div`
  background-color: #3F674E;
  border-radius: 5px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  height: 200px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
  .climate-card-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .desc {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
    @media (max-width: 1440px) {
    height: 260px;
  }
  @media (max-width: 1310px) {
    height: 280px;
  }
  @media (max-width: 1200px) {
    height: 100%;
    padding-left: 54px;
  padding-right: 54px;
  padding-top: 28px;
  padding-bottom: 28px;
  }
    @media (max-width: 768px) {
    padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
  padding-right: 20px;
  padding-top: 17px;
  padding-bottom: 17px;
  }
`;
