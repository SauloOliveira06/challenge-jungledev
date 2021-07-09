import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import JanesCard from "../../images/janes_card.png";

import { deviceSize } from "../responsive";

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #F2F2F2;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 28px;
  color: #000;
  font-weight: 600;
  line-height: 1.4;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div`
  width: 53em;
  height: 35em;
  
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;

const SubTitle = styled.h3`
  width: 20em;
  text-align: justify;
  line-height: 1.4;
  color: #000;
  font-weight: 600;
  font-size: 18px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
    height: 100%;
    display: flex;
    text-align: start;
    width: 14em;
    
  }
`;

export function SpecialistAd(props) {

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>Share your home, </Slogan>
            <Slogan>nanny and costs</Slogan>
            <SubTitle>
              You have a fantastic home, a fantastic nanny and wouldn’t cutting
              your costs in half be, well, fantastic?! If only it was easy to
              connect with other parents to share your costs? Well now it is,
              with Hapu. Hapu means tribe and it’s our foundational 3 tribal
              principles that empowers you to create and manage your own tribe.
              A tribe that together has the power to create new affordable
              solutions in childcare that work for you and your community.
            </SubTitle>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <p><a href="/#">Ready to get started?</a></p>
        </SloganContainer>
        <StandoutImage>
          <img src={JanesCard} alt="join-as-specialist" />
        </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}
