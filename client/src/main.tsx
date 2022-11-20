import ReactDOM from "react-dom/client";
import { Modal, Notifications } from "./core/components";
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
