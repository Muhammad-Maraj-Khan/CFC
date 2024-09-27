import React, { useEffect, useRef } from "react";
import { Row, Col } from "components/common";
import styled from "styled-components";
import DisasterCard from "./DisasterCards";

const DisasterCardSection = () => {
  return (
    <Wrapper>
      <Row gutter={[30, 30]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <DisasterCard
            className="teaching-card"
            desc={
              "Automate the generation of realistic and comprehensive disaster exercise scripts, tailored to specific scenarios and organizational needs, ensuring thorough preparedness and testing of response protocols."
            }
            title={"Disaster Planning Exercise Scripts"}
          />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <DisasterCard
            className="teaching-card"
            desc={
              "Utilize AI algorithms to analyze existing disaster preparedness policies and procedures, identifying gaps, inconsistencies, and areas for improvement, ensuring compliance with best practices and regulatory requirements."
            }
            title={"Policy and Procedure Review"}
          />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <DisasterCard
            className="teaching-card"
            desc={
              "Streamline the grant writing process by automating the generation of grant proposals, incorporating relevant data, aligning with funding priorities, and ensuring adherence to grant guidelines, increasing the chances of securing crucial funding for disaster preparedness initiatives."
            }
            title={"Grant Writing Support"}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DisasterCardSection;

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
