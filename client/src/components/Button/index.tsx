import { ButtonContainer } from "./styles";

export const Button = ({ children, onClick, type }: ButtonProps) => (
  <ButtonContainer onClick={onClick} type={type}>
    {children}
  </ButtonContainer>
);
