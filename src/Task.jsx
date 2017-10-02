import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

class Task extends Component {
  constructor() {
    super();

    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickEdit() {
    this.props.onClickEdit(this.props.index);
  }

  handleClickDelete() {
    this.props.onClickDelete(this.props.index);
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
            onClick={this.handleClickEdit}
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
        <div
          className="Task__delete"
        >
          <button
            className="Task__delete_button"
            onClick={this.handleClickDelete}
          >
            Delete
          </button>
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
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  index: null,
  name: null,
  deadline: null,
  completed: false,
};

export default Task;
