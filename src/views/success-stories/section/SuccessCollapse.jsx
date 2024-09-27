import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";
import { ReactComponent as CloseIcon } from "assets/svg/bg-white-cross.svg";
import { ReactComponent as PlusIcon } from "assets/svg/bg-whte-plus.svg";
import { Link } from "react-router-dom"; // Import Link for routing

const { Panel } = Collapse;

const SuccessCollapse = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const customExpandIcon = ({ isActive }) =>
    isActive ? (
      <CloseIcon className="faq-icon" />
    ) : (
      <PlusIcon className="faq-icon" />
    );

  return (
    <StyledCollapse
      expandIconPosition="left"
      expandIcon={customExpandIcon}
      defaultActiveKey={"1"}
    >
      <Panel header="Success Story #1: South African Development Bank" key="1">
        <div>
          <div className="success-collapse-desc">
            <strong> Challenge: </strong>
            Assist in refining a concept note for a low-emission transport
            system with an estimated mitigation impact of 2.5 MtCO2e per year.
            The project goal was to establish a green, efficient, and
            sustainable urban transport solution that aligns with climate goals
            and fosters urban resilience. The amount requested was USD 40
            million in the form of a grant. The concept note was in its final
            stage, and Janus was asked to leverage its software to identify ways
            to improve the note.
          </div>
          <div className="success-collapse-desc">
            <strong> Action: </strong>
            The Janus team used its Climate Finance Copilot to review the entire
            note and identified several areas for improvement, particularly in
            the theory of change. The grant writing team incorporated these
            adjustments before submitting the note. Regarding the Climate
            Finance Copilot, below is the team’s feedback:
          </div>
          {/* <div className="success-collapse-quote">
            “The tools allows for quick assessment especially in cases where
            there are glaring errors or omissions. It would be wise to have such
            a tools in the initial assessment of concepts and maybe in the final
            stage as well.”
          </div> */}
          <div>
            <ul>
              <li className="success-collapse-desc">
                The narratives in the AI-evaluated document are more precise and
                clearer than in the original concept note. The tool outlines
                missing information, section by section, helping the team
                incorporate the necessary details into the relevant sections.
              </li>
              <li className="success-collapse-desc">
                The tool also highlights relevant information already included
                in the concept note, providing assurance that the included
                information is pertinent. The assessment summary further
                outlines any additional areas needing attention.
              </li>
              <li className="success-collapse-desc">
                The evaluation of the Theory of Change is very detailed and
                informative. The tools allow for a quick assessment, especially
                in cases of glaring errors or omissions. It would be wise to
                utilize such tools in the initial assessment of concepts and
                perhaps in the final stage as well. This could serve as both a
                preliminary sieving process and a final quality check.
              </li>
              <li className="success-collapse-desc">
                <strong>Final Assessment: </strong>
                Such a tool would be useful to project developers — e.g., civil
                society organizations, NGOs, and private players — and other
                climate finance applicants, especially those with limited GCF
                application experience. Overall, the tool can be very
                beneficial, especially when dealing with large volumes of
                concept note submissions.
              </li>
            </ul>
          </div>
          <div className="success-collapse-quote">
            “The tools allows for quick assessment especially in cases where
            there are glaring errors or omissions. It would be wise to have such
            a tools in the initial assessment of concepts and maybe in the final
            stage as well.”
          </div>
        </div>
      </Panel>
      <Panel
        header="Success Story #2: Pakistan Climate Finance Consultancy"
        key="2"
      >
        <div>
          <div className="success-collapse-desc">
            <strong>About the Consultant: </strong>
            With over three years of experience in climate finance and disaster
            risk management, the grant writer holds a degree in Environmental
            Science and has provided technical support for Environmental Impact
            Assessments. He has collaborated with international organizations,
            including UNHCR, GIZ, UN Women, UNDP, CBM, and ADB as a consultant.
          </div>
          <div className="success-collapse-desc">
            <strong> Challenge: </strong>
            The organization experienced excessive timelines in drafting and
            evaluating concept notes prior to submission to the Green Climate
            Fund (GCF), leading to staff burnout and frustration with the team's
            ability to produce and particularly evaluate these notes against the
            GCF's stringent requirements.
          </div>
          <div className="success-collapse-desc">
            <strong> Action: </strong>
            The consultancy was provided with a five-day access to the software
            suite to assess its efficacy for concept note evaluation use cases.
            Below is the consultant's response to the post-pilot survey
            questions:
          </div>
          <div>
            <ul>
              <li className="success-collapse-desc">
                <strong>
                  What is the main value of the Climate Finance Co-pilot for
                  grant writers?{" "}
                </strong>
                The primary role of a grant writer is to craft compelling
                proposals that align with donor criteria and demonstrate the
                activity's value relative to the funder's investment guidelines.
                The tool's primary benefit is its ability to quickly and
                accurately assess concept notes based on the funder's scoring
                guidelines.
              </li>
              <li className="success-collapse-desc">
                <strong>
                  How does the application enhance efficiency for grant writing
                  teams? 
                </strong>
                A five-member team might take months to draft a concept note for
                a major donor like the GCF, ensuring it aligns with their
                guidelines. However, with this application, the same task can be
                completed in mere days. The application offers real-time
                guidance, automated compliance checks, and ensures the concept
                note meets the donor's criteria. For grant writers, the
                application streamlines the traditionally time-consuming
                compliance review by senior management. It shortens the review
                stage, automatically aligns with the set criteria, and corrects
                possible human errors, guaranteeing prompt and accurate concept
                note evaluations.
              </li>
              <li className="success-collapse-desc">
                <strong>
                  What is the estimated time saved with this tool? 
                </strong>
                The application streamlines grant processes, maximizing
                efficiency in obtaining funds and minimizing administrative
                tasks. While the exact time saved varies based on the project
                and the team's expertise, it often equates to weeks of conserved
                effort. This free time can be channeled into refining proposal
                narratives and aligning with the donor's objectives, especially
                if using the other tools in the Climate Finance Co-pilot
                toolkit.
              </li>
              <li className="success-collapse-desc">
                <strong>
                  How does the Concept Note Evaluator enhance document quality? 
                </strong>
                The Concept Note Evaluator is built upon the GCF's criteria,
                ensuring the creation of a note that meets these standards
                comprehensively. It helps the grant writer to focus on providing
                what is necessary, excluding superfluous details, and ensuring
                that the grant writer addresses all required indicators and
                criteria. This evaluator checks alignment with grant goals,
                clarity, feasibility, and potential impact, ensuring the
                proposal is actionable and devoid of mere assumptions.
              </li>
              <li className="success-collapse-desc">
                <strong>
                  What makes the "Project Structuring" tool invaluable for
                  project proponents? 
                </strong>
                The Project Structuring tool refines the planning phase by
                aligning objectives and tasks with project criteria. It offers a
                systematic method for resource management, curbing wastage, and
                heightening efficiency. Adaptability is another strength; it can
                manage proposals of various scales from project inception. It
                plays a pivotal role in risk reduction, regulatory compliance,
                and overall project success, acting as a blueprint for realizing
                project visions.
              </li>
            </ul>
          </div>
          <div className="success-collapse-quote">
            “A five-member team might take months to draft a concept note for a
            major donor like the GCF, ensuring it aligns with their guidelines.
            However, with this application, the same task can be completed in
            mere days.”
          </div>
        </div>
      </Panel>

      <Panel header="Success Story #3: Regional Bank" key="3">
        <div>
          <div className="success-collapse-desc">
            <strong> Challenge: </strong>
            Assist in refining a concept note for a multi-faceted program aiming
            to achieve a mitigation impact of at least 5 tCO2eq and an
            adaptation impact for over 2 million people (100% of the
            population). The objective of the program was to provide increased
            access to climate finance, supporting mitigation and adaptation
            actions to address climate change over an initial period of 7 years.
            The indicative finance requested was in excess of USD 250 million.
          </div>
          <div className="success-collapse-desc">
            <strong> Action: </strong>
            As the program involved several sectors rather than a single one,
            the Janus team offered to process the concept note through their
            tool suite to ensure a comprehensive evaluation. The Janus team took
            less than 2 hours to review the entire note and identified areas
            that could be strengthened. The evaluation was accomplished using
            two models, with a final review to identify and resolve
            discrepancies conducted by Mr. Barrett. The swift and precise
            assessment was crucial as the client team was under a tight deadline
            to amend the note.
          </div>
          <div className="success-collapse-desc">
            Janus also utilized computer vision technology (a new enhancement to
            the suite) to review the theory of change illustration. The software
            identified areas where the illustration could be simplified to
            provide reviewers with a clearer understanding of the
            interconnectivity of project components.
          </div>
          <div className="success-collapse-desc">
            Regarding the Climate Finance Copilot, below are the client team’s
            scores (on a scale of 1-5) from the survey administered
            post-evaluation:
          </div>
          <div>
            <ul>
              <li className="success-collapse-desc">
                The report generated by Climate Finance Copilot helped to
                sharpen/strengthen the concept note: <strong>4.5</strong>
              </li>
              <li className="success-collapse-desc">
                How accurate, complete, and compliant with GCF guidelines are
                the reports generated by the software? <strong>4</strong>
              </li>
              <li className="success-collapse-desc">
                How well does the software help you demonstrate that your
                concept note narratives meet GCF investment criteria?{" "}
                <strong>5</strong>
              </li>
              <li className="success-collapse-desc">
                How much time (as a percentage) do you estimate you can save on
                GCF grant writing tasks by using this software compared to
                traditional methods?
                <strong>30%</strong>
              </li>
              <li className="success-collapse-desc">
                Do you believe using the Climate Finance Copilot will improve
                your organization’s success in accessing climate finance?
                (Yes/No/Unsure) Yes
                <strong>Yes</strong>
              </li>
              <li className="success-collapse-desc">
                Once funded, to what extent can Climate Finance Copilot benefit
                the programme’s subprojects as they develop concept notes and
                proposals? <strong>5</strong>
              </li>
              <li className="success-collapse-desc">
                How satisfied were you with the customer support provided by the
                Janus team? <strong>5</strong>
              </li>
            </ul>
          </div>
          <div className="success-collapse-desc">
            Note: The client described the software as "impactful, serving as an
            essential pre-reviewer before concept notes are submitted to the
            Green Climate Fund (GCF)." The client suggested that the tool be
            more prescriptive in its assessment, rather than overly focused on
            "red flagging" omissions and under-addressed criteria. This feedback
            has been taken into consideration and will be incorporated in the
            next version of the suite, scheduled for release in late September.
          </div>
          <div className="success-collapse-quote">
            “Adaptability is another strength; it can manage proposals of
            various scales from project inception. It plays a pivotal role in
            risk reduction, regulatory compliance, and overall project success,
            acting as a blueprint for realizing project visions.”
          </div>
        </div>
      </Panel>
    </StyledCollapse>
  );
};

