import {
	ADD_FIRST_VALUE,
	ADD_SECOND_VALUE,
	OPERATION,
	CALCULATE_RESULT,
	CLEAR_ALL,
	CHANGE_SIGN, CALCULATE_PERCENTAGE
} from './types';

export const INITIAL_STATE = {
	firstValue: '0',
	secondValue: '',
	result: null,
	displayValue: '0',
	operation: null,
	previewOperation: null,
	reWriteFirstValue: false
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {

		case ADD_FIRST_VALUE: {
			let obj = {};
			if (action.payload === '.' && state.firstValue.includes('.')) {
				return null
			}
			if ((state.firstValue === '0' && action.payload !== '.') || (state.secondValue && state.reWriteFirstValue)) {
				obj.firstValue = action.payload;
				obj.displayValue = obj.firstValue;
				obj.reWriteFirstValue = false
			} else {
				obj.firstValue = state.firstValue + action.payload;
				obj.displayValue = obj.firstValue
			}
			return {
				...state,
				...obj,
			};
		}

		case ADD_SECOND_VALUE: {
			let obj = {};
			if (action.payload === '.' && state.secondValue.includes('.')) {
				return null
			}
			if (state.secondValue === '0' && action.payload !== '.') {
				obj.secondValue = action.payload;
				obj.displayValue = obj.secondValue
			} else {
				obj.secondValue = state.secondValue + action.payload;
				obj.displayValue = obj.secondValue
			}
			return {
				...state,
				...obj,
			};
		}

		case OPERATION:
			return {
				...state,
				operation: action.payload,
				secondValue: ''
			};

		case CALCULATE_RESULT: {
			if (!state.operation && !state.previewOperation) {
				return state
			}
			let obj = {};
			obj.previewOperation = state.operation ? state.operation : state.previewOperation;
			obj.operation = null;
			obj.reWriteFirstValue = true;
			if (state.secondValue) {
				obj.firstValue = obj.previewOperation(state.firstValue, state.secondValue);
				obj.displayValue = obj.firstValue
			} else {
				obj.firstValue = obj.previewOperation(state.firstValue, state.firstValue);
				obj.displayValue = obj.firstValue
			}

			return {
				...state,
				...obj,
			};
		}

		case CALCULATE_PERCENTAGE: {
			let obj = {};
			if (state.secondValue) {
				obj.firstValue = state.operation(state.firstValue, state.secondValue) / 100;
				obj.displayValue = obj.firstValue
			} else {
				obj.firstValue = Number(state.firstValue) / 100;
				obj.displayValue = obj.firstValue
			}
			return {
				...state,
				...obj,
			};
		}

		case CLEAR_ALL:
			return {
				...state = INITIAL_STATE
			};

		case CHANGE_SIGN: {
			let obj = {};
			if (state.operation && state.secondValue === null) {
				obj.firstValue = -state.firstValue;
				obj.displayValue = obj.firstValue;
			} else if (state.operation && state.secondValue === state.displayValue) {
				obj.secondValue = -state.secondValue;
				obj.displayValue = obj.secondValue;
			} else {
				obj.firstValue = -state.firstValue;
				obj.displayValue = obj.firstValue;
			}
			return {
				...state,
				...obj,
			}
		}
		default:
			return state;
	}
}
