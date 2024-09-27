import React from "react";
import styled from "styled-components";
import TitleComponent from "../../components/title-component/TitleComponent";

const PageContent = () => {
  return (
    <Wrapper>
      <TitleComponent pageName="Oliver Barrett" className={"oliver-title"} />
      <div className="oliver-container">
        <div className="oliver-heading">
          Innovator, U.S. Veteran, and Climate Champion: Pioneering Change for a
          Sustainable Future
        </div>
        <div className="oliver-desc-section">
          <div className="oliver-desc margin">
            Oliver Barrett's dedication to climate justice began at the esteemed
            Center for Climate and Security, where he conducted groundbreaking
            research on environmental degradation and climate shifts. His work
            highlighted the urgent security implications of climate change and
            reached audiences from Yale to the UNFCC COP 25.
          </div>
          <div className="oliver-desc">
            <strong>Tech Innovator: </strong>
            Oliver merges deep knowledge of artificial intelligence with climate
            finance expertise. He has developed AI-driven solutions for climate
            project funding and, while working with the Department of Defense,
            recognized AI's potential to revolutionize climate finance access.
          </div>
          <div className="oliver-desc ">
            The U.S. government has trusted him to manage critical IT
            infrastructure and personnel for national security programs. His
            ability to translate complex needs into effective software makes him
            a leader in modernizing public sector operations.
          </div>
          <div className="oliver-desc">
            <strong>Climate Champion: </strong>
            As a former Senior Research Fellow at the Center for Climate and
            Security, Oliver's understanding of climate finance challenges led
            him to create the world's first AI-powered web app for climate
            finance grant writing.
          </div>
          <div className="oliver-desc ">
            He focused his research on the impacts of environmental degradation
            and climate change on vulnerable regions, especially Latin America
            and the Caribbean.
          </div>
          <div className="oliver-desc">
            <strong>Decorated Veteran: </strong>A retired naval officer,
            Oliver's military career began as a U.S. Marine deployed to Somalia
            for humanitarian aid. He later flew reconnaissance missions in
            Operation Enduring Freedom.
          </div>
          <div className="oliver-desc ">
            As an advisor to the Pentagon’s division responsible for Latin
            America and the Caribbean, (U.S. Southern Command), he managed
            international partnerships, technology programs, and environmental
            security initiatives.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div`
  padding-top: 70px;
  .oliver-container {
    background-color: #f7f7f7;
    padding: 40px 50px 50px 50px;
  }
  .oliver-heading {
    color: #000000;
    font-size: 40px;
    font-weight: 600;
    line-height: 54px;
  }
  .oliver-desc-section {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .oliver-desc {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }
  .margin {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    padding-top: 100px;
    .oliver-title {
      padding-bottom: 60px;
    }
    .oliver-container {
      padding: 40px 25px 50px 25px;
    }
    .oliver-heading {
      text-align: center;
      font-size: 35px;
      line-height: 56px;
    }
    .oliver-desc {
      text-align: center;
    }
    .oliver-desc-section {
      gap: 30px;
    }
  }
`;
