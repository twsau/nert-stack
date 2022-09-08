import styled from "styled-components";

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  type?: "primary" | "accent";
}

const Wrapper = styled.section<CardProps>`
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

  & > h3 {
    color: ${({ type }: CardProps) =>
      type === "primary"
        ? `var(--primary)`
        : type === "accent"
        ? "var(--accent)"
        : "var(--text)"};
    text-align: center;
  }
`;

export const Card = ({ children, title, type }: CardProps) => (
  <Wrapper type={type}>
    {title && <h3>{title}</h3>}
    {children}
  </Wrapper>
);
