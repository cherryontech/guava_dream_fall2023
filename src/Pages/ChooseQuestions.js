import PropTypes from 'prop-types';
import Questions from './Questions';
import SideMenu from "../SideMenu.js"

const ChooseQuestions = ({ selectedFields, addQuestionsToAssessment }) => {
  const renderQuestions = selectedFields.map((selectedField, index) => (
    <Questions
      questions={selectedField.questions}
      key={`${selectedField.name}-${index}-${Date.now()}`}
      targetedTopic={selectedField.name}
      addQuestionsToAssessment={addQuestionsToAssessment}
      />
  ));

  return (
    <section className='flex'>
      <SideMenu />
      <div className='flex flex-col bg-indigo-100 p-3'>
        <div className="bg-white h-20 w-2/3 rounded-xl py-3.5 px-3 m-4">
          <h3 className="text-indigo-400 text-xl font-semibold ">Potential Questions</h3>
          <p className='text-xs mt-2'>Choose which questions you would like to have in your assignment</p>
        </div>
        <div className="grid grid-cols-3 gap-6 h-full m-4">
          {renderQuestions}
        </div>
      </div>
    </section>
  );
};

ChooseQuestions.propTypes = {
  selectedFields: PropTypes.arrayOf(PropTypes.shape).isRequired,
  addQuestionsToAssessment: PropTypes.func.isRequired,
};

export default ChooseQuestions;
