import styled from "styled-components";

export const FieldValue = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: var(--size-1);
`;

export const ErrorMessage = styled.p`
  color: var(--error);
  font-family: var(--font-mono);
  text-align: right;
`;
