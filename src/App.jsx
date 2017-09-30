import React, { Component } from 'react';
import Form from './Form';
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">To-Do list</h1>
        </header>
        <Form
          task={this.state.task}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
