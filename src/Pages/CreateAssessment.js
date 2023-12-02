import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AssessmentTopics from './AssessmentTopics';
import topicsData from '../data/topics';
import SideMenu from '../SideMenu';

const CreateAssessment = ({ displayQuestions }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigate = useNavigate();

  const addSelectedTopics = (topic) => {
    const newTopics = [...selectedTopics, topic];
    setSelectedTopics(newTopics);
  };

  const topicsMap = topicsData.map((topic) => (
    <AssessmentTopics
      subject={topic.name}
      id={topic.id}
      subTopics={topic.subTopics}
      key={topic.id}
      addSelectedTopics={addSelectedTopics}
    />
  ));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    displayQuestions(selectedTopics);
    navigate("/choose-assessment-questions");
  };

  return (
    
    <section className='flex flex-wrap '>
      <SideMenu />
      <div className='flex flex-col bg-indigo-100 p-3'>
        <div className="bg-white h-20 w-2/3 rounded-xl py-3.5 px-3 m-4">
          <h3 className="text-indigo-400 text-xl font-semibold ">Create Assessment</h3>
          <p className='text-xs mt-2'>Select what you want to discover about you team</p>
        </div>
      
      <form
        className="grid grid-cols-3 gap-4 h-full m-4"
        onSubmit={(e) => formSubmitHandler(e)}
      >
        {topicsMap}
        <button
          type="submit"
          className="bg-white text-slate-500 rounded-full border-slate-500 border shadow-lg absolute top-40 right-24 h-14 w-24"
          >
          Submit
        </button>
      </form>
      </div>
    </section>
  );
};

CreateAssessment.propTypes = {
  displayQuestions: PropTypes.func.isRequired,
};

export default CreateAssessment;
