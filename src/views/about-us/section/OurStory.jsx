import { Col, CustomButton, Row } from "components/common";
import React from "react";
import styled from "styled-components";
import StoryIcon from "assets/images/story.png";
import LeaderIcon from "assets/images/leader.png";
import InvesterIcon from "assets/images/investor.png";
import CapBtnIcon from "assets/svg/new-cap-btn.svg";
import FavIcon from "assets/images/favicon.png";

const OurStory = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openPdf = (e) => {
    e.preventDefault();
    const newTab = window.open("/pdf/janus-capability-statement.pdf", "_blank");
    if (newTab) {
      newTab.onload = () => {
        const head = newTab.document.head;
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = FavIcon; // Use the correct path to your Janus favicon
        head.appendChild(link);
      };
    }
  };
  return (
    <Wrapper>
      <Row gutter={[0, 100]}>
        <Col xs={24} lg={24}>
          <Row gutter={[50, 0]}>
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="context-col-1"
            >
              <div className="what-we-do-header">Our Story</div>
              <div className="para1">
                Janus, the Roman god of beginnings, symbolizes new
                opportunities. As powerful language models usher in an era of
                unprecedented efficiency, governments are presented with a
                unique chance to accelerate their progress.
              </div>
              <div className="para2">
                Janus Advisory, founded by American and Caribbean investors, is
                committed to harnessing the power of AI to drive sustainable
                development and economic growth throughout the region.
              </div>
              <div className="para2">
                We believe strongly in localizing our software products so that
                they address the unique challenges and opportunities faced by
                each organization we serve
              </div>
              <div className="our-story-btn">
                <CustomButton
                  title={"Capability Statement"}
                  className={"green"}
                  onClick={(e) => {
                    openPdf(e);
                  }}
                />
                {/* <img
                  src={CapBtnIcon}
                  className="cap-img"
                  onClick={(e) => {
                    openPdf(e);
                  }}
                /> */}
              </div>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} className="img-col">
              <img src={StoryIcon} alt="Our Story" />
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={24}>
          <Row className="leadership-row">
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="enabel-img-col"
            >
              <img src={LeaderIcon} alt="Our Leadership" />
            </Col>
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="context-col-2"
            >
              <div className="what-we-do-header">Our Leadership</div>
              <div className="para3">
                Oliver Barrett: A decorated retired U.S. military officer of
                Jamaican origin, Oliver brings over 20 years of experience
                leading Department of Defense IT programs.
              </div>
              <div className="para3">
                As a former Senior Research Fellow at the Center for Climate and
                Security, his deep understanding of climate finance dynamics and
                challenges led him to pioneer the world's first AI-powered web
                app for climate finance grant writing. This success sparked
                demand from public sector officials across the Caribbean for AI
                solutions in critical areas like education, procurement and
                disaster response.
              </div>
              <div className="para2">
                Trusted for his AI expertise and ability to transform
                requirements into high-performing software, Oliver is dedicated
                to modernizing the public sector.
              </div>
              <div className="button-container" onClick={scrollToTop}>
                <CustomButton
                  title={"Read Oliver’s Bio"}
                  className={"btn green"}
                  link={"/oliver-barrett"}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={24} className="investor-col">
          <Row gutter={[50, 0]}>
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="context-col-1"
            >
              <div className="what-we-do-header">Our Investors</div>
              <div className="para1">
                Our investors appreciate the transformative opportunity that AI
                technologies represent and believe in Janus Advisory’s ability
                to leverage these tools to revolutionize public sector
                operations.
              </div>
              <div className="para2">
                Janus’s team of experts, are poised to develop and implement
                solutions that streamline processes, improve decision-making,
                and enhance service delivery across a variety of public sector
                institutions.
              </div>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} className="img-col">
              <img src={InvesterIcon} alt="Our Story" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default OurStory;

const Wrapper = styled.div`
  padding: 100px 50px;
  @media (max-width: 768px) {
    padding: 50px 25px;
    width: 100%;
  }
  background-color: #f7f7f7;
  .cap-img {
    width: 100%;
    height: 43px;
    cursor: pointer;
    @media (max-width: 768px) {
      height: 43px;
    }
  }

  /* .our-story-btn {
    width: 100%;
    height: 43px;
    background-image: url(${CapBtnIcon});
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
      height: 43px;
    }
  }

  .our-story-btn:hover {
    background-image: url(${FavIcon});
  } */
  .context-col-1 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
    margin-top: 20px;

    @media (max-width: 768px) {
      padding: 0;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
  .context-col-2 {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
    padding-left: 40px;
    margin-top: 40px;

    @media (max-width: 768px) {
      padding: 0;
      text-align: center;
      justify-content: center;
      padding-left: 0;
      align-items: center;
    }
  }

  .what-we-do-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
    margin-bottom: 12px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .para1,
  .para2 {
    margin-top: 10px;
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 25px;
    max-width: 550px;
  }

  .para3 {
    margin-top: 10px;
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 25px;
  }

  .btn {
    background-color: #00b840;
    color: #ffffff;
  }

  .img-col,
  .enabel-img-col {
    display: flex;
    justify-content: start;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .img-col img,
  .enabel-img-col img {
    width: 100%;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  .enabel-img-col img {
    width: 90%;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  .leadership-row {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .button-container {
    @media (max-width: 768px) {
      
    }
  }

  @media (max-width: 1200px) {
    padding-top: 50px;
    padding-bottom: 50px;
    .context-col-1,
    .context-col-2 {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    .para1,
    .para2,
    .para3 {
      text-align: center;
    }
    .leadership-row {
      flex-direction: column-reverse;
      margin-top: -40px;
    }
    .enabel-img-col {
      margin-bottom: 0px;
    }
    .enabel-img-col img {
      width: 100%;
    }
    .context-col-2 {
      margin-top: 0px;
      padding: 0px 25px;
    }
    .context-col-1 {
      margin-top: 0px;
    }
    .investor-col {
      margin-top: -20px;
    }
  }

  /* @media (max-width: 500px) {
    .our-story-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  } */
`;
