import styled from "styled-components";

interface RowProps {
  justify?: string;
  padding?: number;
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: var(--size-2);
  justify-content: ${(props) => props.justify ?? "flex-start"};
  padding: ${({ padding }) => (padding ? `var(--size-${padding * 2})` : 0)};
`;
