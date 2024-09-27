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
    { label: "Home", path: "/home" },
    { label: "Contact Us" },
  ];

  return (
    <Wrapper>
      {/* <CustomBreadcrumb items={breadcrumbItems} /> */}
      <div className="request-container">
        <StyledRow gutter={[0, 10]}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <TitleComponentWithText
              pageName="Contact Us"
              className={"contact-header"}
            />
            <div className="text-section">
              <p className="title-description">
                We are here to help answer any questions you might have.
              </p>
            </div>
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className="form-section">
            <FormComponent
              buttonText="Submit"
              formTitle="Contact Us"
              showSolution={false}
            />
          </Col>
        </StyledRow>
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  padding-top: 70px;
  @media (max-width: 1024px) {
    padding-top: 25px;
  }
  .request-container {
    padding: 0px 50px;
  }
  .contact-header {
    max-width: 450px;
    width: 100%;
    padding: 0px;
    margin-left: -2px;
  }
  .title-description {
    text-align: left;
    color: #2e2e2e;
    padding: 0;
    font-size: 20px;
    width: 100%;
    margin-top: 9px;
    align-items: center !important;
    max-width: 350px;
  }

  @media (max-width: 992px) {
    .contact-header {
      max-width: 100%;
      padding-left: 0px;
      margin-left: 0px;
    }
    .title-description {
      text-align: center;
      max-width: 400px;
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
    .request-container {
      padding: 0 25px;
    }
    width: 100%;
    align-items: center !important;
    text-align: center;
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
