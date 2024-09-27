import React from "react";
import styled from "styled-components";
import { Row, Col } from "components/common";
import Members from "./Member";
import checker from "assets/images/checker.png";
import Oliver from "assets/images/Oliver Barrett.jpeg";
import Isaiah from "assets/images/Isaiah Barrett.jpeg";
import Muhammad from "assets/images/Mohammed.png";
import Kemal from "assets/images/Kemal Dag.png";
import Lais from "assets/images/Lais Braga.png";
import Lucas from "assets/images/Lucas Alvarez.jpg";

const MemberCard = () => {
  return (
    <Wrapper>
      <Row gutter={[35, 20]}>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Members
            cardImg={Oliver}
            title={"CEO & Founder"}
            description={
              "Oliver Barrett has over 20 years of experience leading public sector organizations’ IT programs. He is the founder and CEO of the company. "
            }
            cardTitle={"Oliver Barrett"}
          />
        </Col>

        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Members
            cardImg={Isaiah}
            title={"CTO"}
            description={
              "As a seasoned UX/UI designer, and with over a decade of design experience in the industry, Isaiah, leads all software design efforts. He is a co-founder of the company. "
            }
            cardTitle={"Isaiah Barrett"}
          />
        </Col>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Members
            cardImg={Muhammad}
            title={"Senior AI Engineer"}
            description={
              "Mohamed is an experienced AI engineer who translates our complex business requirements into scalable, high-performance AI web apps."
            }
            cardTitle={"Mohammed Ardif"}
          />
        </Col>
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Members
            cardImg={Kemal}
            title={"Full Stack Developer"}
            description={
              "Kemal is a seasoned systems engineer responsible for designing, implementing, and managing our cloud infrastructure. "
            }
            cardTitle={"Kemal Dag"}
          />
        </Col>
        {/* <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Members
            cardImg={Lais}
            title={"Virtual Assistant"}
            description={
              "Lais specializes in climate data acquisition, efficient task management, and rigorous AI quality assurance. Dedicated to streamlining operations across our company."
            }
            cardTitle={"Lais Braga"}
          />
        </Col> */}
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <Members
            cardImg={Lucas}
            title={"Cybersecurity Specialist"}
            description={
              "Lucas is responsible for  implementing our security strategies designed to mitigate risks and ensure our software compliance with industry standards."
            }
            cardTitle={"Lucas Alvarez"}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default MemberCard;

const Wrapper = styled.div`
  padding: 0px 50px 80px 50px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0px 25px 70px 25px;
    width: 100%;
  }
`;
