import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Form from './Form';
import Tasks from './Tasks';

const sampleTasks = [
  {
    name: 'Foo',
  },
  {
    name: 'Bar',
  },
];
describe('<App />', () => {
  it('renders a form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('renders a list of tasks when there are tasks', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      tasks: sampleTasks,
    });
    expect(wrapper.find(Tasks)).toHaveLength(1);
  });

  it('does not render a list of tasks when there are not tasks', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      tasks: [],
    });
    expect(wrapper.find(Tasks)).toHaveLength(0);
  });
});
