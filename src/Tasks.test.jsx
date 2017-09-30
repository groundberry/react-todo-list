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
    const wrapper = shallow(<Tasks tasks={sampleTasks} />);
    expect(wrapper.find(Task)).toHaveLength(2);
  });
});
