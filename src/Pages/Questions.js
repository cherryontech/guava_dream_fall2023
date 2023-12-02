import PropTypes from 'prop-types';

const Questions = ({ questions, targetedTopic, addQuestionsToAssessment }) => {
  const displayQuestions = questions.map((question, index) => (
    <article className="p-3 text-left flex flex-col gap-6 bg-white rounded-xl w-64 h-72" key={`${question.name}-${index}`}>
      <div className='flex gap-24'>
        <h3 className="my-1 text-lg font-bold">{question.name}</h3>
        <button className="flex justify-center items-center border border-indigo-400 rounded-full w-6 h-6 text-indigo-400  text-2xl mt-2 " type="button" onClick={() => addQuestionsToAssessment(question)}>+</button>
      </div>
      <p>Brief description here</p>
      <p className='border rounded-full w-24 border-black font-bold text-sm p-2 text-center'>{targetedTopic}</p>
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
