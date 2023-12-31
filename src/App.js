import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './Firebase.js';
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import About from "./About";
import Community from "./Community";
import ViewAssessmentDraft from './Pages/ViewAssessmentDraft.js';
import CreateAssessment from './Pages/CreateAssessment.js';
import ChooseQuestions from './Pages/ChooseQuestions.js';
//import Modal from './Pages/Modal/Modal.js';
import Login from "./Login.js";
import Signup from './Signup.js';
import Home from './Pages/Home.js';
import Assessments from "./Pages/Assessments.js";
import Resources from "./Pages/Resources.js";
import Navbar from './Navbar.js';
import Details from './Details';
import Question from './Question';
import Appreciate from './Appreciate';
import Result from './Result';

function App() {

  const [selectedFields, setSelectedFields] = useState([]);
  const [assessmentQuestions, setAssessmentQuestions] = useState([]);
  //const [isOpen, setIsOpen] = useState(false);

  const displayQuestions = (questions) => {
    setSelectedFields(questions);
  };

  const addQuestionsToAssessment = (newQuestion) => {
    const addedQuestions = [...assessmentQuestions, newQuestion];

    if (!assessmentQuestions.includes(newQuestion)) {
      setAssessmentQuestions(addedQuestions);
    }
    //setIsOpen(true)
  };


  const deleteQuestion = (id) => {
    const filteredQuestions = assessmentQuestions.filter((question) => question.id !== id);
    setAssessmentQuestions(filteredQuestions);
  };
  return (

    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/details" element={<Details />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/question" element={<Question />} />
            <Route path="/appreciate" element={<Appreciate />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="create-assessment" element={<CreateAssessment displayQuestions={displayQuestions}/>} />
            {/* eslint-disable-next-line max-len */ }
            <Route 
              path="choose-assessment-questions" 
              element={
                <ChooseQuestions 
                  selectedFields={selectedFields}
                  addQuestionsToAssessment={addQuestionsToAssessment} 
                />
            } 
            />
            <Route 
              path="assessment-draft" 
              element={
              <div>
                <ViewAssessmentDraft 
                assessmentQuestions={assessmentQuestions} 
                deleteQuestion={deleteQuestion} 
                />
              </div>
            }
            />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );

    
}

export default App;
