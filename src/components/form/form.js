import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './form.css';

const Form = ({ onSubmit }) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [formError, setFormError] = useState(false);

	// const navigate = useNavigate();

	function onSubmitForm(e) {
		e.preventDefault();
		if (login === '' || login.length < 3 || password === '') {
			setFormError(true);
			setLogin('');
			setPassword('');
		} else if (login === 'admin' && password === 'admin') {
			setFormError(false);
			console.log('Login now: ' + login);

			//! Возможно, ошибка на этом шаге
			onSubmit(login);
			// navigate('/profile');
		}
	}

	return (
		<div className='app-add-form'>
			<p>Авторизация</p>
			<form onSubmit={onSubmitForm} className='add-form d-flex flex-column'>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='Введите логин'
					name='Login'
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
				<input
					type='text'
					className='form-control new-post-label'
					placeholder='Введите пароль'
					name='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type='submit' className='btn btn-outline-light'>
					Войти
				</button>
				{formError && (
					<div className='alert alert-warning mt-3' role='alert'>
						Ошибка ввода или неверные данные. *Длина логина должна быть не менее
						3-х символов.
					</div>
				)}
			</form>
		</div>
	);
};

export default Form;
