import React from "react";
import AssessmentTopics from "./AssessmentTopics";

const CreateAssessment = () => {
    return (
        <section className="create-assessment-container">
            <div>
                <h3>Create Assessment</h3>
                <p>Select what you want to discover about you team</p>
            </div>
            <section className="assessment-selection-container">
                <AssessmentTopics />
            </section>
        </section>
    )
}

export default CreateAssessment;