import { CardContainer, CardTitle } from "./styles";

export const Card = ({ children, title, type }: CardProps) => (
  <CardContainer type={type}>
    {title && <CardTitle type={type}>{title}</CardTitle>}
    {children}
  </CardContainer>
);
