import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import './header-profile.css';

const HeaderProfile = ({ login }) => {
	// const navigate = useNavigate();
	if (login !== 'admin') {
		/**
		 * TODO: Сделать автоматическую переадресацию на главную страницу, если не пройдена авторизация.
		 * */
		// navigate('/');
	}
	return (
		<div className=''>
			<ul className='nav justify-content-end '>
				<li className='nav-item'>
					<p className='mb-0'>Вы вошли в систему, как {login}</p>
				</li>
				<li className='nav-item'>
					<a className='nav-link active' aria-current='page' href='/'>
						Вернуться на главную
					</a>
				</li>
			</ul>
		</div>
	);
};

export default HeaderProfile;
