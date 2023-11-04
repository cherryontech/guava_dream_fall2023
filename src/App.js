import './App.css';
import Navbar from './Navbar';
import './firebase.js';
import Dashboard from "./Pages/Dashboard/Dashboard.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
