import React from "react";
import styled from "styled-components";
import TeachingBanner from "./section/TeachingBanner";
import Empowering from "./section/Empowering";
import TeachingCardSection from "./section/TeachingCardSection";
import TeachingImages from "./section/TeachingImages";

const PageContent = () => {
  return (
    <Wrapper>
      <TeachingBanner />
      <div className="teaching-container">
        <Empowering />
        <TeachingCardSection />
        <TeachingImages />
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  .teaching-container {
    background-color: #f7f7f7;
  }
`;
