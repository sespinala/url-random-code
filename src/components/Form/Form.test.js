import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Form from './Form';

configure({ adapter: new Adapter() });

describe('App component testing', () => {
  it('Renders div', () => {
    const wrapper = shallow(<Form />); 
    const expectedContent = <div></div>;
    expect(wrapper.contains(expectedContent)).to.equal(true);
  });
});