import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";
import { ReactComponent as CloseIcon } from "assets/svg/close.svg";
import { ReactComponent as PlusIcon } from "assets/svg/plus.svg";

const { Panel } = Collapse;

const PricingFaqCollapse = () => {
  const customExpandIcon = ({ isActive }) =>
    isActive ? (
      <CloseIcon className="faq-icon" />
    ) : (
      <PlusIcon className="faq-icon" />
    );

  return (
    <StyledCollapse expandIconPosition="left" expandIcon={customExpandIcon}>
      <Panel header="How can this tool benefit me right away?" key="1">
        <p>
          For teams crafting funding applications for the Green Climate Fund or
          other donors, this AI enabled web application significantly boosts
          their efficiency and productivity. The tool is best used as a first
          draft and internal review mechanism to ensure better proposal
          research, organization, precision, and quality.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="How does it save time and make me more efficient?"
        key="2"
      >
        <p>
          The application includes several advisor-tools specializing in
          evaluations, drafting, and research. It automates labor-intensive
          tasks such as evaluating Concept Notes and proposals with greater
          accuracy than humanly possible, ensuring close adherence to funders'
          investment criteria.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="How do you ensure the privacy and security of user data?"
        key="3"
      >
        <p>
          User privacy and security are our top priorities. We employ stringent
          protocols, including encryption of data both in transit and at-rest,
          and store all user information on secure servers. Also, by offering
          clients their own separate cloud based or on premises “back end” data
          protection and residency requirements can be satisfied.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="How Does the software know how to evaluate the Concept Notes and Proposals?"
        key="4"
      >
        <p>
          To inform Climate Finance Co-pilot’s processes, we primarily utilize
          the donor’s publicly available materials on how it evaluates funding
          applications.
        </p>
        <p className="para2">
          Most specifically, the software is “trained” on these materials and
          enabling entities to self-appraise concept notes and funding proposals
          against donors’ investment criteria more objectively.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="Who reviewed its automated evaluation processes to ensure validity and usefulness?"
        key="5"
      >
        <p>
          During its development, Climate Finance Co-pilot was assessed by
          various grant writers and improved based on their feedback. We also
          conducted several structured trials with GCF accredited entities.
          (Testimonials are available on our website for your review.)
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="Many language models are available publicly. Why should I pay to use Climate Finance Co-pilot?"
        key="6"
      >
        <p>
          Unlike generalist language models such as Chat GPT, Climate Finance
          Co-pilot is a domain-specific tool trained on climate finance
          processes. It generates and structures narratives to align with GCF
          standards and includes safeguards against generating false outcomes.
          This specialized focus and accuracy justify its use over free,
          generalist models.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="What kind of organization is this tool suited for?
"
        key="7"
      >
        <p>
          The Climate Finance toolkit was designed for climate finance
          operations looking to boost their internal productivity by 3x – 5x.
          This includes Accredited Entities, Nationally Designated Authorities,
          Project Proponents, etc. The software helps these organizations
          accelerate the production and review of funding packages and boost
          their overall quality prior to submission.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="For what phase of the project cycle is the tool best suited?"
        key="8"
      >
        <p>
          Climate Finance Co-pilot is valuable for all phases of the project
          cycle, especially for project research, Concept Note development, and
          compliance review. Whether starting with core information for a
          project idea or evaluating a full proposal, it ensures alignment with
          funders' requirements.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="How does the software know country-specific information?"
        key="9"
      >
        <p>
          Climate Finance Co-pilot uses multiple data sources, starting with the
          project details, country, and sector, all of which the user will
          provide. For climate science, it pulls from our rigorously vetted
          database of climate science articles, ensuring accuracy and avoiding
          model hallucinations. (i.e. inaccurate sources and links).
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="Who developed Climate Finance Co-pilot?"
        key="10"
      >
        <p>
          Oliver Barrett, a former climate analyst for the Center for Climate
          and Security (D.C.) and software program manager for the US
          government, developed Climate Finance Co-pilot. The project is
          financially backed by a group of Caribbean investors committed to
          climate justice.
        </p>
      </Panel>
    </StyledCollapse>
  );
};

export default PricingFaqCollapse;

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
    background-color: #fff !important;
    border: none !important;
    line-height: 32px;
  }

  .ant-collapse-item {
    border: none !important;
  }

  .faq-icon {
    color: #00b840;
    margin-right: 8px;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding-left: 60px;
    padding-right: 45px;
  }

  p {
    margin-bottom: 0px !important;
    color: #2e2e2e;
  }
  .price {
    color: #00b840;
    cursor: pointer;
  }
  .para2 {
    margin-top: 10px;
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
  }
  @media (max-width: 992px) {
    .ant-collapse-content > .ant-collapse-content-box {
      padding-right: 0px;
      padding-left: 42px;
    }
  }
`;
