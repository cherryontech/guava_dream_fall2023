import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "../Assets/Title Image.png";
import SideMenu from "../SideMenu"


const ViewAssessmentDraft = ({ assessmentQuestions, deleteQuestion }) => {
  



  const displayAssessmentQuestions = assessmentQuestions.map((question, index) => (
    <div className="flex flex-col mb-12"key={index + 1}>
      <h3 className='font-bold text-lg ml-10'>{question.name}</h3>
      <h4 className='text-base ml-10'>{index + 1}/{assessmentQuestions.length}</h4>
      
      
      <button className="mt-2 ml-8 rounded-full bg-white w-24 h-10 text-xs" type="button" onClick={() => deleteQuestion(question.id)}>Delete Question</button>
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
      alert("Your email has been sent!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <main className='flex'>
      <SideMenu />
      <div className="flex flex-col bg-indigo-100 w-full">
      <div className='flex flex-col bg-indigo-100'>
      <div className='flex pt-8'>
      <header className='w-96 h-32 bg-white rounded-xl ml-8 p-2'>
        <div className='flex font-bold text-xl text-lightBlue-700'>
          <img src={ Image } alt="Icon of the shadow of two people"></img>
          Title:
        </div>
        <p className='ml-2 pb-4'>Created: DATE</p>
        <p className='ml-2'>Revised: DATE</p>
      </header>
      </div> 

      <p className='font-bold  text-xl m-10'>Questions Added</p>
      
      {displayAssessmentQuestions}
      </div>

      <aside></aside>
      <div className=' flex flex-col ml-10 pb-12'>
      <form className=' flex flex-col ml-2 mt-12 ' onSubmit={handleSubmit}>
          <h5 className='font-bold italic text-lg'> Who would you like to send the assessment to?</h5>
          <label className="mt-4" htmlFor="name" aria-label="name">Recipient Name: </label>
          <input className="border-2 rounded-lg text-sm p-2 w-60 mr-12"
            type="text"
            placeholder="Enter recipient name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
          <label className="mt-4" htmlFor="email" aria-label="email">Recipient Email: </label>
          <input className="border-2 rounded-lg text-sm p-2 w-60"
            type="email"
            placeholder="Enter recipient email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
        />
          <button className="mt-8 text-white rounded-full bg-indigo-400 w-36 h-14 text-s"  type="submit" disabled={loading} >Publish assessment</button>
      </form>
      </div>
      </div>
    </main>
      
    </>
  );
};

ViewAssessmentDraft.propTypes = {
  assessmentQuestions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteQuestion: PropTypes.func.isRequired,
};

export default ViewAssessmentDraft;
