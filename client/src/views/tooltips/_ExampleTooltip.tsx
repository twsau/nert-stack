import styled from "styled-components/macro";

export const ExampleTooltip = () => {
  return (
    <>
      <h4
        css={`
          color: var(--accent);
          font-size: var(--size-3);
          text-align: center;
        `}
      >
        example
      </h4>
      <p
        css={`
          color: var(--text-2);
          font-family: var(--font-mono);
          font-size: 0.9em;
        `}
      >
        this is an example tooltip
      </p>
    </>
  );
};
