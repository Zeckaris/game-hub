import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <ColorModeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ColorModeProvider>
  </Provider>
);
