import { showModal, hideModal } from './actions';

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
