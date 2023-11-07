import './App.css';
import { useState } from 'react';
import CreateAssessment from './Components/CreateAssessment';
import ChooseQuestions from './Components/ChooseQuestions';
import AssessmentDraft from './Components/AssessmentDraft';

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

  return (
    <div className="bg-background-blue flex items-center justify-center h-screen">
      <CreateAssessment displayQuestions={displayQuestions} />
      <ChooseQuestions topics={selectedFields} addQuestionsToAssessment={addQuestionsToAssessment}/>
      <AssessmentDraft assessmentQuestions={assessmentQuestions} />
    </div>
  );
}

export default App;
