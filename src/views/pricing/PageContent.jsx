import React from "react";
import styled from "styled-components";
import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import TitleComponent from "../../components/title-component/TitleComponent";
import { LeftOutlined } from "@ant-design/icons";
import PricingCardSection from "./section/PricingCardSection";
import PricingTailored from "./section/PricingTailored";
import OurDesign from "./section/OurDesign";
import GetStarted from "./section/GetStarted";

const PageContent = () => {
  const breadcrumbItems = [
    { label: "Go back", path: "/home", icon: LeftOutlined },
    { label: "Home", path: "/home" },
    { label: "Pricing" },
  ];
  return (
    <Wrapper>
      {/* <CustomBreadcrumb items={breadcrumbItems} /> */}
      <TitleComponent pageName="Pricing Logic" />
      <PricingTailored />
      <PricingCardSection />
      <OurDesign />
      <GetStarted />
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  padding-top: 50px;
  @media (max-width: 1024px) {
    padding-top: 25px; /* Set padding to 25px for mobile and tablet devices */
  }
`;
