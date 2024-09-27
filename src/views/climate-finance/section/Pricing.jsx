import { Col, Row } from "components/common";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PricingCards from "./PricingCards";

const Pricing = () => {
  const janusRef = useRef(null);

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

    const elements = janusRef.current.querySelectorAll(
      ".janus-header, .janus-text"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Wrapper ref={janusRef}>
      <div className="Janus-container">
        <div className="janus-header">Pricing Made Just For You</div>
        <div className="janus-text">
          The world’s first climate finance software made for boosting your
          capacity to win much more climate funding.
        </div>
      </div>
      <div className="pricing-card-section">
        <Row gutter={[5, 0]}>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <PricingCards cardType="basic" />
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24} className="card-col">
            <PricingCards cardType={"premium"} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24} className="card-col">
            <PricingCards cardType={"enterprise"} />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Pricing;

const slideInBottom = `
  @keyframes slideInBottom {
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
  ${slideInBottom}
  padding-top: 80px;
  padding-bottom: 90px;
  .Janus-container {
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .janus-header,
  .janus-text {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .janus-header.animate,
  .janus-text.animate {
    animation: slideInBottom 1s forwards;
  }
  .janus-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
  }
  .janus-text {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    max-width: 650px;
    margin-top: 5px;
    line-height: 28px;
  }
  .pricing-card-section {
    padding: 0px 300px;
  }
  @media (max-width: 768px) {
    padding: 0px 25px;
    padding-bottom: 40px;
    .Janus-container {
      padding-top: 40px;
      padding-bottom: 30px;
    }
    .janus-header {
      font-size: 35px;
      text-align: center;
    }
  }
  @media (max-width: 1400px) {
    .pricing-card-section {
      padding: 0px 100px;
    }
  }
  @media (max-width: 1000px) {
    .pricing-card-section {
      padding: 25px;
    }
  }
  @media (max-width: 768px) {
    .card-col {
      margin-top: 30px;
    }
    .pricing-card-section {
      padding: 0px;
    }
  }
`;
