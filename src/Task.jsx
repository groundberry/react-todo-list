import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

class Task extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    const { name, deadline, completed } = this.props;

    return (
      <li className="Task">
        <div
          className="Task__name"
        >
          <button
            className="Task__name_button"
            onClick={this.handleClick}
          >
            {name}
          </button>
        </div>
        <div
          className="Task__deadline"
        >
          {deadline == null
            ? ''
            : deadline.toString()
          }
        </div>
        <div
          className="Task__status"
        >
          {completed
            ? 'Completed'
            : 'Pending'
          }
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  deadline: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Task.defaultProps = {
  index: null,
  name: null,
  deadline: null,
  completed: false,
};

export default Task;
