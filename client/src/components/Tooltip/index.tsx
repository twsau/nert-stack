import { v4 as uuid } from "uuid";
import ReactTooltip from "react-tooltip";
import { TooltipContent } from "./style";

export const Tooltip = ({ children, content, type = "warning" }: TooltipProps) => {
  const id = uuid();
  return (
    <>
      <TooltipContent data-tip data-for={id} type={type}>
        {children}
      </TooltipContent>
      <ReactTooltip
        backgroundColor="var(--surface-1)"
        border={true}
        borderColor={type ? `var(--${type})` : `var(--surface-1)`}
        id={id}
      >
        {content}
      </ReactTooltip>
    </>
  );
};
