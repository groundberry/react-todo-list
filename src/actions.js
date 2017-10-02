export function showModal(selectedTaskIndex, prevState) {
  return {
    editedTask: prevState.tasks[selectedTaskIndex],
    selectedTaskIndex,
    isModalVisible: true,
  };
}

export function hideModal() {
  return {
    selectedTaskIndex: null,
    isModalVisible: false,
  };
}

export function addTask(editedTask, prevState) {
  const newTasks = prevState.tasks.concat(prevState.editedTask);
  return {
    tasks: newTasks,
    editedTask: {
      name: '',
      deadline: '',
      completed: false,
    },
  };
}

export function editTask(selectedTaskIndex, prevState) {
  const newTasks = [...prevState.tasks];
  newTasks[prevState.selectedTaskIndex] = prevState.editedTask;
  return {
    tasks: newTasks,
    editedTask: {
      name: '',
      deadline: '',
      completed: false,
    },
    selectedTaskIndex: null,
    isModalVisible: false,
  };
}

export function deleteTask(selectedTaskIndex, prevState) {
  const newTasks = [...prevState.tasks];

  newTasks.splice(selectedTaskIndex, 1);

  return {
    tasks: newTasks,
  };
}
