import React from 'react';
import { shallow } from 'enzyme';
import Button from '../KeyButton';

describe('KeyButton component', () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Button />)));

	it('should match the snapshot', () => expect(wrapper).toMatchSnapshot());

	it('should render a <button />', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});
});
