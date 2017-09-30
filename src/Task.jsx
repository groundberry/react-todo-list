import React from 'react';
import PropTypes from 'prop-types';

function Task(props) {
  const { name, deadline, completed, onClick } = props;

  return (
    <li className="Task">
      <a
        href="#"
        className="Task__link"
        onClick={onClick}
      >
        {name}
      </a>
      {deadline == null
        ? ''
        : deadline.toString()
      }
      {completed
        ? 'Completed'
        : 'Pending'
      }
    </li>
  );
}

Task.propTypes = {
  name: PropTypes.string,
  deadline: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Task.defaultProps = {
  name: null,
  deadline: null,
  completed: false,
};

export default Task;
