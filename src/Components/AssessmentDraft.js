import React from 'react';
import { Slider } from '@mui/material';

const AssessmentDraft = ({ assessmentQuestions, deleteQuestion }) => {
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
  ];

  const valuetext = (value) => {
    return `${value}`;
  };

  const displayAssessmentQuestions = assessmentQuestions.map((question, index) => {
    return (
      <div key={index}>
        <h3>{question.name}</h3>
        <Slider
          aria-label="Always visible"
          defaultValue={3}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="on"
          marks={marks}
        />
        <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
      </div>
    );
  });

  return (
    <>
      <p>AssessmentDraft</p>
      {displayAssessmentQuestions}
    </>
  );
};

export default AssessmentDraft;
