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

  const renderSubTopics = subTopics.map((subTopic, index) => (
    <div
      key={index}
      className="flex justify-center place-items place-items-center bg-white text-blue text-slate-500 text-sm  h-11 w-56 border-solid border-slate-500 border rounded-full hover:bg-slate-200 hover:cursor-pointer hover:text-white w-2/3"
    >
      <label htmlFor="checkbox">
        {subTopic.name}
      </label>
      <input
        type="checkbox"
        id={subTopic.name}
        value={subTopic.name}
        defaultChecked={false}
        onChange={() => handleChange(subTopic)}
        //className="opacity-0"
      />
    </div>
  ));
  return (
    <article className="text-center flex flex-col justify-evenly items-center bg-white rounded-xl w-72 h-80">
      <h3 className="my-1 font-semibold text-xl">{subject}</h3>
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
