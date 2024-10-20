import { StrictMode } from "react";

import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";

import { APIProvider } from "api/common/api-provider.tsx";

import { customTheme } from "common/theme.ts";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <APIProvider>
      <MantineProvider theme={customTheme}>
        <App />
      </MantineProvider>
    </APIProvider>
  </StrictMode>
);
