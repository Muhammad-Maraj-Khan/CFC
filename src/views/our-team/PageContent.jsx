import React from "react";
import styled from "styled-components";
import CustomBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import TitleComponent from "../../components/title-component/TitleComponent";
import { LeftOutlined } from "@ant-design/icons";
import MeetJanus from "./section/MeetJanus";
import MemberCard from "./section/MemberCard";
import GetStarted from "./section/GetStarted";

const PageContent = () => {
  const breadcrumbItems = [
    { label: "Go back", path: "/home", icon: LeftOutlined },
    { label: "Home", path: "/home" },
    { label: "Our Team" }, // No path means it's the current page
  ];
  return (
    <Wrapper>
      {/* <CustomBreadcrumb items={breadcrumbItems} /> */}
      <TitleComponent pageName="Our Team" />
      <div className="team-content">
      <MeetJanus/>
      <MemberCard/>
      </div>
      <GetStarted/>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
padding-top: 50px;
@media (max-width: 1024px) {
    padding-top: 25px; /* Set padding to 25px for mobile and tablet devices */
  }
.team-content{
    background-color: #F7F7F7;
}
`;
