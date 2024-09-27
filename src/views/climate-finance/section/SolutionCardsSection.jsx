import React from "react";
import styled from "styled-components";
import { Col, Row } from "components/common";
import SolutionCards from "./SolutionCards";
import ConceptIcon from "assets/svg/evaluate-a-cn.svg";
import ProposalIcon from "assets/svg/full-proposal-evaluator.svg";
import RationaleIcon from "assets/svg/climate-rationale-advisor.svg";
import DraftConceptIcon from "assets/svg/draft-concept-note.svg";
import TheoryIcon from "assets/svg/toc.svg";
import ProjectIcon from "assets/svg/project-structuring.svg";

import videoSource1 from "assets/video/EvaluateaCN.mp4";
import videoSource2 from "assets/video/ClimateRationale.mp4";
import videoSource3 from "assets/video/TheoryofChangeToolExplainer.mp4";

const SolutionCardsSection = () => {
  return (
    <Wrapper>
      <Row gutter={[20, 20]}>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <SolutionCards
            solutionIcon={ConceptIcon}
            solutionTitle={"Evaluate a Concept Note"}
            SolutionDesc={
              "Quickly evaluate all sections of your Concept Notes against the criteria used by Funders such as the Green Climate Fund. Use the AI generated evaluation to improve your narratives."
            }
            showButton={true}
            videoSrc={videoSource1} // Pass the video source
          />
        </Col>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <SolutionCards
            solutionIcon={ProposalIcon}
            solutionTitle={"Full Proposal Evaluator"}
            showComingSoon
            SolutionDesc={
              "Evaluate all the narratives in your proposal against the criteria used by the most stringent funder in the world - the Green Climate Fund."
            }
          />
        </Col>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <SolutionCards
            solutionIcon={RationaleIcon}
            solutionTitle={"Climate Rationale Advisor"}
            SolutionDesc={
              "Many Concept Notes and Proposals get rejected because of 'weak' climate rationales. This tool will help you to clearly show that your project addresses real climate risks/impacts."
            }
            showButton={true}
            videoSrc={videoSource2} // Different video source
          />
        </Col>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <SolutionCards
            solutionIcon={DraftConceptIcon}
            solutionTitle={"Draft a Concept Note"}
            SolutionDesc={
              "This tool provides you a 1st draft of a full Concept Note using the core project information you provide. Will slash the time it takes you to produce a winning Concept Note."
            }
          />
        </Col>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <SolutionCards
            solutionIcon={TheoryIcon}
            solutionTitle={"Theory of Change"}
            SolutionDesc={
              "Utilize AI-powered tools to refine and validate the theory of change, ensuring a clear and logical pathway from project activities to desired outcomes."
            }
            showButton={true}
            videoSrc={videoSource3} // Different video source
          />
        </Col>
        <Col xl={8} lg={12} md={24} sm={24} xs={24}>
          <SolutionCards
            solutionIcon={ProjectIcon}
            solutionTitle={"Project Structuring"}
            SolutionDesc={
              "This tool will assist and advise you to draft a compelling project plan that you can use to socialize your ideas with potential stakeholders/partners."
            }
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SolutionCardsSection;

const Wrapper = styled.div``;
