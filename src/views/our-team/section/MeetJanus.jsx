import React from "react";
import styled from "styled-components";

const MeetJanus = () => {
  return (
    <Wrapper>
      <div className="Janus-container">
        <div className="janus-header">Meet the Janus Team</div>
        <div className="janus-text">
          Our dynamic team of designers, specialists, and AI engineers forms the
          cornerstone of our innovative company, seamlessly blending creativity
          with cutting-edge technology. Together, they craft versatile solutions
          that drive our success and set new industry standards.
        </div>
      </div>
    </Wrapper>
  );
};

export default MeetJanus;

const Wrapper = styled.div`
  .Janus-container {
    padding-top: 80px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 50px 40px;
      text-align: center;
    }
  }
  .janus-header {
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 35px;
      line-height: 40px;
    }
  }
  .janus-text {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    max-width: 660px;
    margin-top: 10px;
    line-height: 27px;
  }
`;
