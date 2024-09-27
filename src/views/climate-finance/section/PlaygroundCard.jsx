import React from "react";
import styled from "styled-components";
import PlaygroundSubCard from "./PlaygroundSubCard";
import { Col, Row } from "components/common";
import step1 from "assets/svg/step3.svg";
import step2 from "assets/svg/step1.svg";
import step3 from "assets/svg/step2.svg";

const PlaygroundCard = () => {
  return (
    <Wrapper>
      <Row gutter={[30, 18]}>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <PlaygroundSubCard
            climateIcon={step1}
            climateDesc={
              "Write/paste in your query into the input field and select the model you want to use."
            }
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <PlaygroundSubCard
            climateIcon={step2}
            climateDesc={
              "Select the database you want the model to access to assure fine tuned responses.    "
            }
          />
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <PlaygroundSubCard
            climateIcon={step3}
            climateDesc={
              "Review the AI output and continue the string or copy the content to your working document."
            }
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default PlaygroundCard;

const Wrapper = styled.div`
 padding: 45px 00px 0px 00px;
  @media (max-width: 768px) {
    
  }
`;
