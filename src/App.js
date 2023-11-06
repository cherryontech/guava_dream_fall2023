import './App.css';
import CreateAssessment from './Components/CreateAssessment';
import ChooseQuestions from './Components/ChooseQuestions';
import { useState } from 'react';

function App() {
  const [ selectedFields, setSelectedFields ] = useState([])
  const [ assessmentQuestions, setAssessmentQuestions ] = useState([]);
  const displayQuestions = (questions) => {
    setSelectedFields(questions)
  }

  const addQuestionsToAssessment = (newQuestion) => {
    let addedQuestions = [...assessmentQuestions, newQuestion];

    if (!assessmentQuestions.includes(newQuestion)) {
      setAssessmentQuestions(addedQuestions)
    }

    console.log(assessmentQuestions)
  }

  return (
    <div className="bg-background-blue flex items-center justify-center h-screen">
      <CreateAssessment displayQuestions={displayQuestions}/>
      <ChooseQuestions topics={selectedFields} addQuestionsToAssessment={addQuestionsToAssessment}/>
    </div>
  );
}

export default App;
