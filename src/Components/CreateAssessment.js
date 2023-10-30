import React from "react";
import AssessmentTopics from "./AssessmentTopics";
import topicsData from "../data/topics";

const CreateAssessment = () => {
    const topicsMap = topicsData.map((topic, index) => {
        return (
            <AssessmentTopics 
                subject={topic.name}
                id={topic.id}
                questions={topic.questions}
                key={index}
            />
        )
    })

        const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log('Form Handler', e.target.value)
    }
    return (
        <section className="create-assessment-container">
            <div>
                <h3>Create Assessment</h3>
                <p>Select what you want to discover about you team</p>
            </div>
            <section className="assessment-selection-container">
                <form onSubmit={(e )=> formSubmitHandler(e)}>
                    {topicsMap}
                <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    )
}

export default CreateAssessment;