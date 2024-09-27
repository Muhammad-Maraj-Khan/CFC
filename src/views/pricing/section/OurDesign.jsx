import React from 'react';
import styled from 'styled-components';
import OurDesignImg from "assets/images/our-design.png"; 
import OurDesignMobImg from "assets/images/our-design-mob.png"; 

const OurDesign = () => {
    return (
        <Wrapper>
            <h1>Our Design and Development Process</h1>
            <picture className='img-section'>
                <source media="(max-width: 768px)" srcSet={OurDesignMobImg} />
                <source media="(min-width: 769px)" srcSet={OurDesignImg} />
                <img className='our-design-img' src={OurDesignImg} alt="Our Design" />
            </picture>
        </Wrapper>
    );
};

export default OurDesign;

const Wrapper = styled.div`
  padding: 80px 80px 50px 80px;
  @media (max-width: 768px) {
      padding: 80px 20px 50px 20px;
  }
  .img-section{
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .our-design-img{
    width: 90%;
    padding: 50px 0 0 0;
  }
  h1 {
    font-size: 47px;
    font-weight: 600;
    text-align: center;
    color: #000000;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 30px !important;
    }
  }
`;
