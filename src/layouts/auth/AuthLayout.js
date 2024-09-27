import React from "react";
import BaseLayout from "layouts/base/BaseLayout";
import styled from "styled-components";
import Footer from "./Footer";
import GreenHeader from "./GreenHeader";
import WhiteHeader from "./WhiteHeader";
import LightGreenHeader from "./LightGreenHeader";

export default function AuthLayout({
  children,
  showGreenHeader,
  showWhiteHeader,
  showLightGreenHeader,
  headerTheme,
}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BaseLayout>
      <Wrapper>
        {showGreenHeader && (
          <GreenHeader scrollToTop={scrollToTop} headerTheme={headerTheme} />
        )}
        {showWhiteHeader && <WhiteHeader scrollToTop={scrollToTop} />}
        {showLightGreenHeader && <LightGreenHeader scrollToTop={scrollToTop} />}
        <div style={{ paddingTop: 67 }}>{children}</div>
        <Footer scrollToTop={scrollToTop} />
      </Wrapper>
    </BaseLayout>
  );
}

const Wrapper = styled.div``;
