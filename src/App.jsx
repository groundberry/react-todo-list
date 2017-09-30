import React, { Component } from 'react';
import Modal from './Modal';
import Form from './Form';
import Tasks from './Tasks';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        name: '',
        deadline: '',
        completed: false,
      },
      tasks: [],
      isModalVisible: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(changes) {
    this.setState(prevState => ({
      task: {
        ...prevState.task,
        ...changes,
      },
    }));
  }

  handleSubmit() {
    this.setState(prevState => ({
      task: {
        name: '',
        deadline: '',
        completed: false,
      },
      tasks: prevState.tasks.concat(prevState.task),
    }));
  }

  toggleModal() {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">To-Do list</h1>
        </header>
        {this.state.isModalVisible
          ? <Modal
            task={this.state.task}
            onClose={this.toggleModal}
          />
          : <Form
            task={this.state.task}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        }
        {this.state.tasks.length !== 0
          ? <Tasks
            tasks={this.state.tasks}
            onClick={this.toggleModal}
          />
          : ''
        }
      </div>
    );
  }
}

export default App;
