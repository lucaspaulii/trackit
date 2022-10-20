import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Providers/auth";
import { TodayProvider } from "./Providers/todaysprogress";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <TodayProvider>
      <App />
    </TodayProvider>
  </AuthProvider>
);
