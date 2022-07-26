import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import styled from "styled-components/macro";
import { Button } from "./components/Button";
import { useModal } from "./components/Modal";
import { Tooltip } from "./components/Tooltip";
import { AiOutlineBuild, AiOutlineQuestionCircle } from "react-icons/ai";
import { notify } from "./components/Notification";
import { List } from "./components/List";
import { Form } from "./components/Form";

const exampleModal: ModalView = {
  content: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae
      odio praesentium illo voluptatibus error sit consectetur, tempore commodi
      ab deleniti mollitia magni voluptas natus beatae saepe illum cum? Aliquid?
    </p>
  ),
  title: "example modal",
};

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
        <Card icon={<AiOutlineQuestionCircle />} title="about" type="info">
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
        <Card icon={<AiOutlineBuild />} title="components">
          <label>
            modal
            <Button onClick={() => showModal(exampleModal)}>test</Button>
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
        <Card title="form" type="info">
          <Form
            fields={[
              {
                name: "name",
                min: 3,
                placeholder: "your name...",
                required: true,
                type: "TextInput",
              },
              {
                max: 100,
                min: 20,
                name: "number field",
                placeholder: "0",
                required: true,
                type: "NumberInput",
              },
              {
                name: "email field",
                placeholder: "person@address.com",
                required: true,
                type: "EmailInput",
              },
              {
                name: "range",
                min: 0,
                max: 100,
                required: true,
                type: "RangeInput",
              },
            ]}
            onSubmit={(data: Record<string, any>) => console.log(data)}
          />
        </Card>
      </main>
      <footer
        css={`
          display: flex;
          justify-content: space-between;
          padding: var(--size-3);
        `}
      >
        <a href="https://github.com/twsau">twsau</a>
        <a href="https://bossweb.dev">bossweb.dev</a>
      </footer>
    </>
  );
};
