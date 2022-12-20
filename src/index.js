import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Provider as AlertProvider, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/index";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
};
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#008dd0",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AlertProvider {...options} template={AlertTemplate}>
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
        </AlertProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
