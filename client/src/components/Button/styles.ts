import styled from "styled-components";

export const ButtonContainer = styled.button`
  border-color: ${({ theme, type }) => theme.button.color[type ?? "submit"]};
  color: ${({ theme }) => theme.text.color};
`;
