import { Col, CustomButton, Row } from "components/common";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import WhatWeDoIcon from "assets/images/what-we-do.png";
import EnabelIcon from "assets/images/enable.png";

const WhatWeDo = () => {
  const contextColRef = useRef(null);
  const secondContextColRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const contextCols = contextColRef.current.querySelectorAll(".context-col");
    contextCols.forEach((col) => observer.observe(col));

    const secondContextCols = secondContextColRef.current.querySelectorAll(
      ".second-context-col"
    );
    secondContextCols.forEach((col) => observer.observe(col));

    return () => {
      contextCols.forEach((col) => observer.unobserve(col));
      secondContextCols.forEach((col) => observer.unobserve(col));
    };
  }, []);

  return (
    <Wrapper>
      <Row gutter={[0, 100]} ref={contextColRef}>
        <Col span={24}>
          <Row gutter={[50, 0]}>
            <Col
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="context-col"
            >
              <div className="what-we-do-header">What We Do</div>
              <div className="para1">
                At Janus Advisory, we specialize in creating customized
                AI-enabled web applications for the public sectors institutions
                across the developing world.
              </div>
              <div className="para2">
                By harnessing the power of artificial intelligence (AI) and
                natural language learning models, our software catalyzes and
                streamlines repetitive processes and tasks, freeing up staff to
                focus on complex problem-solving, creative endeavors, and
                meaningful interactions that require uniquely human skills.
              </div>
              <div className="what-we-btn"  onClick={scrollToTop}>
                <CustomButton title={"Learn More"} link={"/about-us"} className={"green"} />
              </div>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} className="img-col">
              <img src={WhatWeDoIcon} />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="custom-software-section">
        <Row gutter={[0, 100]} ref={secondContextColRef}>
          <Col span={24}>
            <Row gutter={[50, 0]} className="second-col">
              <Col
                xl={12}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                className="enabel-img-col"
              >
                <img src={EnabelIcon} />
              </Col>
              <Col
                xl={12}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                className="second-context-col"
              >
                <div className="what-we-do-header">
                  Custom Software for the Developing World
                </div>
                <div className="para1">
                  Janus Advisory empowers organizations in the developing world
                  to overcome resource constraints and achieve sustainable
                  development goals through cutting-edge AI technology.
                </div>
                <div className="para2">
                  Our affordable and scalable solutions drive efficiency,
                  improve decision-making, and foster innovation, even in
                  resource-limited environments.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default WhatWeDo;

const slideInLeft = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const slideInRight = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const slideInTop = `
  @keyframes slideInTop {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Wrapper = styled.div`
  ${slideInLeft}
  ${slideInRight}
  ${slideInTop}
  padding: 100px 50px;
  background-color: #f7f7f7;
  .custom-software-section {
    margin-top: 100px;
  }
  .context-col,
  .second-context-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .context-col.animate {
    animation: slideInLeft 1s forwards;
  }
  .second-context-col {
    transform: translateX(20px);
  }
  .second-context-col.animate {
    animation: slideInRight 1s forwards;
  }
  .what-we-do-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 56px;
  }
  .para1 {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 25px;
  }
  .para2 {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 25px;
  }
  .btn {
    background-color: #00b840;
    border: 1px solid #00b840;
    color: #ffffff;
  }
  .img-col {
    display: flex;
    justify-content: end;
  }
  .img-col img {
    height: 410px;
  }
  .enabel-img-col img {
    height: 410px;
  }
  @media (max-width: 1200px) {
    .context-col,
    .second-context-col {
      align-items: center;
    }
    .para1,
    .para2 {
      text-align: center;
    }
    .img-col {
      margin-top: 25px;
      justify-content: center;
    }
    .custom-software-section {
      margin-top: 20px;
    }
    .second-col {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 60px;
    }
    .what-we-do-header {
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    padding: 45px 25px;

    .what-we-do-header {
      font-size: 31px;
    }
    .context-col,
    .second-context-col {
      transform: translateY(50px);
    }
    .context-col.animate {
      animation: slideInTop 1s forwards;
    }
    .second-context-col {
      transform: translateY(50px);
    }
    .second-context-col.animate {
      animation: slideInTop 1s forwards;
    }
  }
  @media (max-width: 500px) {
    .second-col {
      margin-top: 40px;
    }
    .enabel-img-col img {
      width: 100%;
      height: 100%;
    }
    .img-col img {
      width: 100%;
      height: 100%;
    }
    .what-we-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }
`;
