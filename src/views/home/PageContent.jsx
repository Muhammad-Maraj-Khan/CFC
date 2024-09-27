import React from "react";
import styled from "styled-components";
import HomeBanner from "./section/HomeBanner";
import WhyJanus from "./section/WhyJanus";
import HomeCard from "./section/HomeCard";
import Enterprise from "./section/Enterprise";
import HomeCarouselSection from "./section/HomeCarouselSection";
import WhatWeDo from "./section/WhatWeDo";
import DoNotTakeWorld from "./section/DonotTakeWorld";
import WorldCarousel from "./section/WorldCarousel";

const PageContent = () => {
  return (
    <Wrapper>
      <HomeBanner />
      <WhyJanus />
      <HomeCard />
      <WhatWeDo />
      <DoNotTakeWorld />
      <Enterprise />
      {/* <HomeCarouselSection /> */}
    </Wrapper>
  );
};

export default PageContent;

const Wrapper = styled.div``;
