import React from "react";
import styled from "styled-components";
import BoxSolutionCards from "./BoxSolutionCards";
import { Col, Row } from "components/common";
import firstIcon from "assets/svg/01.svg";
import secondIcon from "assets/svg/02.svg";
import thirdIcon from "assets/svg/03.svg";

const BoxSolutionCardSection = () => {
  const column1Cards = [
    {
      image: firstIcon,
      title: "Climate Finance",
      description:
        "Unlock more climate funding faster and with less expense with Climate Finance Co-pilot. The world’s first AI enabled climate funding application. ",
    },
  ];

  const column2Cards = [
    {
      image: secondIcon,
      title: "Instructional and Education",
      description:
        "Designed to “de-burden” teachers and administrators, this tool automates lesson planning, grading, and personalized student support.",
    },
  ];

  const column3Cards = [
    {
      image: thirdIcon,
      title: "Public Sector Procurement",
      description:
        "Procurement Co-pilot clears bottlenecks caused by labor shortfalls. Assess complex proposals in 1/10 of traditional time frames. ",
    },
  ];

  return (
    <Wrapper>
      <Row gutter={[18, 18]}>
        <Col xs={24} lg={8}>
          <BoxSolutionCards cards={column1Cards} />
        </Col>
        <Col xs={24} lg={8}>
          <BoxSolutionCards cards={column2Cards} />
        </Col>
        <Col xs={24} lg={8}>
          <BoxSolutionCards cards={column3Cards} />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default BoxSolutionCardSection;

const Wrapper = styled.div`
  padding: 0px 80px 90px 80px;
  background-color: #f7f7f7;
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0px 25px 70px 25px;
    width: 100%;
  }
`;
