import Cards from "components/card/Card";
import React from "react";
import styled from "styled-components";
import { Row, Col } from "components/common";
import BuildIcon from "assets/svg/built-for-scale.svg";
import CustomizeIcon from "assets/svg/customized-for-you.svg";
import OptimizedIcon from "assets/svg/lock.svg";

const HomeCard = () => {
  return (
    <Wrapper>
      <Row gutter={[35, 20]}>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <StyledCard
            cardIcon={BuildIcon}
            description={
              "Janus Advisory's AI-powered solutions aren't just about immediate gains; they're designed to grow with your organization. Our scalable architecture and flexible tools adapt to your evolving needs."
            }
            cardTitle={"Built for scale"}
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <StyledCard
            cardIcon={CustomizeIcon}
            description={
              "We understand that every organization is unique. That's why our AI solutions are not one-size-fits-all. We work closely with you to understand your specific challenges and tailor our tools to deliver maximum impact"
            }
            className="Animation"
            cardTitle={"Customized for you"}
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <StyledCard
            cardIcon={OptimizedIcon}
            description={
              "Our AI solutions adhere to rigorous security protocols and industry best practices, ensuring the confidentiality and integrity of your information throughout every stage of implementation and use."
            }
            cardTitle={"Optimized for security"}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default HomeCard;

const Wrapper = styled.div`
  padding: 0px 50px 80px 50px;
  .fJUooM {
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    padding: 0px 25px 80px 25px;
  }
`;

const StyledCard = styled(Cards)``;
