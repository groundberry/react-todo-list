import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Task from './Task';
import Tasks from './Tasks';

Enzyme.configure({ adapter: new Adapter() });

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
