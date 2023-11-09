import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import './Firebase.js';
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import About from "./About";
import Community from "./Community";
import Input from "./Input";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Input />
    <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
    </Routes>
    </BrowserRouter>
  );
    
}

export default App;
