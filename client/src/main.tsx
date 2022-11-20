import ReactDOM from "react-dom/client";
import { Modal } from "./components/Modal";
import { Notifications } from "./components/Notification";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Modal />
    <Notifications />
    <App />
  </ThemeProvider>
);
