import styled, { css } from "styled-components";

interface CardProps {
  type?: "primary" | "accent" | undefined;
}

export const Card = styled.section<CardProps>`
  border: 1px solid;
  border-color: ${(p: CardProps) =>
    p.type === "primary"
      ? `var(--primary)`
      : p.type === "accent"
      ? "var(--accent)"
      : "var(--text)"};
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  max-width: var(--size-content-3);
  padding: var(--size-3);
  position: relative;
  isolation: isolate;

  &::before {
    background: linear-gradient(to bottom left, var(--text-1), transparent);
    background-color: ${(p) =>
      p.type === "primary"
        ? `var(--primary)`
        : p.type === "accent"
        ? "var(--accent)"
        : "var(--surface-4)"};
    border-radius: inherit;
    content: "";
    inset: 0;
    opacity: 0.1;
    position: absolute;
    z-index: -1;
  }
`;
