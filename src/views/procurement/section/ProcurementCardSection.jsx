import React, { useEffect, useRef } from "react";
import { Row, Col } from "components/common";
import styled from "styled-components";
import ProcurementCards from "./ProcurementCards";

const ProcurementCardsSection = () => {
  return (
    <Wrapper>
      <Row gutter={[30, 30]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <ProcurementCards
            className="teaching-card"
            desc={
              "Quickly generate accurate and comprehensive Terms of Reference (TOR), contracts, and other procurement documents, saving valuable time and reducing errors."
            }
            title={"Automated Document Drafting"}
          />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <ProcurementCards
            className="teaching-card"
            desc={
              "Analyze proposals and expressions of interest against predefined criteria, ensuring fair and transparent evaluation processes."
            }
            title={"Objective Proposal Evaluation"}
          />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <ProcurementCards
            className="teaching-card"
            desc={
              "Gain valuable insights into spending patterns, vendor performance, and market trends, enabling data-driven decision-making for improved procurement outcomes."
            }
            title={"Data-Driven Insights"}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ProcurementCardsSection;

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
