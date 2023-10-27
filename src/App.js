
import React from "react"
import logo from './logo.svg';
import './App.css';
import Dashboard from "./Pages/Dashboard/Dashboard.js";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
