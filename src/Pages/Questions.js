import PropTypes from 'prop-types';
import { useState } from "react";

const Questions = ({ questions, targetedTopic, addQuestionsToAssessment }) => {
  const [clickedIndexes, setClickedIndexes] = useState([]);

  const handleButtonClick = (question, index) =>{
    
    
    setClickedIndexes((prevIndexes) => {
      const isIndexClicked = prevIndexes.includes(index);

      if (isIndexClicked) {
        return prevIndexes.filter((clickedIndex) => clickedIndex !== index);
      } else {
        return [...prevIndexes, index];
      }

    });
    addQuestionsToAssessment(question);
   
  };



  const displayQuestions = questions.map((question, index) => (
    <article className="p-3 text-left flex flex-col gap-6 bg-white rounded-xl w-64 h-72" key={`${question.name}-${index}`}>
      <div className='flex gap-6'>
        <h3 className="text-base w-3/4">{question.name}</h3>
        <button 
        type="button" 
        onClick={() => handleButtonClick(question, index)}
        className="flex justify-center items-center border border-indigo-400 rounded-full w-7 h-7 text-indigo-400 text-2xl mt-1 pb-1.5"
        style={{
          backgroundColor: clickedIndexes.includes(index)
            ? '#7894FF' 
            : 'transparent', 
          color : clickedIndexes.includes(index) ? "#fffff" : "#1F2937"
        }}
        >
          +
        </button>
      </div>
      <div className='flex absolute pt-48'>
        <p className='border rounded-full w-36 border-black font-bold text-sm p-2 text-center'>{targetedTopic}</p>
      </div>
    </article>
  ));

  return (
    <>
      {displayQuestions}
    </>
  );
};

Questions.propTypes = {
  addQuestionsToAssessment: PropTypes.func.isRequired,
  targetedTopic: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Questions;
