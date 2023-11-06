import React from "react";

const Questions = ({questions, targetedTopic}) => {
    return (
        <article className="p-3.5 text-center flex flex-col justify-evenly items-center bg-white rounded-xl">
            <h3 className="my-1 font-semibold">{questions[0]}</h3>
            <p>Brief description here</p>
            <p>{targetedTopic}</p>
    </article>
    )
}

export default Questions;