import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
  let task;
  let onChangeSpy;
  let onSubmitSpy;
  let onCloseSpy;
  let wrapper;

  beforeEach(() => {
    task = {
      name: 'Foo',
      deadline: '',
      completed: true,
    };
    onChangeSpy = jest.fn();
    onSubmitSpy = jest.fn();
    onCloseSpy = jest.fn();
    wrapper = shallow(<Modal
      task={task}
      onChange={onChangeSpy}
      onSubmit={onSubmitSpy}
      onClose={onCloseSpy}
    />);
  });

  it('renders a modal when isModalVisible is true', () => {
    expect(wrapper.find('.Modal__body')).toHaveLength(1);
  });
});
