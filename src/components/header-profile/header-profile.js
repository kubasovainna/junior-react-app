import './header-profile.css';

const HeaderProfile = (props) => {
	return (
		<div className=''>
			<ul class='nav justify-content-end'>
				<li class='nav-item'>
					<p>Вы вошли в систему, как</p>
				</li>
				<li class='nav-item'>
					<a class='nav-link active' aria-current='page' href='/'>
						Вернуться на главную
					</a>
				</li>
			</ul>
		</div>
	);
};

export default HeaderProfile;
