import React from "react";
import styled from "styled-components";
import ProcurementBanner from "./section/ProcurementBanner";
import Procurement from "./section/Procurement";
import ProcurementCardSection from "./section/ProcurementCardSection";
import ProcurementImages from "./section/ProcurementImages";

const PageContent = () => {
  return (
    <Wrapper>
      <ProcurementBanner />
      <div className="Procurement-container">
        <Procurement />
        <ProcurementCardSection />
        <ProcurementImages />
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  .Procurement-container {
    background-color: #f7f7f7;
  }
`;
