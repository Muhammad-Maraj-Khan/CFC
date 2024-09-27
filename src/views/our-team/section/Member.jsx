import React from "react";
import styled from "styled-components";
import linkedin_green from "assets/svg/linkedin_green.svg";

const Members = ({ cardImg, cardTitle, title, description }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={cardImg} alt="Card Img" />
      </ImageWrapper>
      <ContentWrapper>
        <div className="card-header-section">{cardTitle}</div>
        <div className="card-text">{title}</div>
        <div className="card-text">{description}</div>
        {/* <div className="icons">
          <img src={linkedin_green}/>
        </div> */}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Members;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  height: 840px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  margin-bottom: 20px;
  padding-bottom: 60px;
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 720px;
  }
  @media (max-width: 768px) {
    height: 740px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  /* overflow: hidden; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Media query for tablet devices */
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 560px;
  }
  @media (max-width: 768px) {
    height: 560px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px 20px 0px 20px;
  flex-grow: 1; /* Allow content to grow and fill the available space */
  box-sizing: border-box; /* Include padding in the element's total width and height */
  justify-content: flex-start;

  .card-header-section {
    color: #1c1c1c;
    font-size: 25px;
    font-weight: 600;
  }
  .card-text {
    margin-top: 5px;
    color: #2e2e2e;
    font-size: 16px;
    text-align: left;
    line-height: 25px;
  }
  .icons {
    /* Add additional styles for icons here */
    margin-top: 30px;
  }
`;
