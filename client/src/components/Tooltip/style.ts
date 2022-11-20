import styled, { css } from "styled-components";

export const TooltipContent = styled.div<{ type: string }>`
  ${({ type }) =>
    type &&
    css`
      /* color: var(--${type}); */
    `}
`;
