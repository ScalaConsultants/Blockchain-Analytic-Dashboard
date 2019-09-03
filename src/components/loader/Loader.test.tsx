import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('should render', () => {
    const wrapper = shallow(<Loader/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render only once', () => {
    const wrapper = shallow(<Loader/>);
    expect(wrapper).toHaveLength(1)
  });

  it('should render with proper class name', () => {
    const wrapper = shallow(<Loader/>);
    expect(wrapper.hasClass('loader-wrapper')).toEqual(true)
  });
});