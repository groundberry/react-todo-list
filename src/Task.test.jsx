import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('<Task />', () => {
  let onClickSpy;
  let wrapper;

  beforeEach(() => {
    onClickSpy = jest.fn();
    wrapper = shallow(<Task
      name="Foo"
      deadline={new Date('2017-08-17').toString()}
      completed
      onClick={onClickSpy}
    />);
  });

  it('shows the name of the task', () => {
    expect(wrapper.text()).toContain('Foo');
  });

  it('shows the deadline of the task', () => {
    expect(wrapper.text()).toContain(new Date('2017-08-17').toString());
  });

  it('shows if the task is completed', () => {
    expect(wrapper.text()).toContain('Completed');
  });
});
