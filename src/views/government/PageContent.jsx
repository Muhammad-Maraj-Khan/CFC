import React from "react";
import styled from "styled-components";
import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import TitleComponent from "../../components/title-component/TitleComponent";
import { LeftOutlined } from "@ant-design/icons";
import GetStarted from "./section/GetStarted";
import BoxSolution from "./section/BoxSolution";
import BoxSolutionCardSection from "./section/BoxSolutionCardSection";
import ModelSection from "./section/ModelSection";

const PageContent = () => {
  const breadcrumbItems = [
    { label: "Go back", path: "/home", icon: LeftOutlined },
    { label: "Home", path: "/home" },
    { label: "Custom Solutions" },
  ];
  return (
    <Wrapper>
      {/* <CustomBreadcrumb items={breadcrumbItems} /> */}
      <TitleComponent pageName="Custom Solutions" />
      <BoxSolution />
      <BoxSolutionCardSection />
      <ModelSection />
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
