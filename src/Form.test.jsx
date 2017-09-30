import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

const sampleTask = {
  name: 'Foo',
  deadline: '2017-08-17',
  completed: false,
};

describe('<Form />', () => {
  let wrapper;
  let onChangeSpy;
  let onSubmitSpy;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    onSubmitSpy = jest.fn();
    wrapper = shallow(<Form
      task={sampleTask}
      onChange={onChangeSpy}
      onSubmit={onSubmitSpy}
    />);
  });

  it('renders an input field for the name', () => {
    expect(wrapper.find('input[name="name"][type="text"][value="Foo"]')).toHaveLength(1);
  });

  it('renders an input field for the deadline', () => {
    expect(wrapper.find('input[name="deadline"][type="date"][value="2017-08-17"]')).toHaveLength(1);
  });

  it('renders a checkbox field for the user to mark if the task is completed or not', () => {
    expect(wrapper.find('input[name="completed"][type="checkbox"][checked=false]')).toHaveLength(1);
  });

  it('renders a submit button', () => {
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
  });

  it('calls the onChange callback when the user enters a name', () => {
    wrapper.find('input[name="name"][type="text"]').simulate('change', {
      target: { value: 'Bar' },
    });
    expect(onChangeSpy).toHaveBeenCalledWith({
      name: 'Bar',
    });
  });

  it('calls the onChange callback when the user enters a deadline', () => {
    wrapper.find('input[name="deadline"][type="date"]').simulate('change', {
      target: { value: '2017-02-20' },
    });
    expect(onChangeSpy).toHaveBeenCalledWith({
      deadline: '2017-02-20',
    });
  });

  it('calls the onChange callback when the user marks the task as completed', () => {
    wrapper.find('input[name="completed"][type="checkbox"]').simulate('change', {
      target: { checked: true },
    });
    expect(onChangeSpy).toHaveBeenCalledWith({
      completed: true,
    });
  });

  it('calls the onSubmit callback when the submit button is clicked', () => {
    wrapper.find('input[type="submit"]').simulate('click', {
      preventDefault: () => {},
    });
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
