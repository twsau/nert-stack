import { useEffect, useState } from "react";
import { Card, Footer, Header, Main, Row } from "./core/layout";
import { List, useModal } from "./core/components";
import { Counter } from "./components";
import { ExampleModal } from "./views/modals";

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
      <Header>
        <h2 className="text-gradient">
          bossweb.dev<sup> / nert</sup>
        </h2>
      </Header>
      <Main>
        <h1 className="text-gradient" style={{ textAlign: "center" }}>
          N E R T
        </h1>
        <p style={{ textAlign: "center" }}>
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
          <Row>
            <List numbered items={["egg", "cheese", "ham", "milk"]} />
          </Row>
          <Row>
            <button onClick={() => showModal(<ExampleModal />)}>modal</button>
          </Row>
          {/* <Row justify="center">
            <span className="icon">description</span>
            <a href="http://localhost:6006/">view documentation</a>
          </Row> */}
        </Card>
      </Main>
      <Footer>
        <a href="https://bossweb.dev">bossweb.dev</a>
      </Footer>
    </>
  );
};
