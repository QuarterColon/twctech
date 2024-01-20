import React from "react";
import ReactDOMClient from "react-dom/client";
import { ProductPage } from "./screens/ProductPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ProductPage />);
