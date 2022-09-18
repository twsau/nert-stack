import styled from "styled-components/macro";

interface ComponentProps {
  children?: React.ReactNode;
  title?: string;
  type?: "primary" | "accent" | "border";
}

export const Card = ({ children, title, type }: ComponentProps) => {
  return (
    <section
      css={`
        border: 1px solid;
        border-color: ${type ? `var(--${type})` : `var(--surface-4)`};
        border-radius: var(--radius-2);
        box-shadow: var(--shadow-2);
        max-width: var(--size-content-3);
        padding: var(--size-3);
        position: relative;
        isolation: isolate;

        &::before {
          background: linear-gradient(
            to bottom left,
            var(--text-1),
            transparent
          );
          background-color: ${type ? `var(--${type})` : `var(--surface-4)`};
          border-radius: inherit;
          content: "";
          inset: 0;
          opacity: 0.1;
          position: absolute;
          z-index: -1;
        }

        & > h3 {
          color: ${type ? `var(--${type})` : `var(--text-1)`};
          text-align: center;
        }
      `}
    >
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
};
