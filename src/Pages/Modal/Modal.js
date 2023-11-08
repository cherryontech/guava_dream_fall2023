import './Modal.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Modal = ({ setIsOpen }) => {
  return (
  <section>
    <div className=".darkBG" onClick={() => setIsOpen(false)} />
      <div className=".centered">
        <div className=".modal">
          <div className=".modalHeader">
            <h5 className=".heading">
              Would you like to continue to accessment page or add more questions?
            </h5>
          </div>
          <button className=".closeBtn" onClick={() => setIsOpen(false)}>
            Add more questions
          </button>
          <Link to={"assessment-draft"}>
            <button onClick={() => setIsOpen(false)}>Continue to assessment page</button>
          </Link>
        </div>
      </div>
  </section>
)
};

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Modal;
