import PropTypes from 'prop-types';

const Questions = ({ questions, targetedTopic, addQuestionsToAssessment }) => {
  const displayQuestions = questions.map((question) => (
    <article className="p-3.5 text-center flex flex-col justify-evenly items-center bg-white rounded-xl" key={Date.now()}>
      <h3 className="my-1 font-semibold">{question.name}</h3>
      <button type="button" onClick={() => addQuestionsToAssessment(question)}>Choose Question</button>
      <p>Brief description here</p>
      <p>{targetedTopic}</p>
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
