import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
