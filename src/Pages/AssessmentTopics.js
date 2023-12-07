import PropTypes from 'prop-types';
import { useState } from "react";

const AssessmentTopics = ({ subject, subTopics, addSelectedTopics }) => {
  const [clickedSubTopics, setClickedSubTopics] = useState([]);

  const handleClick = (subTopic) => {
    const selectedTopic = {
      name: subTopic.name,
      subject: { subject },
      questions: subTopic.inquiries,
    };
    addSelectedTopics(selectedTopic);
    console.log("Added!")
  

     setClickedSubTopics((prevClickedSubTopics) => {
      const isAlreadyClicked = prevClickedSubTopics.includes(subTopic.name);

      if (isAlreadyClicked) {
        return prevClickedSubTopics.filter((name) => name !== subTopic.name);
      } else {
        return [...prevClickedSubTopics, subTopic.name];
      }
    });
  };



  const renderSubTopics = subTopics.map((subTopic, index) => (
    <div
      key={index}
      className={`flex justify-center place-items place-items-center bg-white text-blue text-slate-500 text-sm h-11 w-56 border-solid border-slate-500 border rounded-full hover:bg-slate-200 hover:cursor-pointer hover:text-white w-2/3 ${
            clickedSubTopics.includes(subTopic.name) ? 'bg-slate-200' : ''
          }`}
    >
        <button
        type="button"
        id={subTopic.name}
        onClick={() => handleClick(subTopic)}
        className= "h-11 w-56 rounded-full"
        style={{
        backgroundColor: clickedSubTopics.includes(subTopic.name)
          ? '#7894FF' 
          : 'transparent',
        color: clickedSubTopics.includes(subTopic.name) ? '#ffffff' : '#1F2937', 
      }}
      >
        {subTopic.name}
      </button>
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

export default  AssessmentTopics 
