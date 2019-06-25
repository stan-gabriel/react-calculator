import React from 'react';
import './Display.scss';

class Display extends React.Component {

	adjustText = function (textLength) {
		if (textLength < 8) {
			return 3
		} else {
			return 24 / textLength
		}
	};

	render() {
		let initialLength = `${this.props.result} `;
		return (
			<div className="Display" style={{fontSize: `${this.adjustText(initialLength.toString().length)}rem`}}>
				{this.props.result}
			</div>
		)
	};
}

export default Display
