import React from 'react';

const Questions = ({ questions, targetedTopic, addQuestionsToAssessment }) => {
  const displayQuestions = questions.map((question, index) => {
    return (
      <article className="p-3.5 text-center flex flex-col justify-evenly items-center bg-white rounded-xl" key={index}>
        <h3 className="my-1 font-semibold">{question.name}</h3>
        <button onClick={() => addQuestionsToAssessment(question)}>Choose Question</button>
        <p>Brief description here</p>
        <p>{targetedTopic}</p>
      </article>
    );
  });

  return (
    <>
      {displayQuestions}
    </>
  );
};

export default Questions;