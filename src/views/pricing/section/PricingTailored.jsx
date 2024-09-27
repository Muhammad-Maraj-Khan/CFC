import React from "react";
import styled from "styled-components";

const PricingTailored = () => {
  return (
    <Wrapper>
      <div className="Pricing-Tailored-container">
        <div className="Pricing-Tailored-header">
          Pricing Tailored To Your Needs
        </div>
        <div className="Pricing-Tailored-text">
          We've found that enterprise clients thrive with custom-built software
          tailored to their specific needs and requirements. Here's how our
          streamlined purchasing process works:
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingTailored;

const Wrapper = styled.div`
  .Pricing-Tailored-container {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 50px 40px;
      text-align: center;
    }
  }
  .Pricing-Tailored-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 35px;
      line-height: 40px;
    }
  }
  .Pricing-Tailored-text {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    max-width: 700px;
    margin-top: 10px;
    line-height: 27px;
  }
`;
