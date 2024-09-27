import { CustomButton } from "components/common";
import React from "react";
import styled from "styled-components";
import CheckIcon from "assets/svg/check.svg";

const PricingCards = ({ cardType }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      <div
        className="pricing-card-container price-mobile-container"
        style={{
          borderRadius:
            cardType == "basic"
              ? "16px 0px 0px 16px"
              : cardType == "premium"
              ? "0px"
              : "0px 16px 16px 0px",
        }}
      >
        <div className="pricing-btn-img">
          <div className="title">
            {cardType == "basic"
              ? "Basic"
              : cardType == "premium"
              ? "Premium"
              : "Enterprise"}
          </div>
          {cardType == "premium" && (
            <div className="popular-btn">
              <CustomButton title={"Popular"} />
            </div>
          )}
        </div>

        <div className="desc">
          {cardType == "basic"
            ? "With climate domain expertise, the AI model used in this plan can quickly and precisely evaluate narratives against funders’ criteria and provide expert guidance."
            : cardType == "premium"
            ? "Unlock the full potential of our Climate Finance Toolkit, including the 'Playground' chatbot, your personal grant writing assistant. Start your 30-day free trial today!"
            : "Empower your climate finance team with the most powerful toolkit, designed with your data security and sovereignty in mind. Gain AI-powered insights into funding."}
        </div>
        <div className="price">
          {cardType == "basic"
            ? "$0"
            : cardType == "premium"
            ? "$99.99"
            : "Custom"}
        </div>
        <div className="price-month">
          {cardType == "basic"
            ? "Per active user/month"
            : cardType == "premium"
            ? "Per active user/month"
            : "Purpose-built for SCALE"}
        </div>
        <div className="pricing-btn" onClick={scrollToTop}>
          <CustomButton
            title={cardType == "basic" ? "Get Started Free" : "Contact Sales"}
            width={"100%"}
            className={cardType == "basic" ? "green-btn" : "gray-btn"}
            link={"/request-a-demo"}
          />
        </div>
        <div className="list-section-user">
          <div className="list-header">Users and devices</div>
          <div className="list-child-section">
            <div className="list-child">
              <img src={CheckIcon} className="check" />{" "}
              {cardType == "enterprise" ? "5" : "1"} User
            </div>
            <div className="list-child">
              <img src={CheckIcon} className="check" />{" "}
              {cardType == "enterprise" ? "5" : "1"} Device
            </div>
          </div>
        </div>
        <div className="list-section-feature">
          <div className="list-header">Features:</div>
          {cardType == "basic" && (
            <div className="list-child-section">
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Access to our tools: Evaluate a Concept Note, Draft a Concept
                Note, Project Structuring and Theory of Change{" "}
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Access to our GPT-4 Model
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                100,000 tokens (approx. 130,000 words)
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Tech Support: Level 3
              </div>
            </div>
          )}

          {cardType == "premium" && (
            <div className="list-child-section">
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Access to: Playground
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Access to our GPT-4 Turbo Model
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                500,000 tokens (approx. 650,000 words)
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Tech Support: Level 2
              </div>
            </div>
          )}
          {cardType == "enterprise" && (
            <div className="list-child-section">
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Access to: Full Proposal Evaluator and Climate Rationale Advisor
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Hybrid/on-site data storage available to meet your local data
                security requirements*
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />5 million tokens
                (approx. 3.75 million words)
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Access to a total of 4 powerful LLM models
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />5 hours of expert AI
                support for special case documents
              </div>
              <div className="list-child">
                <img src={CheckIcon} className="check" />
                Tech Support: Level 1
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingCards;

const Wrapper = styled.div`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
  .pricing-card-container {
    background-color: #fff;
    padding: 30px;
    height: 910px;
  }
  .pricing-btn-img {
    display: flex;
    justify-content: space-between;
  }
  .popular-btn {
    position: relative;
    top: -18px;
  }
  .popular-btn .btn {
    padding: 2px 8px;
    font-size: 12px;
    background-color: #f6f6f6;
  }
  .title {
    color: #000;
    font-size: 27px;
    font-weight: 600;
  }
  .desc {
    color: #2e2e2e;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 20px;
  }
  .price {
    color: #000;
    font-size: 38px;
    font-weight: 500;
    margin-top: 23px;
  }
  .price-month {
    color: #2e2e2e;
    font-size: 12px;
    font-weight: 500;
    margin-top: -5px;
    text-transform: uppercase;
  }
  .pricing-btn {
    margin-top: 20px;
  }
  .green-btn {
    background-color: #00b840;
    border: 1px solid #00b840;
    color: #fff;
  }
  .green-btn:hover {
    background: #244a32;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
  }
  .gray-btn {
    border: 1px solid #e6e4e2;
    background-color: #e6e4e2;
    color: #302c2c;
  }
  .gray-btn:hover {
    background: #244a32;
    color: #fff;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
  }
  .list-section-user {
    margin-top: 25px;
  }
  .list-section-feature {
    margin-top: 40px;
  }
  .list-header {
    color: #302c2c;
    font-size: 16px;
    font-weight: 500;
  }
  .list-child-section {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .list-child {
    display: flex;
    align-items: baseline;
    gap: 3px;
    color: #000;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
  }
  .list-child img {
    position: relative;
    top: 6px;
  }
  @media (max-width: 1052px) {
    .pricing-card-container {
      height: 940px;
    }
  }

  @media (max-width: 850px) {
    .pricing-card-container {
      height: 1020px;
    }
  }

  /* @media (max-width: 1000px) {
    .pricing-card-container {
      height: 970px;
    }
  } */

  @media (max-width: 769px) {
    .pricing-card-container {
      height: 100%;
    }
    .price-mobile-container {
      border-radius: 16px !important;
    }
  }
`;
