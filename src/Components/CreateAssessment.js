import React from "react";
import AssessmentTopics from "./AssessmentTopics";
import topicsData from "../data/topics";
import { useState } from "react";


const CreateAssessment = ({displayQuestions}) => {
    const [ selectedTopics, setSelectedTopics ] = useState([]);

    const addSelectedTopics = (topic) => {
        let newTopics = [...selectedTopics, topic]       
        setSelectedTopics(newTopics)
    }

    const topicsMap = topicsData.map((topic, index) => {
    return (
        <AssessmentTopics 
            subject={topic.name}
            id={topic.id}
            subTopics={topic.subTopics}
            key={index}
            addSelectedTopics={addSelectedTopics}
        />
        )
    })

    const formSubmitHandler = (e) => {
        e.preventDefault();
        displayQuestions(selectedTopics)
    }

    return (
        <section>
            <div className="bg-white w-2/3 rounded-xl py-3.5 px-3 m-4">
                <h3 className="text-blue">Create Assessment</h3>
                <p>Select what you want to discover about you team</p>
            </div>
            <form 
            className="grid grid-cols-3 gap-4 h-full m-4"
            onSubmit={(e )=> formSubmitHandler(e)}
            >
                {topicsMap}
                <button 
                type="submit"
                className="bg-white text-blue rounded-md shadow-lg absolute top-0 right-0 h-16 w-16"
                >Submit
                </button>
            </form>
        </section>
    )
}

export default CreateAssessment;