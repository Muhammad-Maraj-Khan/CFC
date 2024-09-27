import React from "react";
import styled from "styled-components";
import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import TitleComponent from "../../components/title-component/TitleComponent";
import { LeftOutlined } from "@ant-design/icons";
import OurStory from "./section/OurStory";
import Efficiency from "./section/Efficiency";
import AboutUsCard from "./section/AboutUsCard";

const PageContent = () => {
  const breadcrumbItems = [
    { label: "Go back", path: "/home", icon: LeftOutlined },
    { label: "Home", path: "/home" },
    { label: "About Us" }, 
  ];
  return (
    <Wrapper>
      {/* <CustomBreadcrumb items={breadcrumbItems} /> */}
      <TitleComponent pageName="About Us" />
      <OurStory />
      <Efficiency />
      <AboutUsCard />

    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
padding-top: 50px;
@media (max-width: 1024px) {
    padding-top: 25px; /* Set padding to 25px for mobile and tablet devices */
  }`;
