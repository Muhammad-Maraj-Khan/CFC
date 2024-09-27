import React, { useEffect, useRef } from "react";
import { Row, Col } from "components/common";
import styled from "styled-components";
import TeachingCard from "./TeachingCards";

const TeachingCardSection = () => {
  return (
    <Wrapper>
      <Row gutter={[30, 30]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <TeachingCard
            className="teaching-card"
            desc={
              "Effortlessly generate comprehensive lesson plans, aligned with curriculum standards, saving teachers valuable time and ensuring engaging content for students."
            }
            title={"Instructional Support"}
          />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <TeachingCard
            className="teaching-card"
            desc={
              "Automate grading of assignments and quizzes, providing instant feedback to students and allowing teachers to focus on personalized instruction."
            }
            title={"Assessment Efficiency"}
          />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <TeachingCard
            className="teaching-card"
            desc={
              "Simplify administrative tasks such as report generation, attendance tracking, and data management, freeing up valuable time for teachers to dedicate to their students."
            }
            title={"Administrative Streamlining"}
          />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <TeachingCard
            className="teaching-card"
            desc={
              "Create customized lesson plans and learning materials for all students, including those with special needs, ensuring that every child receives the support they need to succeed."
            }
            title={"Personalized Learning for All"}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default TeachingCardSection;

const Wrapper = styled.div`
  padding: 10px 50px 50px 50px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 768px) {
    padding: 10px 25px 45px 25px;
  }
`;
