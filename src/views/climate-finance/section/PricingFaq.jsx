import React from "react";
import styled from "styled-components";
import { Row as AntRow, Col } from "components/common";
import TitleComponentWithText from "../../../components/title-component/TitleComponentWithText";
import PricingFaqCollapse from "./PricingFaqCollpase";

const PricingFaq = () => {
  return (
    <Wrapper>
      <div className="request-container">
        <StyledRow gutter={[0, 10]}>
          <Col xl={12} lg={12} md={24} sm={24} xs={24}>
            <TitleComponentWithText
              pageName="FAQs"
              className={"request-header"}
            />
          </Col>
          <Col xl={12} lg={12} md={24} sm={24} xs={24} className="form-section">
            <PricingFaqCollapse />
          </Col>
        </StyledRow>
      </div>
    </Wrapper>
  );
};

export default PricingFaq;

const Wrapper = styled.div`
  padding-top: 50px;
  margin-bottom: 50px;
  background-color: #fff;
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
    @media (min-width: 768px) {
    font-size: 60px;
  }
  }
  .ant-collapse {
    border: none !important;
    background-color: #fff;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    background-color: #fff !important;
    padding: 16px 0px 12px 16px !important;
    font-size: 22px;
    border: none !important;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    /* padding: 0px 190px 0px 60px; */
  }
  @media (max-width: 992px) {
    .request-header {
      max-width: 100%;
      padding-left: 0px;
    }
    .form-section {
      margin-top: 30px;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      padding: 16px 0px 12px 0px !important;
    }
  }
  @media (max-width: 768px) {
    .request-container {
      padding: 0 25px;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      padding: 12px 0px !important;
      font-size: 18px;
    }
    /* .ant-collapse-content > .ant-collapse-content-box {
      padding: 0px 60px;
    } */
  }
`;
const StyledRow = styled(AntRow)`
  padding-bottom: 50px;
`;
