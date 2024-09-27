import React from "react";
import styled from "styled-components";
import TitleComponent from "../../components/title-component/TitleComponent";
import SuccessCollapse from "./section/SuccessCollapse";

const PageContent = () => {
  return (
    <Wrapper>
      <TitleComponent
        pageName="Success Stories"
        className={"success-story-title"}
      />
      <div className="success-desc">
        This summer, the Janus team demonstrated the immense value of our 
        AI-enabled tools tailored for climate finance operations. Here are a few
        of our real-world successes:
      </div>
      <div className="success-container">
        {/* <div className="success-desc">
          This summer, the Janus team demonstrated the immense value of our 
          AI-enabled tools tailored for climate finance operations. Here are a
          few of our real-world successes:
        </div> */}
        <div className="success-ques-section">
          <SuccessCollapse />
        </div>
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  padding-top: 50px;
  .success-story-title {
    margin-bottom: 0px;
    padding-bottom: 20px;
  }
  .success-container {
    background-color: #fff;
    /* padding: 0px 25px 40px 25px; */
    margin: 0px 50px;
  }
  .success-desc {
    padding-left: 50px;
    padding-bottom: 50px;
    color: #2e2e2e;
    font-size: 20px;
    line-height: 27px;
    max-width: 800px;
  }
  /* .success-ques-section {
    margin-top: 0px;
  } */
  .ant-collapse {
    border: none !important;
    background-color: #fff;
  }
  .ant-collapse-item {
    padding: 30px 25px;
    background-color: #f7f7f7;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 0px !important;
    font-size: 24px;
    border: none !important;
  }
  @media (max-width: 768px) {
    .success-container {
      padding: 0px 30px 50px 30px;
      margin: 0px;
    }
    .success-desc {
      text-align: center;
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 40px;
      max-width: 100%;
      font-size: 18px;
      line-height: 35px;
    }
    .ant-collapse-item {
      padding: 30px 15px;
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      font-size: 24px;
      line-height: 40px;
    }
  }
`;
