import React from "react";
import styled from "styled-components";
import PricingCards from "./PricingCards";
import { Col, Row } from "components/common";
import firstIcon from "assets/svg/01.svg";
import secondIcon from "assets/svg/02.svg";
import thirdIcon from "assets/svg/03.svg";
import fourthIcon from "assets/svg/04.svg";
import fifthIcon from "assets/svg/05.svg";

const PricingCardSection = () => {
  const column1Cards = [
    {
      image: firstIcon,
      title: "Initial Consultation",
      description:
        "We start with an in-depth consultation to understand your specific challenges, goals, and requirements.",
    },
  ];

  const column2Cards = [
    {
      image: secondIcon,
      title: "Needs Assessment",
      description:
        "Our team of experts will then conduct a thorough assessment to determine the best AI solution for your organization.",
    },
  ];

  const column3Cards = [
    {
      image: thirdIcon,
      title: "Proposal Development",
      description:
        "Based on the assessment, we will develop a detailed proposal outlining the scope of work, customization required, timeline, and cost.",
    },
  ];

  const column4Cards = [
    {
      image: fourthIcon,
      title: "Agreement and Implementation",
      description:
        "Once the payment is received, we will begin the implementation process, working closely with your team to ensure a smooth onboarding experience.",
    },
  ];

  const column5Cards = [
    {
      image: fifthIcon,
      title: "Ongoing Support and Maintenance",
      description:
        "We provide ongoing support and maintenance to ensure the optimal performance and continued success of your AI solution.",
    },
  ];

  return (
    <Wrapper>
      <Row gutter={[18, 18]}>
        <Col xs={24} lg={8}>
          <PricingCards cards={column1Cards} />
        </Col>
        <Col xs={24} lg={8}>
          <PricingCards cards={column2Cards} />
        </Col>
        <Col xs={24} lg={8}>
          <PricingCards cards={column3Cards} />
        </Col>
        <Col xs={24} lg={12}>
          <PricingCards cards={column4Cards} />
        </Col>
        <Col xs={24} lg={12}>
          <PricingCards cards={column5Cards} />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default PricingCardSection;

const Wrapper = styled.div`
  padding: 0px 50px 70px 50px;
  background-color: #f7f7f7;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0px 25px 70px 25px;
    width: 100%;
  }
`;
