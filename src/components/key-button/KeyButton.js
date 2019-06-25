import React from 'react';
import './KeyButton.scss';

class KeyButton extends React.Component {
	render() {
		const {value, colour, onClick} = this.props;
		const className = `${KeyButton} ${colour}`;
		return (
			<button className={className} onClick={onClick}>
				{value}
			</button>
		)
	};
}

export default KeyButton
