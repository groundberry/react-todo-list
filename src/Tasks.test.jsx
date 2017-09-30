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
    const onClickSpy = jest.fn();
    const wrapper = shallow(<Tasks
      tasks={sampleTasks}
      onClick={onClickSpy}
    />);
    expect(wrapper.find(Task)).toHaveLength(2);
  });
});
