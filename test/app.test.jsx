import React from 'react';
import App from '../src/components/App';
import { shallow } from './enzyme';

describe('should properly render App page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  // test('renders correctly enzyme', () => {
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });

  test('contains a container for title and buttons', () => {
    expect(wrapper.find('Container')).toHaveLength(1);
  });

  test('contains two titles and two buttons', () => {
    expect(wrapper.find('h3')).toHaveLength(2);
    expect(wrapper.find('Button')).toHaveLength(2);
  });

});
