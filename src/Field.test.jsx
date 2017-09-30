import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

describe('<Field />', () => {
  let label;
  let value;
  let onChangeSpy;
  let wrapper;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    label = 'Business Name';
    value = 'DevHub';
    wrapper = shallow(<Field
      label={label}
      value={value}
      onChange={onChangeSpy}
    />);
  });

  it('renders a form field', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('renders an input field', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('calls the onChange callback when the user enters information in the field', () => {
    wrapper.find('input').simulate('change');
    expect(onChangeSpy).toHaveBeenCalled();
  });
});
