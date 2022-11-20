import { useEffect, useState } from "react";
// import { Card } from "./core/layout";
import { Card } from "./components/Card";
import { List, msg, Tooltip, useModal } from "./core/components";
import { ExampleModal } from "./views/modals";
import { ExampleNotification } from "./views/notifications";
import { ExampleTooltip } from "./views/tooltips";
import styled from "styled-components/macro";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

export const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [apiStatus, setApiStatus] = useState<string>("loading...");
  const { showModal } = useModal();

  useEffect(() => {
    if (!loading) return;
    fetch("/api/hello-world")
      .then((response) => response.json())
      .then(({ message }) => setApiStatus(message))
      .catch(({ message }) => setApiStatus(message))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      <header
        css={`
          display: grid;
          place-items: center;
        `}
      >
        <h1>N E R T</h1>
        <p
          css={`
            display: flex;
            gap: var(--size-1);
          `}
        >
          <a href="https://nodejs.dev/en/">node</a> |{" "}
          <a href="https://expressjs.com/">express</a> |{" "}
          <a href="https://reactjs.org/">react</a> |{" "}
          <a href="https://www.typescriptlang.org/">typescript</a>
        </p>
      </header>
      <hr />
      <main>
        <Card title="test" type="warning">
          hello
        </Card>
      </main>

      {/* <main
        css={`
          display: flex;
          flex-direction: column;
          padding-inline: 1rem;
          gap: var(--size-3);
          margin: 0 auto;
          max-width: var(--size-content-3);
        `}
      >
        <hr />
        <Card title="about" type="primary">
          <p>
            nert stack is everything you need to get started with build a react
            app in typescript. It has a built in nodejs / express backend with
            API routing ready to go and implements{" "}
            <a href="https://open-props.style/">open-props</a> /
            <a href="https://twsau.github.io/boss-styles/">boss-styles</a> to
            set global styles.
          </p>
          <p
            css={`
              font-size: var(--size-6);
              text-align: center;
            `}
          >
            🔥🔥🔥
          </p>
        </Card>
        <Card title="api" type="accent">
          <p>
            Try editing <code>api.ts</code> to get started
          </p>
          <pre
            css={`
              background-color: var(--surface-1);
              border-radius: var(--radius-2);
              color: var(--accent);
              margin: var(--size-3) auto;
              padding: var(--size-1);
            `}
          >
            API response: <code>{apiStatus}</code>
          </pre>
        </Card>
        <Card title="core components">
          <label>
            modal
            <button onClick={() => showModal(<ExampleModal />)}>test</button>
          </label>
          <label>
            notification
            <button onClick={() => msg(<ExampleNotification />)}>test</button>
          </label>
          <label>
            tooltip
            <Tooltip content={<ExampleTooltip />}>
              <button>test</button>
            </Tooltip>
          </label>
          <label>
            lists
            <List items={["egg", "cheese", "milk"]} />
          </label>
          <label>
            numbered lists
            <List numbered items={["egg", "cheese", "milk"]} />
          </label>
        </Card>
      </main> */}
      <footer
        css={`
          display: flex;
          justify-content: space-between;
          padding: var(--size-3);
          position: sticky;
          top: 100vh;
        `}
      >
        <a href="https://github.com/twsau">twsau</a>
        <a href="https://bossweb.dev">bossweb.dev</a>
      </footer>
    </>
  );
};
