import Cards from "components/card/Card";
import React from "react";
import styled from "styled-components";
import { Row, Col } from "components/common";
import EfficiencyIcon from "assets/svg/efficiency.svg";
import ProductivityIcon from "assets/svg/Productivity.svg";
import PowerfullIcon from "assets/svg/powerfull.svg";

const HomeCard = () => {
  return (
    <Wrapper>
      <Row gutter={[35, 20]}>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Cards
            cardIcon={EfficiencyIcon}
            description={
              "Eliminate manual bottlenecks and repetitive tasks through intelligent automation, freeing up your valuable human resources for strategic initiatives."
            }
            cardTitle={"Efficiency"}
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Cards
            cardIcon={ProductivityIcon}
            description={
              "Our AI-powered solutions automate repetitive work, streamline workflows, and empower your team to focus on what truly matters - innovation, problem-solving, and strategic decision-making.  "
            }
            cardTitle={"Productivity "}
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Cards
            cardIcon={PowerfullIcon}
            description={
              "Our AI-powered solutions go beyond human capabilities, meticulously analyzing vast datasets to uncover hidden patterns, subtle trends, and crucial correlations. "
            }
            cardTitle={"Precision"}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default HomeCard;

const Wrapper = styled.div`
  padding: 0px 50px 80px 50px;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0px 25px 70px 25px;
    width: 100%;
  }
`;
