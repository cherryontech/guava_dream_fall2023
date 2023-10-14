import logo from './logo.svg';
import './App.css';

import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Main from './pages/Main';

import PostAssessment from './pages/Employee experience/PostAssessment';
import TakeAssessment from './pages/Employee experience/TakeAssessment';

import AssessmentData from './pages/HR experience/AssessmentData';
import Blog from './pages/HR experience/Blog';
import CreateAssessment from './pages/HR experience/CreateAssessment';
import LandingPage from './pages/HR experience/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <AboutUs />
        <Home />
        <Navbar />
        <Main />
        <PostAssessment />
        <TakeAssessment />
        <AssessmentData />
        <Blog />
        <CreateAssessment />
        <LandingPage />
      </div>

    </div>
  );
}

export default App;
