import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.tsx";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals.ts";
import { configureStore } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={configureStore({})}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