export default SuccessCollapse;

const StyledCollapse = styled(Collapse)`
  .margin-panel {
    padding-top: 20px;
  }

  .ant-collapse-header {
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #000000;
    border: none !important;
    line-height: 32px;
  }

  .ant-collapse-content {
    font-weight: 400;
    font-size: 20px;
    background-color: #f7f7f7 !important;
    border: none !important;
    line-height: 32px;
  }

  .ant-collapse-item {
    border: none !important;
  }

  .faq-icon {
    color: #00b840;
    display: inline-block;
    text-align: center;
    height: 35px;
    width: 35px;
    /* margin-top: 6px; */
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding-left: 55px;
    padding-right: 45px;
    background-color: #f7f7f7 !important;
    padding-top: 0px;
  }

  p {
    margin-bottom: 0px !important;
    color: #2e2e2e;
  }
  .price {
    color: #00b840;
    cursor: pointer;
  }

  .success-collapse-desc {
    color: #2e2e2e;
    font-size: 20px;
    line-height: 27px;
    margin-top: 25px;
  }
  .success-collapse-quote {
    color: #2e2e2e;
    font-size: 20px;
    line-height: 27px;
    margin-top: 25px;
    font-style: italic;
  }
  @media (max-width: 768px) {
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 0px 0px;
    }
    .ant-collapse-header {
      font-size: 14px;
    }
    .ant-collapse-content {
      font-size: 14px;
      line-height: 24px;
    }
    .success-collapse-desc {
      font-size: 18px;
      line-height: 35px;
    }
    .success-collapse-quote {
      font-size: 20px;
      line-height: 35px;
    }
  }
  @media (max-width: 992px) {
    .ant-collapse-content > .ant-collapse-content-box {
      padding-right: 0px;
      padding-left: 42px;
    }
  }
`;
