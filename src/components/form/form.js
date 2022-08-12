import { useState } from 'react';
import './form.css';

const Form = (props) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [formError, setFormError] = useState(false);

	function onSubmit(e) {
		e.preventDefault();
		if (login === '' || login.length < 3 || password === '') {
			setFormError(true);
		} else {
			setFormError(false);
		}
		let link = '';
		if (formError === false) {
			link = '/profile';
		}
		return link;
	}

	return (
		<div className='app-add-form'>
			<span>Авторизация</span>
			<form onSubmit={onSubmit} className='add-form d-flex flex-column'>
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
					<div class='alert alert-warning' role='alert'>
						Проверьте правильность данных. Длина логина должна быть не менее 3-х
						символов.
					</div>
				)}
			</form>
		</div>
	);
};

export default Form;
