import React from "react";
import styled from "styled-components";

const ClimateCards = ({ climateIcon, climateTitle, climateDesc }) => {
  return (
    <Wrapper>
      <div className="climate-card-section">
        <div>
          <img src={climateIcon} />
        </div>
        <div className="title">{climateTitle}</div>
        <div className="desc">{climateDesc}</div>
      </div>
    </Wrapper>
  );
};

export default ClimateCards;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
  height: 300px;
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
  .title {
    color: #000000;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    max-width: 200px;
    text-transform: capitalize;
    min-height: 48px;
  }
  .desc {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }
  @media (max-width: 1310px) {
    height: 320px;
  }
  @media (max-width: 1200px) {
    height: 100%;
  }
`;
