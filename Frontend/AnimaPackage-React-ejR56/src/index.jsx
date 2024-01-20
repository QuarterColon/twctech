import React from "react";
import ReactDOMClient from "react-dom/client";
import { Stores } from "./screens/Stores";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Stores />);
