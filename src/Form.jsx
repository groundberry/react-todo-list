import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
    this.handleCompletedChange = this.handleCompletedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(evt) {
    this.props.onChange({
      name: evt.target.value,
    });
  }

  handleDeadlineChange(evt) {
    this.props.onChange({
      deadline: evt.target.value,
    });
  }

  handleCompletedChange(evt) {
    this.props.onChange({
      completed: evt.target.checked,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.props.task.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Deadline:
          <input
            name="deadline"
            type="date"
            value={this.props.task.deadline}
            onChange={this.handleDeadlineChange}
          />
        </label>
        <label>
          Completed:
          <input
            name="completed"
            type="checkbox"
            checked={this.props.task.completed}
            onChange={this.handleCompletedChange}
          />
        </label>
        <input
          type="submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

Form.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    deadline: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
