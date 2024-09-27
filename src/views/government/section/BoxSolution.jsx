import React from "react";
import styled from "styled-components";

const BoxSolution = () => {
  return (
    <Wrapper>
      <div className="Box-solution-container">
        <div className="Box-solution-header">Solutions Customized For You</div>
        <div className="Box-solution-text">
          Instead of offering a range of deployed generic web apps built based
          on assumptions about how enterprises work, Janus offers a suite of
          customizable web applications ready to be tailored to your specific
          needs. Our current ready-for-customization solutions include:
        </div>
      </div>
    </Wrapper>
  );
};

export default BoxSolution;

const Wrapper = styled.div`
  .Box-solution-container {
    padding-top: 70px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 50px 25px;
      text-align: center;
    }
  }
  .Box-solution-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 35px;
      line-height: 40px;
    }
  }
  .Box-solution-text {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    max-width: 700px;
    margin-top: 10px;
    line-height: 27px;
  }
`;
