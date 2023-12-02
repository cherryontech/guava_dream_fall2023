import './Modal.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Modal = ({ setIsOpen }) => {
  return (
  <section className='relative top-2 mx-auto p-5 flex flex-col justify-items-center self-center items-center h-28  max-w-fit w-2/5 bg-white border rounded-full p-4 '>
    <div onClick={() => setIsOpen(false)} />
      
            <h5 className="text-lg text-left font-bold pb-2">
              Would you like to continue to accessment page or add more questions?
            </h5>
          <div className='flex justify-start gap-10'>
            <button className="text-base text-indigo-400" onClick={() => setIsOpen(false)}>
              Add more questions
            </button>
            <Link to={"assessment-draft"}>
              <button className="text-base text-indigo-400" onClick={() => setIsOpen(false)}>Continue to assessment page</button>
            </Link>
          </div>
  
  </section>
)
};

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Modal;
