import React from "react";
import styled from "styled-components";

const PricingCards = ({ cards }) => {
  return (
    <Wrapper>
      {cards.map((card, index) => (
        <div className="pricing-card-section" key={index}>
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

export default PricingCards;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;
  .pricing-card-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 260px;
  }
  .title {
    color: #000000;
    font-size: 20px;
    font-weight: 400;
  }
  .desc {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
  }
  @media (max-width: 1300px) {
    .pricing-card-section {
      height: 330px;
    }
  }
  @media (max-width: 992px) {
    .pricing-card-section {
      height: 100%;
    }
  }
`;
