import styled from "styled-components";

interface RowProps {
  justify?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: var(--size-3);
  justify-content: ${(props) => props.justify ?? "flex-start"};
  margin-block: var(--size-3);
`;