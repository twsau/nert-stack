import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

export const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [apiStatus, setApiStatus] = useState<string>("loading...");

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
      <main>
        <h2>node | express | react | typescript</h2>
        <ul>
          <li>bossweb.dev reset + open-props / normalize</li>
          <li>api integration: {apiStatus}</li>
          <li>yarn | vite</li>
        </ul>
      </main>
      <footer>
        <a href="https://bossweb.dev">bossweb.dev</a>
      </footer>
    </>
  );
};
