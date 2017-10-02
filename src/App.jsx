import React, { Component } from 'react';
import {
  showModal,
  hideModal,
  addTask,
  editTask,
  deleteTask,
} from './actions';
import Modal from './Modal';
import Form from './Form';
import Tasks from './Tasks';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      editedTask: {
        name: '',
        deadline: '',
        completed: false,
      },
      selectedTaskIndex: null,
      isModalVisible: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  handleChange(changes) {
    this.setState(prevState => ({
      editedTask: {
        ...prevState.editedTask,
        ...changes,
      },
    }));
  }

  handleAddTask(editedTask) {
    this.setState(addTask.bind(this, editedTask));
  }

  handleEditTask(selectedTaskIndex) {
    this.setState(editTask.bind(this, selectedTaskIndex));
  }

  handleDeleteTask(selectedTaskIndex) {
    this.setState(deleteTask.bind(this, selectedTaskIndex));
  }

  handleShowModal(selectedTaskIndex) {
    this.setState(showModal.bind(this, selectedTaskIndex));
  }

  handleHideModal() {
    this.setState(hideModal.bind(this));
  }

  render() {
    const { tasks, editedTask } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">To-Do list</h1>
        </header>
        {this.state.isModalVisible
          ? <Modal
            task={editedTask}
            onChange={this.handleChange}
            onSubmit={this.handleEditTask}
            onClose={this.handleHideModal}
          />
          : <Form
            task={editedTask}
            onChange={this.handleChange}
            onSubmit={this.handleAddTask}
          />
        }
        {this.state.tasks.length !== 0
          ? <Tasks
            tasks={tasks}
            onClickEdit={this.handleShowModal}
            onClickDelete={this.handleDeleteTask}
          />
          : ''
        }
      </div>
    );
  }
}

export default App;
