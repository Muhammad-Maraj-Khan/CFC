import React from "react";
import styled from "styled-components";
import BankIcon from "assets/svg/jamaica-bank.svg";
import BankdBgIcon from "assets/svg/carousel-bank.svg";

const HomeCarouselCard = () => {
  return (
    <Wrapper>
      <div className="bg-container">
        <div
          className="carousel-section"
          style={{
            backgroundImage: `url(${BankdBgIcon})`,
          }}
        >
          <div className="bank-text-section">
            {/* <img src={BankIcon} className="bank-icon" /> */}
            Central American Grant Writer
          </div>
          <div className="carousel-text">
            Using this tool has significantly streamlined the process of
            evaluating Concept Notes. Traditionally, a team of approximately
            eight people would take about three months to complete this task.
            However, with the tool’s guidance on tailoring the content correctly
            - we can now accomplish the evaluation in just a few days.
          </div>
          <div className="James-Bailey">Ms. Maria Ramirez, Grant Writer</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeCarouselCard;

const Wrapper = styled.div`
  .bg-container {
    background-color: #00b840;
    border-radius: 12px;
  }
  .carousel-section {
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 50px;
    height: 560px;
    border-radius: 12px;
  }
  .bank-icon {
    width: 160px;
  }
  .carousel-text {
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    line-height: 40px;
    margin-top: 50px;
    max-width: 900px;
  }
  .James-Bailey {
    margin-top: 25px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }
  .bank-text-section {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    .carousel-section {
      padding: 35px 20px;
      height: 100vh;
    }
    .bank-icon-section {
      display: flex;
      justify-content: center;
    }

    .carousel-text {
      text-align: center;
      line-height: 33px;
      font-size: 16px;
    }
    .James-Bailey {
      text-align: center;
    }
  }
`;
