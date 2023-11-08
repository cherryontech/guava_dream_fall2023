import PropTypes from 'prop-types';
import Questions from './Questions';

const ChooseQuestions = ({ selectedFields, addQuestionsToAssessment }) => {
  const renderQuestions = selectedFields.map((selectedField) => (
    <Questions
      questions={selectedField.questions}
      key={Date.now()}
      targetedTopic={selectedField.name}
      addQuestionsToAssessment={addQuestionsToAssessment}
    />
  ));

  return (
    <section>
      <div className="bg-white w-2/3 rounded-xl py-3.5 px-3 m-4">
        <h3 className="text-blue">Potential Questions</h3>
        <p>Choose which questions you would like to have in your assignment</p>
      </div>
      <div className="grid grid-cols-3 gap-4 h-full m-4">
        {renderQuestions}
      </div>
    </section>
  );
};

ChooseQuestions.propTypes = {
  selectedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  addQuestionsToAssessment: PropTypes.func.isRequired,
};

export default ChooseQuestions;

