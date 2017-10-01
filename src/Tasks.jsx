import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './Tasks.css';

function Tasks(props) {
  return (
    <ul className="Tasks__container">
      {props.tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          name={task.name}
          deadline={task.deadline}
          completed={task.completed}
          onClick={props.onClick}
        />
      ))}
    </ul>
  );
}

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    deadline: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired),
  onClick: PropTypes.func.isRequired,
};

Tasks.defaultProps = {
  tasks: [],
};
