import './App.css';
import CreateAssessment from './Components/CreateAssessment';
import ChooseQuestions from './Components/ChooseQuestions';
import { useState } from 'react';

function App() {
  const [ selectedFields, setSelectedFields ] = useState([])
  const displayQuestions = (questions) => {
    setSelectedFields(questions)
  }
  return (
    <div className="bg-background-blue flex items-center justify-center h-screen">
      <CreateAssessment displayQuestions={displayQuestions}/>
      <ChooseQuestions topics={selectedFields}/>
    </div>
  );
}

export default App;
