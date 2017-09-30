import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Task from './Task';

Enzyme.configure({ adapter: new Adapter() });


describe('<Task />', () => {
  it('shows the name of the task', () => {
    const wrapper = shallow(<Task name="Foo" />);
    expect(wrapper.text()).toContain('Foo');
  });

  it('shows the deadline of the task', () => {
    const wrapper = shallow(<Task deadline={new Date('2017-08-17').toString()} />);
    expect(wrapper.text()).toContain(new Date('2017-08-17').toString());
  });

  it('shows if the task is completed', () => {
    const wrapper = shallow(<Task completed />);
    expect(wrapper.text()).toContain('Completed');
  });
});