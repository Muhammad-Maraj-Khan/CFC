import { CustomButton } from "components/common";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PlayGroundImg from "assets/images/playground-laptop-cfc.png";
import CfcBfIcon from "assets/svg/playground-cfc-svg.svg";
import PlaygroundCard from "./PlaygroundCard";
import LinkedinPost1 from "../../../assets/svg/LinkedinPost1.svg";
import LinkedinPost2 from "../../../assets/svg/LinkedinPost2.svg";
import LinkedinPost3 from "../../../assets/svg/LinkedinPost3.svg";
import LinkedinPost4 from "../../../assets/svg/LinkedinPost4.svg";
import LinkedinPost5 from "../../../assets/svg/LinkedinPost5.svg";
import LinkedinPost6 from "../../../assets/svg/LinkedinPost6.svg";
import LinkedinSmall4 from "../../../assets/svg/LinkedinSmall1.svg";
import LinkedinSmall2 from "../../../assets/svg/LinkedinSmall2.svg";
import LinkedinSmall3 from "../../../assets/svg/LinkedinSmall3.svg";
import LinkedinSmall1 from "../../../assets/svg/LinkedinSmall4.svg";
import LinkedinSmall5 from "../../../assets/svg/LinkedinSmall5.svg";
import LinkedinSmall6 from "../../../assets/svg/LinkedinSmall6.svg";


