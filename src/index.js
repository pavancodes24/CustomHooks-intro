import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppProvider from "./context/AppProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
