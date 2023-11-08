import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import './Firebase.js';
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import About from "./About";
import Community from "./Community";
import ViewAssessmentDraft from './Pages/ViewAssessmentDraft.js';
import CreateAssessment from './Pages/CreateAssessment.js';
import ChooseQuestions from './Pages/ChooseQuestions.js';

function App() {

  const [selectedFields, setSelectedFields] = useState([]);
  const [assessmentQuestions, setAssessmentQuestions] = useState([]);

  const displayQuestions = (questions) => {
    setSelectedFields(questions);
  };

  const addQuestionsToAssessment = (newQuestion) => {
    const addedQuestions = [...assessmentQuestions, newQuestion];

    if (!assessmentQuestions.includes(newQuestion)) {
      setAssessmentQuestions(addedQuestions);
    }
  };

  const deleteQuestion = (id) => {
    const filteredQuestions = assessmentQuestions.filter((question) => question.id !== id);
    setAssessmentQuestions(filteredQuestions);
  };
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="create-assessment" element={<CreateAssessment displayQuestions={displayQuestions}/>} />
          {/* eslint-disable-next-line max-len */ }
          <Route path="choose-assessment-questions" element={
            <ChooseQuestions 
              selectedFields={selectedFields}
              addQuestionsToAssessment={addQuestionsToAssessment} 
            />} 
          />
          <Route path="assessment-draft" element={<ViewAssessmentDraft assessmentQuestions={assessmentQuestions} deleteQuestion={deleteQuestion} />
          }/>
    </Routes>
    </BrowserRouter>
  );
    
}

export default App;
