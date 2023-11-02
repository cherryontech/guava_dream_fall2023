import React from "react";

const AssessmentTopics = ({subject, questions}) => {
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    
    const renderQuestions = questions.map((question, index) => {
        return (
        <div key={index} 
        className="bg-white text-blue border-solid border-blue border-2 rounded-lg hover:bg-blue hover:cursor-pointer hover:text-white w-2/3">
            <label htmlFor="checkbox">
                {question.name}
            </label>
            <input
                type="checkbox"
                id="checkbox"
                key={index}
                value={question.name}
                defaultChecked={false}
                onChange={(event) => handleChange(event)}
                className="opacity-0"
            />
        </div>
        )
    })
    return (
    <article className="p-3.5 text-center flex flex-col justify-evenly items-center bg-white rounded-xl">
        <h3 className="my-1 font-semibold">{subject}</h3>
            {renderQuestions}
    </article>
    )
}

export default AssessmentTopics;