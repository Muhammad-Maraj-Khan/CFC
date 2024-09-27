import React from "react";
import styled from "styled-components";

const StaticPageName = () => {
  return (
    <Wrapper>
      <h1>Efficiency, Productivity and Precision</h1>
    </Wrapper>
  );
};

export default StaticPageName;

const Wrapper = styled.div`
  padding: 80px 50px 50px 50px;
  @media (max-width: 768px) {
    padding: 80px 25px 50px 25px;
  }

  h1 {
    font-size: 47px;
    font-weight: 600;
    text-align: left;
    color: #000000;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 30px !important;
    }
  }
`;
