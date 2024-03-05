import React from "react";
import ReactDOM from "react-dom/client";
import AppPage from "./AppPage";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppPage />
    <Analytics
      beforeSend={(e) => {
        if (e.url.includes("private")) return null;
        return e;
      }}
    />
  </>
);
