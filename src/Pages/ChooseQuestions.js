import PropTypes from 'prop-types';
import Questions from './Questions';
import SideMenu from "../SideMenu.js";
import  CreateAssessmentIcon  from "../Assets/Create Assessment Icon.png"; 
import Modal from './/Modal/Modal.js';
import { useState, useEffect } from "react";


const ChooseQuestions = ({ selectedFields, addQuestionsToAssessment })  => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen after click:", isOpen);
  }, [isOpen]);
  
  const handleButtonClick = () => {
      console.log("Button");
      setIsOpen(true);
  }

  const renderQuestions = selectedFields.map((selectedField, index) => (
    <Questions
      questions={selectedField.questions}
      key={`${selectedField.name}-${index}-${Date.now()}`}
      targetedTopic={selectedField.name}
      addQuestionsToAssessment={addQuestionsToAssessment}
      />
   
  ));

  return (
    <section className='flex'>
      <SideMenu />
      <div className='flex flex-col h-screen w-full bg-indigo-100 p-3'>
         <div className="bg-white h-28 w-2/6 rounded-xl py-3.5 px-3 m-4">
          <div className='flex'>
            <img src={ CreateAssessmentIcon } alt="Icon of piece of paper with upward facing arrow" className='w-8 h-8 mr-2'/>
            <h3 className="text-slate-500 text-2xl font-semibold ">Potential Questions</h3>
          </div>
          <p className='text-sm mt-2'>Choose which questions you would like to have in your assessment</p>
        </div>
        <div className="grid w-fit md:grid-cols-3 lg:grid-cols-5 gap-12 m-4 ">
          {renderQuestions}
        </div>
        <div>
         <button
            className="bg-white text-slate-500 rounded-full border-slate-500 border shadow-lg m-4 h-14 w-36"
            onClick={handleButtonClick}
            >
            Add Questions
          </button>
          {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </section>
  );
};

ChooseQuestions.propTypes = {
  selectedFields: PropTypes.arrayOf(PropTypes.shape).isRequired,
  addQuestionsToAssessment: PropTypes.func.isRequired,
};


export default ChooseQuestions;
