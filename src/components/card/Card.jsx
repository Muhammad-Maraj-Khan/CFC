import React from "react";
import styled from "styled-components";

const Cards = ({ cardIcon, cardTitle, description }) => {
  return (
    <Wrapper>
      <div className="card-img-section">
        <img src={cardIcon} />
      </div>
      <div className="card-header-section">{cardTitle}</div>
      <div className="card-text">{description}</div>
    </Wrapper>
  );
};

export default Cards;

const Wrapper = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    
  /* max-width: 330px; */
  min-height: 400px;
  border-radius: 5px;
  padding: 0px 30px;
  transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
    }
  .card-img-section {
    height: 120px;
    display: flex;
    align-items: end;
  }
  .card-header-section {
    margin-top: 15px;
    color: #1c1c1c;
    font-size: 25px;
    font-weight: 400;
  }
  .card-text {
    margin-top: 5px;
    color: #2e2e2e;
    font-size: 16px;
    text-align: center;
    line-height: 25px;
  }
`;
