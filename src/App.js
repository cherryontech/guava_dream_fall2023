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

  const deleteQuestion = (id) => {
    const filteredQuestions = assessmentQuestions.filter((question) => question.id !== id);
    setAssessmentQuestions(filteredQuestions);
  };

  return (
    <div className="bg-background-blue flex items-center justify-center h-screen">
      <CreateAssessment displayQuestions={displayQuestions} />
      <ChooseQuestions selectedFields={selectedFields} addQuestionsToAssessment={addQuestionsToAssessment}/>
      <AssessmentDraft assessmentQuestions={assessmentQuestions} deleteQuestion={deleteQuestion} />
    </div>
  );
}

export default App;
