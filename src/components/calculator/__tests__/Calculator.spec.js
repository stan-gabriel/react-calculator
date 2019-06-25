import React from 'react';
import { shallow } from 'enzyme';
import { PureCalculator } from '../Calculator';
import Display from '../../display/Display'
import {
	CALCULATE_PERCENTAGE,
	CALCULATE_RESULT,
	CHANGE_SIGN,
	CLEAR_ALL,
	OPERATION,
	VALUE
} from "../../../reducers/types";

import { CalculatorOperations } from '../../../utils/constants'

describe('Calculator component', () => {
	let wrapper;

	beforeEach(() => (wrapper = shallow(<PureCalculator/>)));
	test('should match the snapshot', () => expect(wrapper).toMatchSnapshot());

	test('instance perform action does the right thing', () => {
		const changeSignMock = jest.fn();
		const clearAllMock = jest.fn();
		const addOperationTypeMock = jest.fn();
		const calculateResultMock = jest.fn();
		const calculatePercentageMock = jest.fn();
		const addSecondValueMock = jest.fn();
		wrapper = shallow(<PureCalculator changeSign={changeSignMock} clearAll={clearAllMock}
		                                  addOperationType={addOperationTypeMock} calculateResult={calculateResultMock}
		                                  calculatePercentage={calculatePercentageMock}
		                                  addFirstValue={addSecondValueMock}/>);
		const instance = wrapper.instance();
		instance.performAction({meaning: CHANGE_SIGN})();
		expect(changeSignMock.mock.calls).toHaveLength(1);
		instance.performAction({meaning: CLEAR_ALL})();
		expect(clearAllMock.mock.calls).toHaveLength(1);
		instance.performAction({meaning: OPERATION, value: 1, action: '+'})();
		expect(addOperationTypeMock.mock.calls).toHaveLength(1);
		expect(addOperationTypeMock.mock.calls[0][0]).toBe(1);
		expect(addOperationTypeMock.mock.calls[0][1]).toBe('+');
		instance.performAction({meaning: CALCULATE_RESULT})();
		expect(calculateResultMock.mock.calls).toHaveLength(1);
		instance.performAction({meaning: CALCULATE_PERCENTAGE})();
		expect(calculatePercentageMock.mock.calls).toHaveLength(1);
		instance.performAction({meaning: VALUE})();
		expect(addSecondValueMock.mock.calls).toHaveLength(1);
	});

	test('instance handleKeyDown does the right thing', () => {
		const calculateResultMock = jest.fn();
		const addFirstValuetMock = jest.fn();
		const addOperationTypeMock = jest.fn();
		const calculatePercentageMock = jest.fn();
		const clearAllMock = jest.fn();
		wrapper = shallow(<PureCalculator calculateResult={calculateResultMock} addFirstValue={addFirstValuetMock}
		                                  addOperationType={addOperationTypeMock} calculatePercentage={calculatePercentageMock} clearAll={clearAllMock}/>);
		const instance = wrapper.instance();
		instance.handleKeyDown({key: 'Enter'});
		expect(calculateResultMock.mock.calls).toHaveLength(1);
		instance.handleKeyDown({key: '1'});
		expect(addFirstValuetMock.mock.calls).toHaveLength(1);
		instance.handleKeyDown({key:'+', action: CalculatorOperations['+']});
		expect(addFirstValuetMock.mock.calls).toHaveLength(1);
		expect(addOperationTypeMock.mock.calls[0][0]).toBe('+');
		expect(addOperationTypeMock.mock.calls[0][1]).toBe(CalculatorOperations['+']);
		instance.handleKeyDown({key:'%'});
		expect(calculatePercentageMock.mock.calls).toHaveLength(1);
		instance.handleKeyDown({key: 'Backspace'});
		expect(clearAllMock.mock.calls).toHaveLength(1);
	});

	test('renderButton function check', () => {
		const spy = jest.spyOn(wrapper.instance(), 'renderButton');
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.instance().forceUpdate();
		expect(spy).toHaveBeenCalledTimes(19);
	});

	test('renderRow function check', () => {
		const spy = jest.spyOn(wrapper.instance(), 'renderRow');
		expect(spy).toHaveBeenCalledTimes(0);
		wrapper.instance().forceUpdate();
		expect(spy).toHaveBeenCalledTimes(5);
	});

	test('should render a <div />', () => {
		expect(wrapper.find('div').length).toEqual(6);
	});

	test('should render the container', () => {
		expect(wrapper.find('.Calculator').length).toEqual(1);
	});

	test('should render the Display Component', () => {
		expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
	});
});

