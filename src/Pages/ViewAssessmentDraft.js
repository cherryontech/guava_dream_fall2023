import PropTypes from 'prop-types';
import { Slider } from '@mui/material';

const ViewAssessmentDraft = ({ assessmentQuestions, deleteQuestion }) => {
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

  const valuetext = (value) => `${value}`;

  const displayAssessmentQuestions = assessmentQuestions.map((question, index) => (
    <div key={index + 1}>
      <h3>{question.name}</h3>
      <h4>{index + 1}/{assessmentQuestions.length + 1}</h4>
      <Slider
        aria-label="Always visible"
        defaultValue={3}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="on"
        marks={marks}
      />
      <button type="button" onClick={() => deleteQuestion(question.id)}>Delete Question</button>
    </div>
  ));

  return (
    <>
      <p>ViewAssessmentDraft</p>
      {displayAssessmentQuestions}
      <button>Publish assessment</button>
    </>
  );
};

ViewAssessmentDraft.propTypes = {
  assessmentQuestions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteQuestion: PropTypes.func.isRequired,
};

export default ViewAssessmentDraft;

