import React from "react";
import styled from "styled-components";

const PageName = styled.h1`
  font-size: 57px;
  font-weight: 600;
  color: #000000;
  padding: 0px 0px 0px 50px;
  margin-bottom: 0;
  width: 70%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    padding: 0px 0px 0px 25px;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    padding: 0px 0px 0px 25px;
    width: 100%;
  }
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DynamicPageName = ({ pageName, className }) => {
  return (
    <PageName pageName={pageName} className={className}>
      {pageName}
    </PageName>
  );
};

export default DynamicPageName;
