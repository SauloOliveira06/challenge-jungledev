import React from "react";
import styled from "styled-components";
import { deviceSize } from "../responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  background-color: #F2F2F2;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 28px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 18px;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 14px;
  margin: 0;
  margin-left: 10px;
  margin-top: 5px;
  display: flex;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 15px;
  }
`;

export function Footer(props) {
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>
            Become a nanny share host
            <FLink>
              <br />
              Takes less than 5 minutes to get started
            </FLink>
          </Title>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <PrivacyText>
            Copyright © 2017 Hapu PTY Limited All rights reserved
          </PrivacyText>
        </LeftBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
