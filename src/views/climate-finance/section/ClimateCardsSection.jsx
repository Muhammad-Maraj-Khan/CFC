import React from "react";
import styled from "styled-components";
import ClimateCards from "./ClimateCards";
import { Col, Row } from "components/common";
import firstIcon from "assets/svg/01.svg";
import SecondIcon from "assets/svg/02.svg";
import ThirdIcon from "assets/svg/03.svg";

const ClimateCardsSection = () => {
  return (
    <Wrapper>
      <Row gutter={[18, 18]}>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <ClimateCards
            climateTitle={"Select a Task You Want to Accomplish"}
            climateIcon={firstIcon}
            climateDesc={
              "Start by selecting the tool based on your objective or the session. For general climate research and drafting, use our AI chat companion, “Playground” for incredible efficiencies."
            }
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <ClimateCards
            climateTitle={"Get Started"}
            climateIcon={SecondIcon}
            climateDesc={
              "For single purpose tools like Evaluate a Concept Note, submit your narratives for evaluation. For AI enabled research, writing, editing, then interact with Playground."
            }
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <ClimateCards
            climateTitle={"Generate Reports and Share"}
            climateIcon={ThirdIcon}
            climateDesc={
              "All single purpose tools generate a shareable report at the end of their workflows. These are automatically saved and always ready for sharing with teammates."
            }
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ClimateCardsSection;

const Wrapper = styled.div`
  padding: 0px 80px 70px 80px;

  @media (max-width: 768px) {
    padding: 0px 25px 30px 25px;
  }
`;
