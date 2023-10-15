import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const contacts = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "02-6226-8001",
  },
  {
    id: 2,
    name: "Bethany Hellas",
    number: "02-6846-8002",
  },
  {
    id: 3,
    name: "Charlie Kentwell",
    number: "04-8436-7771",
  },
  {
    id: 4,
    name: "Aragorn Elessar",
    number: "02-6226-8001",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App contacts={contacts} />
);
