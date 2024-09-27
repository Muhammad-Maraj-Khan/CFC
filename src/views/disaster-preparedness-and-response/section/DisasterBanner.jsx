import { Row, Col } from "antd";
import { CustomButton } from "components/common";
import React from "react";
import styled from "styled-components";
import DisasterBannerImage from "assets/images/disaster-banner.png";

const DisasterBanner = () => {
  return (
    <Wrapper>
      <div className="home-banner-container">
        <Row gutter={[30, 0]}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className="home-content">
            <div className="disaster-sub-header">
              Disaster Preparedness and Response
            </div>
            <div className="home-banner-header fade-in-header">
              Be Prepared and Stay Ready for Any Potential Disasters
            </div>
            <div className="home-banner-text fade-in-text">
              Our AI solutions empower disaster management teams to develop
              comprehensive plans, refine existing policies and procedures, and
              secure the necessary funding to enhance their disaster response
              capabilities.
            </div>
            <div className="home-btn fade-in-btn">
              <CustomButton title={"Coming Soon"} />
            </div>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className="home-img-col">
            <img src={DisasterBannerImage} />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default DisasterBanner;

const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  ${fadeIn}
  .home-banner-container {
    background-color: #903f25;
    padding: 100px 50px;
  }
  .disaster-sub-header {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px;
  }
  .home-content {
    padding-top: 28px;
  }
  .home-banner-header {
    color: #fff;
    font-size: 60px;
    font-weight: 600;
    line-height: 70px;
    max-width: 500px;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
  }
  .home-banner-text {
    margin-top: 15px;
    color: #ffffffe5;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    max-width: 500px;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;
  }
  .home-btn {
    margin-top: 25px;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 1.5s;
  }
  .home-img-col {
    text-align: center;
  }
  .home-img-col img {
    width: 75%;
    height: 100%;
    object-fit: contain;
  }
  .home-mobile-img-col {
    display: none;
  }
  @media (max-width: 1200px) {
    .home-banner-header {
      font-size: 45px;
      line-height: 50px;
    }
  }
  @media (max-width: 1097px) {
    .home-banner-header {
      font-size: 39px;
      line-height: 47px;
    }
  }
  @media (max-width: 992px) {
    .home-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .home-banner-header {
      text-align: center;
    }
    .home-banner-text {
      text-align: center;
      margin-top: 15px;
    }

    .home-mobile-img-col {
      display: block;
      margin-top: 50px;
      text-align: center;
    }
    .home-img-col {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .home-banner-container {
      padding: 10px 25px 80px 25px;
    }
  }
  @media (max-width: 500px) {
    .home-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }
`;
