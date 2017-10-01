import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

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
    const { task } = this.props;

    return (
      <form
        className="Form__container"
      >
        <label
          className="Form__label_container"
        >
          <h2 className="Form__label">
            Name:
          </h2>
          <input
            className="Form__input"
            name="name"
            type="text"
            value={task.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label
          className="Form__label_container"
        >
          <h2 className="Form__label">
            Deadline:
          </h2>
          <input
            className="Form__input"
            name="deadline"
            type="date"
            value={task.deadline}
            onChange={this.handleDeadlineChange}
          />
        </label>
        <label
          className="Form__label_container"
        >
          <h2 className="Form__label Form__label_inline">
            Completed:
          </h2>
          <input
            className="Form__input Form__checkbox"
            name="completed"
            type="checkbox"
            checked={task.completed}
            onChange={this.handleCompletedChange}
          />
        </label>
        <input
          className="Form__button"
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
