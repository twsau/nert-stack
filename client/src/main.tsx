import ReactDOM from "react-dom/client";
import { Modal, Notifications } from "./core/components";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Modal />
    <Notifications />
    <App />
  </>
);
