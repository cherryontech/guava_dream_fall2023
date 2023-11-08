import PropTypes from 'prop-types';

const AssessmentTopics = ({ subject, subTopics, addSelectedTopics }) => {
  const handleChange = (subTopic) => {
    const selectedTopic = {
      name: subTopic.name,
      subject: { subject },
      questions: subTopic.inquiries,
    };
    addSelectedTopics(selectedTopic);
  };

  const renderSubTopics = subTopics.map((subTopic) => (
    <div
      key={Date.now()}
      className="bg-white text-blue border-solid border-blue border-2 rounded-lg hover:bg-bluehover:cursor-pointer hover:text-white w-2/3"
    >
      <label htmlFor="checkbox">
        {subTopic.name}
      </label>
      <input
        type="checkbox"
        id="checkbox"
        value={subTopic}
        defaultChecked={false}
        onChange={() => handleChange(subTopic)}
        // className="opacity-0"
      />
    </div>
  ));
  return (
    <article className="p-3.5 text-center flex flex-col justify-evenly items-center bg-white rounded-xl">
      <h3 className="my-1 font-semibold">{subject}</h3>
      {renderSubTopics}
    </article>
  );
};

AssessmentTopics.propTypes = {
  subject: PropTypes.string.isRequired,
  subTopics: PropTypes.arrayOf(PropTypes.shape).isRequired,
  addSelectedTopics: PropTypes.func.isRequired,
};

export default AssessmentTopics;

