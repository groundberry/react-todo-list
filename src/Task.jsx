import React from 'react';
import PropTypes from 'prop-types';

function Task(props) {
  const { name, deadline, completed } = props;

  return (
    <li>
      {name}
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
};

Task.defaultProps = {
  name: null,
  deadline: null,
  completed: false,
};

export default Task;
