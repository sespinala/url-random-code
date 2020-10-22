import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App component testing', () => {
  it('Renders text', () => {
    const wrapper = shallow(<App />); 
    const expectedContent = <div>Hi</div>;
    expect(wrapper.contains(expectedContent)).to.equal(true);
  });
});