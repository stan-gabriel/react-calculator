import React from 'react';
import { shallow } from 'enzyme';
import Display from '../Display';

describe('Display component', () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<Display />)));
	test('should match the snapshot', () => expect(wrapper).toMatchSnapshot());

	test('adjustText function check', () => {
		const spy = jest.spyOn(wrapper.instance(), 'adjustText');
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.instance().adjustText();
		expect(spy).toHaveBeenCalledTimes(1);
		expect(wrapper.instance().adjustText(1)).toEqual(3)
	});

	test('should render a <div />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	test('should render the container', () => {
		expect(wrapper.find('.Display').length).toEqual(1);
	});
});
