import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../calculator/Calculator';

describe('App component', () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<App />)));

	it('should match the snapshot', () => expect(wrapper).toMatchSnapshot());

	it('should render a <Provider />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render a <div />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render a <header />', () => {
		expect(wrapper.find('header').length).toEqual(1);
	});

	it('should render the Logo', () => {
		expect(wrapper.find('.App-logo').length).toEqual(1);
	});

	it('should render the Calculator Component', () => {
		expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
	});
});
