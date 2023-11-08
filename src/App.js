import Navbar from './Navbar';
import './Firebase.js';
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import About from "./About";
import Community from "./Community";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="create-assessment" element={<CreateAssessment />}
    </Routes>
    </BrowserRouter>
  );
    
}

export default App;