const CLimateFinanceTestimonial = () => {
  const solutionRef = useRef(null);
  const [imgSources, setImgSources] = useState([
    LinkedinPost1,
    LinkedinPost2,
    LinkedinPost3,
    LinkedinPost4,
  ]);

  const updateImageSources = () => {
    if (window.innerWidth <= 500) {
      setImgSources([
        LinkedinSmall1, // replace with your new image path
        LinkedinSmall2,
        LinkedinSmall3,
        LinkedinSmall4,
        LinkedinSmall5,
        LinkedinSmall6,   // replace with your new image path
      ]);
    } else {
      setImgSources([
        LinkedinPost1,
        LinkedinPost2,
        LinkedinPost3,
        LinkedinPost4,
        LinkedinPost5,
        LinkedinPost6,
      ]);
    }
  };

  useEffect(() => {
    updateImageSources(); // Set initial image sources based on current width

    window.addEventListener("resize", updateImageSources); // Update on resize
    return () => window.removeEventListener("resize", updateImageSources); // Clean up
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = solutionRef.current.querySelectorAll(
      ".solution-header, .solution-desc, .solution-btn"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Wrapper ref={solutionRef}>
      <div className="solution-container">
        <div className="sol-container">
          <div className="solution-header">
            In Demand Software
          </div>
          <div className="solution-desc">
            See how we’ve cultivated strong relationships with our clients and continue to fulfill their needs in unlocking climate finance.
          </div>
          <div className="testimonialSection">
            <div className="section1">
              <img src={imgSources[0]} className="testimg" />
              <img src={imgSources[2]} className="testimg" />
              <img src={imgSources[4]} className="testimgNew" />
            </div>
            <div className="section2">
              <img src={imgSources[1]} className="testimg" />
              <img src={imgSources[3]} className="testimg" />
              <img src={imgSources[5]} className="testimgNew" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CLimateFinanceTestimonial;

const slideInLeft = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Wrapper = styled.div`
  ${slideInLeft}
  padding: 50px 50px 0px 50px;
  margin-top: 90px;
  background-color: #fff;
  width: 100%;

  .sol-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .solution-container {
    background-color: #244a32;
    border-radius: 5px;
    padding: 60px 60px 0px 45px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    text-align: center;
    height: 1240px;
    
  }
  .solution-header,
  .solution-desc,
  .solution-btn {
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .solution-header.animate,
  .solution-desc.animate,
  .solution-btn.animate {
    animation: slideInLeft 1s forwards;
  }
  .solution-header {
    color: #fff;
    font-size: 35px;
    font-weight: 600;
  }
  .solution-desc {
    color: #ffffffe5;
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
    width: 70%;
    
    line-height: 28px;
    margin-top: 10px;
  }

  .solution-btn {
    margin-top: 15px;
    display: flex;
    align-item: center;
    justify-content: center;
  }
  .solution-btn .btn {
    font-weight: 600;
  }
  .solution-card-section {
    padding-right: 25px;

    img {
      width: 100%;
      height: 640px;
      object-fit: contain;
    }
  }
.testimonialSection{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 970px;
  margin-top: 25px;
  gap: 1rem;
    .section1{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 60px;
      height: 100%;
      .testimg {
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
      .testimgNew{
      width: 100%;
      height: 305px;
      object-fit: contain;
      }
      
      
}
.section2{
width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 60px;
      height: 100%;

      .testimg {
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
      .testimgNew{
      width: 100%;
      height: 307px;
      object-fit: contain;
      }

}
      

}
@media (max-width: 1800px) {  
.testimonialSection{
  width: 75%;
}
@media (max-width: 1700px) {  
.testimonialSection{
  width: 80%;
}
@media (max-width: 1600px) {  
.testimonialSection{
  width: 85%;
}
@media (max-width: 1500px) {  
.testimonialSection{
  width: 90%;
}

@media (max-width: 1325px) {  
.testimonialSection{
  width: 100%;
}
  @media (max-width: 1160px) {  

  .solution-container {
  height: 1100px;
}
  .solution-desc{
  width: 85%;
  }
     .testimonialSection{
     height: 850px;
     .section1{
        gap: 0px;
     }
        .section2{
        gap: 0px;
     }
}
    .solution-card-section {
      img {
        height: 100%;
      }
    }
  }
     @media (max-width: 1060px) {  

  .solution-container {
  height: 995px;
}
  .solution-desc{
  width: 85%;
  }
     .testimonialSection{
     height: 795px;
      .section1{
      gap: 30px;
        .testimg {
      width: 400px;
      height: 200px;
      object-fit: contain;
    }
     
}
    .solution-card-section {
      img {
        height: 100%;
      }
    }
  }
    @media (max-width: 1000px) {  

  .solution-container {
  height: 1650px;
}
  .solution-desc{
  width: 100%;
  }
     .testimonialSection{
     height: 100%;
     display: flex;
  margin-top: 25px;
  gap: 20px;
      flex-direction: column;
      .section1{
      gap: 20px;
        .testimg {
      width: 400px;
      height: 200px;
      object-fit: contain;
    }
      .testimgNew {
      width: 400px;
      height: 250px;
      object-fit: contain;
    }
     }
      
     .section2{
      gap: 20px;
        .testimg {
      width: 400px;
      height: 200px;
      object-fit: contain;
    }
      .testimgNew {
      width: 400px;
      height: 250px;
      object-fit: contain;
    }
     }
}
    .solution-card-section {
      img {
        height: 100%;
      }
    }
  }
    
  @media (max-width: 768px) {
  .solution-container {
  height: 1650px;
}
    padding: 80px 25px 25px 25px;
    margin-top: 0px;
    .solution-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px 25px 0px 25px;
    }
    .solution-header {
      text-align: center;
      line-height: 40px;
      font-size: 30px;
      padding-right: 0px;
    }
    .solution-desc {
      text-align: center;
      margin-top: 30px;
      padding-right: 25px;
    }
    .solution-btn {
      margin-top: 30px;
      padding-right: 25px;
    }
    .solution-card-section {
      margin-top: 40px;
      padding-right: 15px;

      img {
        height: 100%;
      }
    }
  }
  @media (max-width: 500px) {
  .solution-container {
  height: 2500px;
}
.solution-header {
      font-size: 25px;
      line-height: 35px;

    }
.testimonialSection{
      .section1{
        .testimg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
      .testimgNew {
       width: 100%;
      height: 100%;
      object-fit: contain;
    }
     }
      
     .section2{
        .testimg {
       width: 100%;
      height: 100%;
      object-fit: contain;
    }
       .testimgNew {
       width: 100%;
      height: 100%;
      object-fit: contain;
    }
     }
}

    .solution-btn {
      width: 100%;
      .btn {
        width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
  .solution-container {
  height: 520vw;
}

.testimonialSection{
      .section1{
        .testimg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
      .testimgNew {
       width: 100%;
      height: 100%;
      object-fit: contain;
    }
     }
      
     .section2{
        .testimg {
       width: 100%;
      height: 100%;
      object-fit: contain;
    }
      .testimgNew {
       width: 100%;
      height: 100%;
      object-fit: contain;
    }
     }
}
}

@media (max-width: 370px) {
  .solution-container {
  height: 530vw;
}
}
`;
