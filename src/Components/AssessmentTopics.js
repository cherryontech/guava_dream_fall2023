import React from "react";

const AssessmentTopics = ({ subject, subTopics, addSelectedTopics}) => {
  const handleChange = (subTopic) => {
    const selectedTopic = {
      name: subTopic.name,
      subject: subject,
      questions: subTopic.inquiries,
    };
    addSelectedTopics(selectedTopic);
  };



    const renderSubTopics = subTopics.map((subTopic, index) => {
        return (
        <div key={index} 
        className="bg-white text-blue border-solid border-blue border-2 rounded-lg hover:bg-blue hover:cursor-pointer hover:text-white w-2/3">
            <label htmlFor="checkbox">
                {subTopic.name}
            </label>
            <input
                type="checkbox"
                id="checkbox"
                key={index}
                value={subTopic}
                defaultChecked={false}
                onChange={() => handleChange(subTopic)}
                // className="opacity-0"
            />
        </div>
        )
    })
    return (
    <article className="p-3.5 text-center flex flex-col justify-evenly items-center bg-white rounded-xl">
        <h3 className="my-1 font-semibold">{subject}</h3>
            {renderSubTopics}
    </article>
    )
}

export default AssessmentTopics;