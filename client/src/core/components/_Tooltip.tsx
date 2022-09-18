import { v4 as uuid } from "uuid";
import ReactTooltip from "react-tooltip";
import styled from "styled-components/macro";

interface ComponentProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export const Tooltip = ({ children, content }: ComponentProps) => {
  const id = uuid();

  return (
    <>
      <div
        css={`
          display: contents;
        `}
        data-tip
        data-for={id}
      >
        {children}
      </div>
      <ReactTooltip
        backgroundColor="var(--surface-1)"
        border={true}
        borderColor="var(--accent)"
        id={id}
      >
        {content}
      </ReactTooltip>
    </>
  );
};
