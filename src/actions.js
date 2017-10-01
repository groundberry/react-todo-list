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
