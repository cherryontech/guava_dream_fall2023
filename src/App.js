import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import './Firebase.js';
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import About from "./About";
import Employee from "./Employee";
import ViewAssessmentDraft from './Pages/ViewAssessmentDraft.js';
import CreateAssessment from './Pages/CreateAssessment.js';
import ChooseQuestions from './Pages/ChooseQuestions.js';
import Modal from './Pages/Modal/Modal.js';
import Login from "./Login.js";
import Signup from './Signup.js';
import SideMenu from './SideMenu.js';

function App() {

  const [selectedFields, setSelectedFields] = useState([]);
  const [assessmentQuestions, setAssessmentQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const displayQuestions = (questions) => {
    setSelectedFields(questions);
  };

  const addQuestionsToAssessment = (newQuestion) => {
    const addedQuestions = [...assessmentQuestions, newQuestion];

    if (!assessmentQuestions.includes(newQuestion)) {
      setAssessmentQuestions(addedQuestions);
    }
    setIsOpen(true)
  };


  const deleteQuestion = (id) => {
    const filteredQuestions = assessmentQuestions.filter((question) => question.id !== id);
    setAssessmentQuestions(filteredQuestions);
  };
  return (
    <BrowserRouter>
    <Navbar />
    <SideMenu />
    <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="create-assessment" element={<CreateAssessment displayQuestions={displayQuestions}/>} />
          <Route path="choose-assessment-questions" element={
            <ChooseQuestions 
              selectedFields={selectedFields}
              addQuestionsToAssessment={addQuestionsToAssessment} 
            />} 
          />
          <Route path="assessment-draft" element={<ViewAssessmentDraft assessmentQuestions={assessmentQuestions} deleteQuestion={deleteQuestion} />
          }/>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
    </Routes>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </BrowserRouter>
  );
    
}

export default App;
