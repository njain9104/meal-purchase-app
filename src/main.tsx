import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MealContext from "./context/MealContext.tsx";
import OrderContext from "./context/OrderContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MealContext>
      <OrderContext>
        <App />
      </OrderContext>
    </MealContext>
  </React.StrictMode>
);
