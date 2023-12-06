//import './Modal.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({isOpen, setIsOpen}) => {
  useEffect(() => {
    if (isOpen) {
      console.log("Modal open")
    }
  }, [isOpen]);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/assessment-draft")
  }
  
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md max-w-2xl">
            <h5 className="text-lg text-left font-bold pb-2">
              Would you like to continue to the assessment page or add more questions?
            </h5>
            <div className="flex justify-start gap-10">
              <button
                className="text-base text-indigo-400"
                onClick={() => setIsOpen(false)}
              >
                Add more questions
              </button>
              
                <button
                  className="text-base text-indigo-400"
                  onClick={ handleNavigation }
                >
                  Continue to assessment page
                </button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Modal;
