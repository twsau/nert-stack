import { useState } from "react";
import styled from "styled-components/macro";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const decrement = () => (count > 0 ? setCount(count - 1) : "");
  const increment = () => setCount(count + 1);

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  return (
    <div
      css={`
        align-items: center;
        display: flex;
        gap: var(--size-3);
        justify-content: space-evenly;
        padding-block: var(--size-3);
      `}
    >
      <button onClick={decrement}>
        <span className="icon">remove</span>
      </button>
      <code
        css={`
          border: 1px solid var(--surface-3);
          box-shadow: var(--shadow-2);
          font-size: var(--size-10);
          line-height: var(--size-10);
          text-align: center;
          width: var(--size-xxs);
        `}
      >
        {zeroPad(count, 3)}
      </code>
      <button onClick={increment}>
        <span className="icon">add</span>
      </button>
    </div>
  );
};
