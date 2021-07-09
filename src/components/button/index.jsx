import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 12px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 400;
  border-radius: 4px;
  background-color: #2a9d8f;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #00A870;
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
