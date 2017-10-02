import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';
import Tasks from './Tasks';

const sampleTasks = [
  {
    name: 'Foo',
  },
  {
    name: 'Bar',
  },
];

describe('<Tasks />', () => {
  it('renders a list of tasks', () => {
    const onClickEditSpy = jest.fn();
    const onClickDeleteSpy = jest.fn();
    const wrapper = shallow(<Tasks
      tasks={sampleTasks}
      onClickEdit={onClickEditSpy}
      onClickDelete={onClickDeleteSpy}
    />);
    expect(wrapper.find(Task)).toHaveLength(2);
  });
});
