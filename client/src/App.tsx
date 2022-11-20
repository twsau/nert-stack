import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { useModal } from "./components/Modal";
import { Tooltip } from "./components/Tooltip";
import { FiActivity } from "react-icons/fi";
import { notify } from "./components/Notification";
import { List } from "./components/List";

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
      <main
        css={`
          display: flex;
          flex-wrap: wrap;
          gap: var(--size-3);
          justify-content: center;
          padding: var(--size-3);
        `}
      >
        <Card title="about" type="info">
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
        <Card icon={<FiActivity />} title="components">
          <label>
            modal
            <Button onClick={() => showModal(<p>hello!</p>)}>test</Button>
          </label>
          <label>
            notification
            <Button onClick={() => notify("hello!")}>test</Button>
          </label>
          <label>
            tooltip
            <Tooltip content={<p>hello!</p>} type="warning">
              <p>hover me</p>
            </Tooltip>
          </label>
          <label>
            lists
            <List items={["egg", "cheese", "milk"]} />
          </label>
          <label>
            numbered lists
            <List items={["egg", "cheese", "milk"]} type="number" />
          </label>
        </Card>
        <Card title="api" type="error">
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
      </main>
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
