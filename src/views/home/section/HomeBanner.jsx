import { Row, Col } from "antd";
import { CustomButton } from "components/common";
import React from "react";
import styled from "styled-components";
import CFC from "assets/images/CFC.png"; // Adjust the path as needed

const HomeBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <div className="home-banner-container">
        <Row gutter={[30, 0]}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className="home-content">
            <div className="home-banner-header fade-in-header">
              AI-Powered Solutions to Transform Your Enterprise
            </div>
            <div className="home-banner-text fade-in-text">
              An AI oriented consultancy specializing in creating custom
              software solutions for enterprises across the developing world.
            </div>
            <div className="home-btn fade-in-btn" onClick={scrollToTop}>
              <CustomButton
                title={"Learn More"}
                link={"/about-us"}
                className={"white"}
              />
            </div>
          </Col>
          {/* <Col
            xl={12}
            lg={12}
            md={24}
            sm={24}
            xs={24}
            className="home-video-col"
          >
            <div className="video-container">
              <video
                width="100%"
                height="auto"
                controls={false}
                autoPlay
                muted
                loop
              >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
          <Col
            xl={12}
            lg={12}
            md={24}
            sm={24}
            xs={24}
            className="home-mobile-video-col"
          >
            <div className="video-container">
              <video
                width="100%"
                height="auto"
                controls={false}
                autoPlay
                muted
                loop
              >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col> */}
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className="home-img-col">
            <img src={CFC} />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default HomeBanner;

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
  .home-banner-container {
    background-color: #00b840;
    padding: 100px 50px;
  }
  .home-content {
    padding-top: 28px;
  }
  .home-banner-header {
    color: #fff;
    font-size: 60px;
    font-weight: 600;
    line-height: 70px;
    max-width: 650px;
  }
  .home-banner-text {
    margin-top: 15px;
    color: #ffffff;
    opacity: 0.9;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    max-width: 500px;
  }
  .home-btn {
    margin-top: 25px;
  }
  .home-img-col {
    text-align: center;
    padding: 0 !important;
  }
  .home-img-col img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .home-mobile-img-col {
    display: none;
  }
  /* .home-video-col,
  .home-mobile-video-col {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;  */
  /* height: 0;
    overflow: hidden;
  }
  .video-container video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    object-position: center;
  }
  .home-mobile-video-col {
    display: none;
  } */
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

    .home-mobile-video-col {
      display: block;
      margin-top: 50px;
    }
    .home-video-col {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .home-banner-container {
      padding: 50px 25px;
    }
  }
  @media (max-width: 500px) {
    .home-btn {
      width: 100%;

      .btn {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
`;
