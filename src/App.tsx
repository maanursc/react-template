import React, { Fragment } from "react";
import { CssBaseline } from "@mui/material";

import { DefaultRouter } from "./router/DefaultRouter";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import "./i18n"; // Import the i18n configuration
import CustomProvider from "./providers/CustomProvider";

function App() {
  useDocumentTitle("REACT TEMPLATE");

  return (
    <CustomProvider>
      <CssBaseline />
      <DefaultRouter />
    </CustomProvider>
  );
}

export default App;
