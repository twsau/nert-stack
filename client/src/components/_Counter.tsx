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
  const decrement = () => (count > 0 ? setCount(count - 1) : "");
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  return (
    <>
      <Row justify="center">
        <Count>{zeroPad(count, 3)}</Count>
      </Row>
      <Row justify="center">
        <button onClick={decrement}>
          <span className="icon">remove</span>
        </button>
        <button onClick={increment}>
          <span className="icon">add</span>
        </button>
      </Row>
    </>
  );
};
