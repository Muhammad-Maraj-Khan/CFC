import React from "react";
import styled from "styled-components";
import { Row as AntRow, Col } from "antd";
import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import TitleComponentWithText from "../../components/title-component/TitleComponentWithText";
import FormComponent from "../../components/form/FormComponent";
import { LeftOutlined } from "@ant-design/icons";

const PageContent = () => {
  const breadcrumbItems = [
    { label: "Go back", path: "/home", icon: LeftOutlined },
    { label: "Climate Finance Copilot", path: "/climate-finance" },
    { label: "Request a Demo" },
  ];

  return (
    <Wrapper>
      {/* <CustomBreadcrumb items={breadcrumbItems} /> */}
      <div className="request-container">
        <StyledRow gutter={[0, 10]}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <TitleComponentWithText
              pageName="Request a Demo"
              className={"request-header"}
            />
            <div className="text-section">
              <p className="title-description">
                See for yourself how our solutions can help you accelerate
                resilience and sustainable growth.
              </p>
            </div>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className="form-section">
            <FormComponent
              formTitle="Request a Demo"
              showSolution={true}
              buttonText="Request Demo"
            />
          </Col>
        </StyledRow>
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  padding-top: 50px;
  @media (max-width: 1024px) {
    padding-top: 25px; /* Set padding to 25px for mobile and tablet devices */
  }
  .request-container {
    padding: 0px 50px;
  }
  .request-header {
    max-width: 450px;
    width: 100%;
    padding: 0px;
    margin-left: -3px;
    max-width: 400px;
  }
  .title-description {
    text-align: left;
    color: #2e2e2e;
    padding: 0;
    font-size: 20px;
    width: 100%;
    margin-top: 9px;
    align-items: center !important;
    max-width: 360px;
  }
  @media (max-width: 992px) {
    .request-header {
      max-width: 100%;
      padding-left: 0px;
      margin-left: 0px;
    }
    .title-description {
      text-align: center;
      /* max-width: 500px; */
    }
    .text-section {
      display: flex;
      justify-content: center;
    }
    .form-section {
      margin-top: 30px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center !important;
    text-align: center;
    .request-container {
      padding: 0 25px;
    }
    .title-description {
      font-size: 18px;
    }
  }
  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center !important;
    width: 100%;
  }
`;

const StyledRow = styled(AntRow)`
  padding-bottom: 50px;
`;
