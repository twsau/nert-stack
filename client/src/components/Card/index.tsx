import { CardContainer, CardIcon, CardTitle } from "./styles";

export const Card = ({ children, icon, title, type }: CardProps) => (
  <CardContainer type={type}>
    {title && <CardTitle type={type}>{title}</CardTitle>}
    <CardIcon type={type}>{icon}</CardIcon>
    {children}
  </CardContainer>
);
