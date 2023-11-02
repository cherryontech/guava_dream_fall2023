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
        <section>
            <div className="bg-white w-2/3 rounded-xl py-3.5 px-3 m-4">
                <h3 className="text-blue">Create Assessment</h3>
                <p>Select what you want to discover about you team</p>
            </div>
            {/* <section className="assessment-selection-container"> */}
                <form 
                className="grid grid-cols-3 gap-4 h-full m-4"
                onSubmit={(e )=> formSubmitHandler(e)}>
                    {topicsMap}
                <button 
                type="submit"
                className="bg-white text-blue rounded-md shadow-lg absolute top-0 right-0 h-16 w-16"
                    >Submit
                </button>
                </form>
            {/* </section> */}
        </section>
    )
}

export default CreateAssessment;