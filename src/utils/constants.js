import { VALUE, CLEAR_ALL, CHANGE_SIGN, CALCULATE_RESULT, OPERATION, CALCULATE_PERCENTAGE } from '../reducers/types'

export const operations = {
	add: (a, b) => {
		return parseFloat(a) + parseFloat(b)
	},
	subtraction: (a, b) => {
		return parseFloat(a) - parseFloat(b)
	},
	multiplication: (a, b) => {
		return parseFloat(a) * parseFloat(b)
	},
	division: (a, b) => {
		return parseFloat(a) / parseFloat(b)
	},
};

export const rows = [
	[
		{value: 'AC', colour: 'dark-btn', meaning: CLEAR_ALL},
		{value: '+/-', colour: 'dark-btn', meaning: CHANGE_SIGN},
		{value: '%', colour: 'dark-btn', meaning: CALCULATE_PERCENTAGE},
		{value: '÷', colour: 'orange-btn', meaning: OPERATION, action: operations.division}
	],
	[
		{value: '7', colour: 'light-btn', meaning: VALUE},
		{value: '8', colour: 'light-btn', meaning: VALUE},
		{value: '9', colour: 'light-btn', meaning: VALUE},
		{value: 'x', colour: 'orange-btn', meaning: OPERATION, action: operations.multiplication}
	],
	[
		{value: '4', colour: 'light-btn', meaning: VALUE},
		{value: '5', colour: 'light-btn', meaning: VALUE},
		{value: '6', colour: 'light-btn', meaning: VALUE},
		{value: '-', colour: 'orange-btn', meaning: OPERATION, action: operations.subtraction}
	],
	[
		{value: '1', colour: 'light-btn', meaning: VALUE},
		{value: '2', colour: 'light-btn', meaning: VALUE},
		{value: '3', colour: 'light-btn', meaning: VALUE},
		{value: '+', colour: 'orange-btn', meaning: OPERATION, action: operations.add}
	],
	[
		{value: '0', colour: 'special-btn', meaning: VALUE},
		{value: '.', colour: 'light-btn', meaning: VALUE},
		{value: '=', colour: 'orange-btn', meaning: CALCULATE_RESULT}
	],
];


export const CalculatorOperations = {
	'/': (a, b) => {return parseFloat(a) / parseFloat(b)},
	'*': (a, b) => {return parseFloat(a) * parseFloat(b)},
	'+': (a, b) => {return parseFloat(a) + parseFloat(b)},
	'-': (a, b) => {return parseFloat(a) - parseFloat(b)},
};
