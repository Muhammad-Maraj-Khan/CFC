import React from "react";
import styled from "styled-components";
import CommaIcon from "assets/svg/comma.svg";
import InvertedCommaIcon from "assets/svg/inverted-comma.svg";
import WorldCarousel from "./WorldCarousel";

const DoNotTakeWorld = ({ desc, writer }) => {
  return (
    <Wrapper>
      <div className="world-container">
        <div className="comma-section">
          <img src={CommaIcon} />
        </div>
        <div className="carosule-container-header">
          <div className="world-header">Don’t Take Our Word For It</div>
          <div className="carosuel-container">
            <WorldCarousel />
          </div>
        </div>
        <div className="inverted-comma">
          <img src={InvertedCommaIcon} />
        </div>
      </div>
    </Wrapper>
  );
};

export default DoNotTakeWorld;

const Wrapper = styled.div`
  background-color: #00b840;
  padding: 80px 50px;
  height: 620px;
  display: flex;
  align-items: center;
  .comma-section,
  .inverted-comma {
    width: 15%;
  }
  .carosule-container-header {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .comma-section img {
    margin-top: 36px;
  }
  .inverted-comma {
    display: flex;
    align-items: end;
  }
  .carosuel-container {
    width: 95%;
  }
  .world-container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .world-header {
    font-size: 48px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  .world-desc {
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  .world-writer {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  .o-circle-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .o-class {
    width: 13px;
    height: 13px;
    border-radius: 100%;
    border: 2px solid white;
  }
  .circle-class {
    width: 9px;
    height: 9px;
    border-radius: 100%;
    background-color: #fff;
  }
  @media (max-width: 1200px) {
    .comma-section,
    .inverted-comma {
      display: none;
    }
    .carosule-container-header {
      width: 100%;
    }
    .carosuel-container {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 35px 25px;
    .world-header {
      font-size: 36px;
    }
    .world-desc {
      font-size: 25px;
    }
  }
  @media (max-width: 640px) {
    height: 660px;
  }
  @media (max-width: 500px) {
    height: 870px;
  }
`;
