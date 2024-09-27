import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import EnterpriseCard from "./EnterpriseCard";
import { Row, Col } from "components/common";

const Enterprise = () => {
  const enterpriseRef = useRef(null);

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

    const elements = enterpriseRef.current.querySelectorAll(
      ".enterprise-header, .enterprise-text, .enterprise-card"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Wrapper ref={enterpriseRef}>
      <div className="enterprise-header">
        Accelerate Enterprise Processes By 3 to 10 Times
      </div>
      <div className="enterprise-text">
        Some examples of tasks customized AI software solutions can assume
        include the following:
      </div>
      <div>
        <Row gutter={[30, 30]}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <EnterpriseCard
              className="enterprise-card"
              desc={
                "Quickly scan and analyze large volumes of documents, such as contracts, legal briefs, and research papers, to extract key information, identify patterns, and flag potential issues."
              }
              title={"Document Review and Analysis"}
            />
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <EnterpriseCard
              className="enterprise-card"
              desc={
                " Automate data collection, analysis, and visualization, generating comprehensive reports in a fraction of the time. Eliminate manual errors and free up valuable staff resources for higher-value tasks."
              }
              title={"Report Generation"}
            />
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <EnterpriseCard
              className="enterprise-card"
              desc={
                "Effortlessly create documents, proposals, and contracts with AI-powered assistance. Generate drafts, improve grammar and style, and ensure consistency across all your written communications."
              }
              title={"Data Entry and Processing"}
            />
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <EnterpriseCard
              className="enterprise-card"
              desc={
                "Analyze complex data sets, identify trends and patterns, and provide actionable insights to inform strategic decisions. Make data-driven choices with confidence and drive better outcomes for your organization."
              }
              title={"Decision Support"}
            />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Enterprise;

const slideInLeft = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
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
      transform: translateX(50px);
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
  padding: 120px 50px 80px 50px;
  .enterprise-header,
  .enterprise-text {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .enterprise-header.animate,
  .enterprise-text.animate {
    animation: slideInLeft 1s forwards;
  }
  .enterprise-card {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .enterprise-card.animate {
    animation: slideInRight 1s forwards;
  }
  .enterprise-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    max-width: 700px;
    text-transform: capitalize;
    line-height: 56px;
  }
  .enterprise-text {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 50px;
    max-width: 600px;
    line-height: 27px;
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    padding: 40px 25px;
    .enterprise-header {
      font-size: 36px;
      text-align: center;
      line-height: 47px;
    }
    .enterprise-text {
      text-align: center;
      margin-top: 30px;
    }
    .enterprise-header,
    .enterprise-text {
      transform: translateY(50px);
    }
    .enterprise-header.animate,
    .enterprise-text.animate {
      animation: slideInTop 1s forwards;
    }
    .enterprise-card {
      transform: translateY(50px);
    }
    .enterprise-card.animate {
      animation: slideInTop 1s forwards;
    }
  }
`;
