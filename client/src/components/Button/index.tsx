import React from "react";
import { ButtonContainer } from "./styles";

export const Button = ({
  children,
  onClick,
  type,
}: {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
  type: ButtonType;
}) => (
  <ButtonContainer onClick={onClick} type={type}>
    {children}
  </ButtonContainer>
);
