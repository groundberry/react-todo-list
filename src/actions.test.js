import {
  showModal,
  hideModal,
  addTask,
  editTask,
  deleteTask,
} from './actions';

describe('showModal', () => {
  const prevState = {
    tasks: [
      {
        name: 'Foo',
        deadline: '2017-08-17',
        completed: true,
      },
      {
        name: 'Bar',
        deadline: '2017-08-19',
        completed: false,
      },
    ],
    selectedTaskIndex: 0,
    isModalVisible: false,
  };

  const newState = {
    editedTask: {
      name: 'Foo',
      deadline: '2017-08-17',
      completed: true,
    },
    selectedTaskIndex: 0,
    isModalVisible: true,
  };

  it('changes the state of the modal isModalVisible to true', () => {
    expect(showModal(prevState.selectedTaskIndex, prevState)).toEqual(newState);
  });
});

describe('hideModal', () => {
  const prevState = {
    selectedTaskIndex: null,
    isModalVisible: true,
  };

  const newState = {
    selectedTaskIndex: null,
    isModalVisible: false,
  };

  it('changes the state of the modal isModalVisible to false', () => {
    expect(hideModal(prevState)).toEqual(newState);
  });
});

describe('addTask', () => {
  const prevState = {
    tasks: [
      {
        name: 'Bar',
        deadline: '2017-08-19',
        completed: false,
      },
    ],
    editedTask: {
      name: 'Foo',
      deadline: '2017-08-17',
      completed: true,
    },
  };

  const newState = {
    tasks: [
      {
        name: 'Bar',
        deadline: '2017-08-19',
        completed: false,
      },
      {
        name: 'Foo',
        deadline: '2017-08-17',
        completed: true,
      },
    ],
    editedTask: {
      name: '',
      deadline: '',
      completed: false,
    },
  };

  it('adds a new task to the array of tasks', () => {
    expect(addTask(prevState.ditedTask, prevState)).toEqual(newState);
  });
});

describe('editTask', () => {
  const prevState = {
    tasks: [
      {
        name: 'Bar',
        deadline: '2017-08-19',
        completed: false,
      },
      {
        name: 'Foo',
        deadline: '2017-08-17',
        completed: true,
      },
    ],
    editedTask: {
      name: 'Foo',
      deadline: '2017-08-17',
      completed: false,
    },
    selectedTaskIndex: 1,
    isModalVisible: true,
  };

  const newState = {
    tasks: [
      {
        name: 'Bar',
        deadline: '2017-08-19',
        completed: false,
      },
      {
        name: 'Foo',
        deadline: '2017-08-17',
        completed: false,
      },
    ],
    editedTask: {
      name: '',
      deadline: '',
      completed: false,
    },
    selectedTaskIndex: null,
    isModalVisible: false,
  };

  it('edits a task from the array of tasks', () => {
    expect(editTask(prevState.selectedTaskIndex, prevState)).toEqual(newState);
  });
});

describe('deleteTask', () => {
  const prevState = {
    tasks: [
      {
        name: 'Bar',
        deadline: '2017-08-19',
        completed: false,
      },
      {
        name: 'Foo',
        deadline: '2017-08-17',
        completed: true,
      },
    ],
    selectedTaskIndex: 1,
  };

  const newState = {
    tasks: [
      {
        name: 'Bar',
        deadline: '2017-08-19',
        completed: false,
      },
    ],
  };

  it('deletes a task from the array of tasks', () => {
    expect(deleteTask(prevState.selectedTaskIndex, prevState)).toEqual(newState);
  });
});
