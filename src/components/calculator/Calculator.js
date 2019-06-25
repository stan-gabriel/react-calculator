import React from 'react';
import { connect } from 'react-redux';
import Display from '../display/Display'
import Button from '../key-button/KeyButton';
import { rows, CalculatorOperations } from '../../utils/constants';
import * as actions from '../../reducers/actions';
import { CHANGE_SIGN, CLEAR_ALL, OPERATION, CALCULATE_RESULT, CALCULATE_PERCENTAGE } from '../../reducers/types';
import './Calculator.scss';


class Calculator extends React.Component {
	static defaultProps = {
		operation: '',
		addFirstValue: () => {
		}, addOperationType: () => {
		}, addSecondValue: () => {
		}, changeSign: () => {
		}, clearAll: () => {
		}, calculateResult: () => {
		}, calculatePercentage: () => {
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
	}

	performAction = (buttonData) => event => {
		const {operation, addFirstValue, addOperationType, addSecondValue, changeSign, clearAll, calculateResult, calculatePercentage} = this.props;

		if (buttonData.meaning === CHANGE_SIGN) {
			return changeSign();
		}
		if (buttonData.meaning === CLEAR_ALL) {
			return clearAll();
		}
		if (buttonData.meaning === OPERATION) {
			return addOperationType(buttonData.value, buttonData.action);
		}
		if (buttonData.meaning === CALCULATE_RESULT) {
			return calculateResult()
		}
		if (buttonData.meaning === CALCULATE_PERCENTAGE) {
			return calculatePercentage()
		}
		if (!operation) {
			addFirstValue(buttonData.value)
		} else {
			addSecondValue(buttonData.value);
		}
	};

	handleKeyDown = event => {
		const {operation, addFirstValue, addOperationType, addSecondValue, clearAll, calculateResult, calculatePercentage} = this.props;
		let {key} = event;

		if (key === 'Enter')
			calculateResult();
		if ((/\d/).test(key)) {
			// event.preventDefault();
			if (!operation) {
				addFirstValue(key)
			} else {
				addSecondValue(key);
			}
		} else if (key in CalculatorOperations) {
			// event.preventDefault();
			addOperationType(key, CalculatorOperations[key]);
		} else if (key === '.') {
			// event.preventDefault();
			if (!operation) {
				addFirstValue(key)
			} else {
				addSecondValue(key);
			}
		} else if (key === '%') {
			// event.preventDefault();
			calculatePercentage()
		} else if (key === 'Backspace') {
			// event.preventDefault();
			clearAll();
			// TODO implement 'clear last char'
		}
	};

	renderButton = (buttonData, index) => {
		return <Button key={index} colour={buttonData.colour} value={buttonData.value}
		               onClick={this.performAction(buttonData)}/>
	};

	renderRow = (row, index) => {
		return (
			<div className='buttons-wrapper' key={index}>
				{row.map(this.renderButton)}
			</div>
		)
	};

	render() {
		const {displayValue} = this.props;
		return (
			<div className="Calculator">
				<Display result={displayValue}/>

				{rows.map(this.renderRow)}
			</div>
		);
	}
}

export const PureCalculator = Calculator;

function mapStateToProps(state) {
	return {
		firstValue: state.app.firstValue,
		secondValue: state.app.secondValue,
		displayValue: state.app.displayValue,
		operation: state.app.operation,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addFirstValue: (firstValue) => dispatch(actions.addFirstValue(firstValue)),
		addSecondValue: (secondValue) => dispatch(actions.addSecondValue(secondValue)),
		addOperationType: (operationType, callback) => dispatch(actions.addOperationType(operationType, callback)),
		clearAll: () => dispatch(actions.clearAll()),
		changeSign: () => dispatch(actions.changeSign()),
		calculateResult: () => dispatch(actions.calculateResult()),
		calculatePercentage: () => dispatch(actions.calculatePercentage())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
