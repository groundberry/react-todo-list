import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
  let task;
  let onSaveSpy;
  let wrapper;

  beforeEach(() => {
    task = {
      name: '',
      deadline: '',
      completed: false,
    };
    onSaveSpy = jest.fn();
    wrapper = shallow(<Modal
      task={task}
      onSave={onSaveSpy}
    />);
  });

  it('renders a modal when isModalVisible is true', () => {
    expect(wrapper.find('.Modal__body')).toHaveLength(1);
  });

  it('renders a save button', () => {
    expect(wrapper.find('.Modal__save_button')).toHaveLength(1);
  });

  it('calls the onSave callback when the user clicks the Save button', () => {
    wrapper.find('.Modal__save_button').simulate('click');
    expect(onSaveSpy).toHaveBeenCalled();
  });
});
