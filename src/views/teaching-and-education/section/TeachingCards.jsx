import React from "react";
import styled from "styled-components";

const TeachingCard = ({ title, desc }) => {
  return (
    <Wrapper>
      <div className="enterprise-card-title">{title}</div>
      <div className="enterprise-card-text">{desc}</div>
    </Wrapper>
  );
};

export default TeachingCard;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 0px 17px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  height: 300px;
  &:hover {
    transform: translateY(-10px);
  }
  .enterprise-card-title {
    padding: 20px 0px 15px 0px;
    color: #000000;
    font-size: 24px;
    font-weight: 500;
    border-bottom: 1px solid #e6e6e6;
  }

  .enterprise-card-text {
    color: #000000b2;
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    padding-top: 15px;
    max-width: 550px;
  }

  @media (max-width: 500px) {
    height: 100%;
    padding: 17px 17px;
    .enterprise-card-title {
      font-size: 18px;
    }
    .enterprise-card-text {
      font-size: 16px;
      line-height: 23px;
    }
  }
`;
