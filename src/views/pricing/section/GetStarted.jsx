import React from "react";
import styled from "styled-components";
import BackgroundImage from "assets/images/getstartedbg.png";
import { CustomButton } from "components/common";

const GetStarted = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      <div className="content-container">
        <h1 className="heading">Ready to Get Started?</h1>
        <p className="description">
          Our goal is to make the process as seamless as possible, providing you
          with a customized solution that delivers real value to your
          organization.
        </p>
        <div onClick={scrollToTop}>
        <CustomButton title="Contact Us"  link={"/contact-us"}  className={"white"}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default GetStarted;

const Wrapper = styled.div`
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #00b840;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: bottom center;
    border-radius: 5px;
    padding: 140px 50px;
    height: 580px;
    text-align: center;
    margin: 50px 24px;

    @media (max-width: 768px) {
      padding: 100px 25px;
      margin: 20px 16px;
    }

    @media (max-width: 480px) {
      padding: 80px 25px;
      margin: 10px 20px;
    }
  }

  .heading {
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 26px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  .description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 30px;
    max-width: 700px;

    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 20px;
      max-width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  .cta-button {
    background-color: #fff;
    color: #2e2e2e;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 14px;
      width: 100% !important;
      padding: 8px 18px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      padding: 6px 16px;
    }
  }

  .cta-button:hover {
    background-color: #f0f0f0;
  }
`;
