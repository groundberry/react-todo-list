import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Form from './Form';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders a form', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
