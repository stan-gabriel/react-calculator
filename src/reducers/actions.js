import {
	ADD_FIRST_VALUE,
	ADD_SECOND_VALUE,
	OPERATION,
	CALCULATE_RESULT,
	CLEAR_ALL,
	CHANGE_SIGN,
	CALCULATE_PERCENTAGE
} from './types';

export function addFirstValue(firstValue) {
	return {
		type: ADD_FIRST_VALUE,
		payload: firstValue,
	}
}

export function addSecondValue(secondValue) {
	return {
		type: ADD_SECOND_VALUE,
		payload: secondValue,
	}
}

export function addOperationType(operationType, operationFunction) {
	return {
		type: OPERATION,
		payload: operationFunction
	}
}

export function calculateResult() {
	return {
		type: CALCULATE_RESULT,
	}
}

export function calculatePercentage() {
	return {
		type: CALCULATE_PERCENTAGE,
	}
}

export function clearAll() {
	return {
		type: CLEAR_ALL,
	}
}

export function changeSign() {
	return {
		type: CHANGE_SIGN
	}
}
