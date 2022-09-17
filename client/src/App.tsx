import { useEffect, useState } from "react";
import { Card } from "./core/layout";
import { List, msg, useModal } from "./core/components";
import { Counter } from "./components";
import { ExampleModal } from "./views/modals";
import { ExampleNotification } from "./views/notifications";
import styled from "styled-components/macro";

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
          display: flex;
          justify-content: center;
          padding-block-start: var(--size-3);
        `}
      >
        <h2 className="text-gradient">
          bossweb.dev<sup> / nert</sup>
        </h2>
      </header>
      <main
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
        <h1
          className="text-gradient"
          css={`
            text-align: center;
          `}
        >
          N E R T
        </h1>
        <p
          css={`
            text-align: center;
          `}
        >
          <a href="https://nodejs.dev/en/">node</a> |{" "}
          <a href="https://expressjs.com/">express</a> |{" "}
          <a href="https://reactjs.org/">react</a> |{" "}
          <a href="https://www.typescriptlang.org/">typescript</a>
        </p>
        <hr />
        <Card type="primary">
          <p>
            nert stack is everything you need to get started with build a react
            app in typescript. It has a built in nodejs / express backend with
            API routing ready to go. It's also built using yarn and vite and
            implements <a href="https://open-props.style/">open-props</a> /{" "}
            <a href="https://twsau.github.io/boss-styles/">boss-styles</a> to
            set global styles.
          </p>
          <ul>
            <li>bossweb.dev reset + open-props / normalize / boss-styles</li>
            <li>
              api routing. Edit <code>api.ts</code> to get started.
            </li>
            <li>built using yarn & vite for max build speed 🔥🔥🔥</li>
          </ul>
        </Card>
        <Card type="accent">
          <pre>
            API response: <code>{apiStatus}</code>
          </pre>
        </Card>
        <Card title="state">
          <Counter />
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
            lists
            <List items={["egg", "cheese", "milk"]} />
          </label>
          <label>
            numbered lists
            <List numbered items={["egg", "cheese", "milk"]} />
          </label>
        </Card>
      </main>
      <footer
        css={`
          display: flex;
          justify-content: space-between;
          margin-block-start: var(--size-10);
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
