import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useContext } from 'react';
import Form from '../form/form';
import HeaderProfile from '../header-profile/header-profile';
import './App.css';

function App(props) {
	const [login, setLogin] = useState('ыау');
	function onSubmit(login) {
		setLogin(login);
		//* Выводит данные правильно после отправки формы
		console.log('Login after: ' + login);
	}
	return (
		<Router>
			<div className='app app-center'>
				<Routes>
					<Route path='/' element={<Form onSubmit={onSubmit} />} />
					{login === 'admin' && (
						<Route path='/profile' element={<HeaderProfile Login={login} />} />
					)}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
