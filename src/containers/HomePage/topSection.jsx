import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

import TopSectionBackgroundImg from "../../images/background_topsection.png";
import rightImgTop from "../../images/img-right.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(126, 73, 195, 0.8);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 25em;
  height: 23em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const SubTextLogan = styled.h3`
  margin: 0;
  line-height: 1.6;
  color: #fff;
  font-weight: normal;
  font-size: 20px;
  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <Marginer direction="vertical" margin={8} />
            <SloganText>Easily create or join a local </SloganText>
            <SloganText>nanny share with Hapu</SloganText><br />
            <SubTextLogan>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
            </SubTextLogan>
            <SubTextLogan>
              and create new flexible, affordable solutions in childcare.
            </SubTextLogan>
            <Marginer direction="vertical" margin={15} />
            <Button>See hapu in action (27 seconds)</Button>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={rightImgTop} alt="right card img" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
