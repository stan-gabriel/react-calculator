import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import logo from '../../assets/logo.svg';
import './App.scss';
import '../calculator/Calculator'
import Calculator from "../calculator/Calculator";
import app from '../../reducers/app';

const store = createStore(combineReducers({
	app
}));

function App() {
	return (
		<Provider store={store}>
			<div className="App">

				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
				</header>

				<Calculator />

			</div>
		</Provider>
	);
}

export default App;
