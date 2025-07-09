import { StrictMode } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";
import { store, persistor } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
