import React from "react";
import styled from "styled-components";

import { deviceSize } from "../../components/responsive";

import Sara from "../../images/sarah.png";

const SarahPic = styled.div`
  width: 65px;
  height: 65px;
  background: url(${Sara}) no-repeat;
  background-position: 0px -1px;
  background-size: cover;
  border: 4px solid #ffffff;
  border-radius: 50%;

  display: flex;

  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));

  @media screen and (max-width: ${deviceSize.mobile}px) {
    display: none;
  }
`;

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-bottom: 100px;
  }
`;

const Title = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

export function Services(props) {
  return (
    <ServicesContainer>
      <SarahPic />
      <Title>
        Sarah’s day care available now in North Sydney Wednesday, Thursday,
        Friday - 7:30 - 5:30
      </Title>
    </ServicesContainer>
  );
}
