import PropTypes from 'prop-types';
import { Slider } from '@mui/material';
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

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

  const [loading, setLoading] = useState(false)


  useEffect(() => emailjs.init("zo743h247QwTwz8gU"), []);
  //... 
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_qzyuot1";
    const templateId = "template_7zacm7f";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: recipientName,
       recipient: recipientEmail
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <p>ViewAssessmentDraft</p>
      {displayAssessmentQuestions}

      <aside></aside>
      <form className="for" onSubmit={handleSubmit}>
          <h5> Who would you like to send the assessment to?</h5>
          <label htmlFor="name" aria-label="name">name*</label>
          <input
            type="text"
            placeholder="Enter recipient name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
          <label htmlFor="email" aria-label="email">email*</label>
          <input
            type="email"
            placeholder="Enter recipient email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
        />
          <button type="submit" disabled={loading}  >Publish assessment</button>
      </form>
    </>
  );
};

ViewAssessmentDraft.propTypes = {
  assessmentQuestions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteQuestion: PropTypes.func.isRequired,
};

export default ViewAssessmentDraft;
