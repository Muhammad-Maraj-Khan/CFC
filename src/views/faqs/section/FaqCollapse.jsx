import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";
import { ReactComponent as CloseIcon } from "assets/svg/close.svg";
import { ReactComponent as PlusIcon } from "assets/svg/plus.svg";
import { Link } from "react-router-dom"; // Import Link for routing

const { Panel } = Collapse;

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

const CustomCollapse = () => {
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
    <StyledCollapse expandIconPosition="left" expandIcon={customExpandIcon}>
      <Panel
        header="How do you ensure the privacy and security of user data?"
        key="1"
      >
        <p>
          User privacy and security are our top priorities. We employ stringent
          protocols, including encryption of data both in transit and at-rest,
          and store all user information on secure servers. Access to this data
          is strictly limited to authorized personnel.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="Where can I learn more about pricing for the services?"
        key="2"
      >
        <p>
          You can learn more about our pricing structure by visiting our{" "}
          <Link to="/pricing-logic">
            <span className="price" onClick={scrollToTop}>
              Pricing Logic
            </span>
          </Link>{" "}
          page.
        </p>
      </Panel>
      <Panel
        className="margin-panel"
        header="How does Janus know country-specific information?"
        key="3"
      >
        <p>
          Janus uses multiple data sources, starting with the project details,
          country, and sector, all of which the user will provide. For climate
          science, it pulls from our rigorously vetted database of climate
          science articles, ensuring accuracy and avoiding model hallucinations
          (i.e., inaccurate sources and links).
        </p>
      </Panel>
    </StyledCollapse>
  );
};

export default CustomCollapse;
