import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from '../form/form';
import HeaderProfile from '../header-profile/header-profile';
import './App.css';

function App(props) {
	return (
		<Router>
			<div className='app app-center'>
				<Route exact path='/'>
					<Form />
				</Route>
				<Route exact path='/profile'>
					<HeaderProfile Login={props.login} />
				</Route>
			</div>
		</Router>
	);
}

export default App;
