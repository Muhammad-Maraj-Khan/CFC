import React from "react";
import styled from "styled-components";

const BoxSolutionCards = ({ cards }) => {
  return (
    <Wrapper>
      {cards.map((card, index) => (
        <div className="box-card-section" key={index}>
          <div>
            <img src={card.image} alt={`Card ${index}`} />
          </div>
          <div className="title">{card.title}</div>
          <div className="desc">{card.description}</div>
        </div>
      ))}
    </Wrapper>
  );
};

export default BoxSolutionCards;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
  height: 259px;
  .box-card-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .title {
    color: #000000;
    font-size: 18px;
    font-weight: 400;
  }
  .desc {
    color: #2e2e2e;
    font-size: 16px;
    font-weight: 400;
  }
`;
