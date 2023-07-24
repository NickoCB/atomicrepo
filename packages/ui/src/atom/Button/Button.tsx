
import * as React from "react";
import { ButtonProps } from "./Button.types";
import { ButtonStyled } from "./Button.styled";
// create  text props for button

const Button = ({ text, onClick }: ButtonProps) => {
  const handleOnClick = ()=>{
    onClick();
  }
  return <ButtonStyled onClick={handleOnClick}>{text}</ButtonStyled>;
};

export default Button


