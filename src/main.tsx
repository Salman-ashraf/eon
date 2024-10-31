import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ThemeCustomization from "./theme/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeCustomization>
        <App />
      </ThemeCustomization>
    </BrowserRouter>
  </StrictMode>
);
