import React from "react";
import styled from "styled-components";
import ClimateFunding from "./section/ClimateFunding";
import FirstKind from "./section/FirstKind";
import ClimateCardsSection from "./section/ClimateCardsSection";
import SolutionForAll from "./section/SolutionForAll";
import Pricing from "./section/Pricing";
import FinanceCopilot from "./section/FinanceCopilot";
import { LeftOutlined } from "@ant-design/icons";
import CustomBreadcrumb from "components/breadcrumb/Breadcrumb";
import PricingFaq from "./section/PricingFaq";
import Success from "./section/Success";
import NewClimatePlayGround from "./section/NewClimatePlayGround";
import CLimateFinanceTestimonial from "./section/ClimateFinanceTestimonial";

const CLimateFinance = () => {
  const breadcrumbItems = [
    { label: "Go back", path: "/home", icon: LeftOutlined },
    { label: "Home", path: "/home" },
    { label: "Climate Finance" },
  ];
  return (
    <Wrapper>
      {/* <CustomBreadcrumb
        items={breadcrumbItems}
        className="climate-breadcrumb"
      /> */}
      <ClimateFunding />
      <div className="climate-content-section">
        <FirstKind />
        <ClimateCardsSection />
        <SolutionForAll />
        <NewClimatePlayGround />
        {/* <Pricing /> */}
        {/* <Success /> */}
        <div className="bg-climate-white">
        <PricingFaq />
        {/* <FinanceCopilot /> */}
        <CLimateFinanceTestimonial/>
        </div>
      </div>
    </Wrapper>
  );
};

export default CLimateFinance;

const Wrapper = styled.div`
  .climate-content-section {
    background-color: #f7f7f7;
  }
  .climate-breadcrumb {
    background-color: #d9ffe6;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 80px;
  }
    .bg-climate-white{
    background-color: #fff;
    }
`;
