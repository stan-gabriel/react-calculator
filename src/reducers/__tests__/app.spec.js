import { INITIAL_STATE } from '../app';
import reducer from '../app';
import * as actions from '../actions';

describe('app reducer', () => {
	test('action add first value returns the right state', () => {
		expect(reducer(INITIAL_STATE, actions.addFirstValue(7))).toEqual({
			...INITIAL_STATE,
			displayValue: 7,
			firstValue: 7,
		})
	});

	test('action add second value returns the right state', () => {
		expect(reducer(INITIAL_STATE, actions.addSecondValue(3))).toEqual({
			...INITIAL_STATE,
			displayValue: '3',
			secondValue: '3',
		})
	});

	test('action add operation type returns the right state', () => {
		expect(reducer(INITIAL_STATE, actions.addOperationType('+', 'add'))).toEqual({
			...INITIAL_STATE,
			displayValue: "0",
			firstValue: "0",
			operation: "add",
		});
	});

	test('action calculate result type returns the right state', () => {
		expect(reducer(INITIAL_STATE, actions.calculateResult())).toEqual({
			...INITIAL_STATE,
		});
	});

	test('action calculate percentage returns the right state', () => {
		expect(reducer(INITIAL_STATE, actions.calculatePercentage())).toEqual({
			...INITIAL_STATE,
			displayValue: 0,
			firstValue: 0
		});
	});

	test('action clear all type returns the right state', () => {
		expect(reducer(INITIAL_STATE, actions.clearAll())).toEqual({
			...INITIAL_STATE,
		});
	});

	test('action change sign type returns the right state', () => {
		expect(reducer(INITIAL_STATE, actions.changeSign())).toEqual({
			...INITIAL_STATE,
			displayValue: -0,
			firstValue: -0,
		});
	});

});
