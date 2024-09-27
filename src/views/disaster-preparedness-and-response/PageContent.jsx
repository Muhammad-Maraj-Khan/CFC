import React from "react";
import styled from "styled-components";
import DisasterBanner from "./section/DisasterBanner";
import Disaster from "./section/Disaster";
import DisasterCardSection from "./section/DisasterCardSection";

const PageContent = () => {
  return (
    <Wrapper>
      <DisasterBanner />
      <div className="Disaster-container">
        <Disaster />
        <DisasterCardSection />
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  .Disaster-container {
    background-color: #f7f7f7;
  }
`;
