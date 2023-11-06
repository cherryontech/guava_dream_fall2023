import './App.css';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path='/create-assessment' element={<CreateAssessment displayQuestions={displayQuestions}/>}/>
        <Route path='/choose-questions' element={<ChooseQuestions topics={selectedFields}/>} />
      </Routes>
      {/* <CreateAssessment displayQuestions={displayQuestions}/> */}
      {/* <ChooseQuestions topics={selectedFields}/> */}
    </div>
  );
}

export default App;
