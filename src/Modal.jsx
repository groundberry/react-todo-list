import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => {
  const { task, onSave } = props;

  return (
    <div className="Modal__backdrop">
      <div className="Modal__body">
        {task.name}
      </div>
      <div className="Modal__footer">
        <button
          className="Modal__save_button"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    deadline: PropTypes.date,
    completed: PropTypes.bool,
  }),
  onSave: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  task: PropTypes.shape({
    name: '',
    deadline: '',
    completed: false,
  }),
};

export default Modal;
