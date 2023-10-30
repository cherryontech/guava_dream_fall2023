import React from "react";

const AssessmentTopics = ({subject, questions}) => {
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    
    const renderQuestions = questions.map((question, index) => {
        return (
            <div key={index}>
                <label htmlFor="checkbox">{question.name}</label>
                    <input
                    type="checkbox"
                    id="checkbox"
                    key={index}
                    value={question.name}
                    defaultChecked={false}
                    onChange={(event) => handleChange(event)}
                />
            </div>
        )
    })
    return (
            <article>
                <h3>{subject}</h3>
                {renderQuestions}
            </article>
    )
}

export default AssessmentTopics;