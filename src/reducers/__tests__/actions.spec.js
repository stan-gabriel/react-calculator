import * as actions from '../actions';
import * as types from '../types';

describe('actions', () => {
	test('calculate percentage action', () => {
		expect(actions.addFirstValue(1)).toEqual({type: types.ADD_FIRST_VALUE, payload: 1});
		expect(actions.addSecondValue(7)).toEqual({type: types.ADD_SECOND_VALUE, payload: 7});
		expect(actions.addOperationType('+', 'add')).toEqual({type: types.OPERATION, payload: 'add'});
		expect(actions.calculateResult()).toEqual({type: types.CALCULATE_RESULT});
		expect(actions.calculatePercentage()).toEqual({type: types.CALCULATE_PERCENTAGE});
		expect(actions.clearAll()).toEqual({type: types.CLEAR_ALL});
		expect(actions.changeSign()).toEqual({type: types.CHANGE_SIGN});
	})
});
