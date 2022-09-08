import { useState } from "react";
import styled from "styled-components";
import { Row } from "../core/layout";

const Count = styled.code`
  border: 1px solid var(--surface-3);
  box-shadow: var(--shadow-2);
  font-size: var(--size-10);
  line-height: var(--size-10);
  text-align: center;
  width: var(--size-xxs);
`;

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <>
      <Row justify="center">
        <Count>{count}</Count>
      </Row>
      <Row justify="center">
        <button onClick={reset} type="reset">
          reset
        </button>
        <button onClick={increment} type="submit">
          increment
        </button>
      </Row>
    </>
  );
};
