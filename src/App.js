import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
    
}

export default App;
