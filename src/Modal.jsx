import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import './Modal.css';

const Modal = (props) => {
  const { task, onChange, onSubmit } = props;

  return (
    <div className="Modal__backdrop">
      <div className="Modal__body">
        <Form
          task={task}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

Modal.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    deadline: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  task: PropTypes.shape({
    name: '',
    deadline: '',
    completed: false,
  }),
};

export default Modal;
