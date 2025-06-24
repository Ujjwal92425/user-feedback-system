import React from "react";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1>User Feedback</h1>
      <Form />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;
