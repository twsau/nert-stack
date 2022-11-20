import styled, { css } from "styled-components";

export const CardContainer = styled.section<{ type?: string }>`
  border: 1px solid;
  border-color: ${({ type }) => (type ? `var(--${type})` : `var(--surface-4)`)};
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  width: min(100%, var(--size-content-3));
  padding: var(--size-3);
  position: relative;
  isolation: isolate;

  &::before {
    background: linear-gradient(to bottom left, var(--text-1), transparent);
    background-color: ${({ type }) =>
      type ? `var(--${type})` : `var(--surface-4)`};
    border-radius: inherit;
    content: "";
    inset: 0;
    opacity: 0.1;
    position: absolute;
    z-index: -1;
  }
`;

export const CardTitle = styled.h3<{ type?: string }>`
  color: var(--surface-4);

  ${({ type }) =>
    type &&
    css`
      color: var(--${type});
    `}
`;

export const CardIcon = styled.span<{ type?: string }>`
  color: var(--surface-4);
  filter: drop-shadow(1px 1px 5px rgba(46 51 64 / 1));
  font-size: var(--size-8);
  inset: var(--size-2) var(--size-2) auto auto;
  position: absolute;

  ${({ type }) =>
    type &&
    css`
      color: var(--${type});
    `}
`;
