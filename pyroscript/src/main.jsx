import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App.jsx

import React from "react";

export default function App() {
  return <App />;
}
