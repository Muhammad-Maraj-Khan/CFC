import React from "react";
import styled from "styled-components";

const PageName = styled.h1`
  font-size: 72px;
  font-weight: 600;
  text-align: left;
  color: #000000;
  padding: 0 50px 30px 50px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 50px;
    padding: 0 25px 0 25px;
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
