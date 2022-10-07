import React from 'react';
import logoTask from '../../assets/images/logoTask.png';
import '../../assets/styles/header.scss';

const styleLogo = {
	with: '50px',
	height: '50px',
	marginRight: '20px',
};

const Header = () => {
	return (
		<div className='d-flex p-3 align-items-center header shadow'>
			<img src={logoTask} style={styleLogo} alt='Logo' />
			<h1 className='m-0 header__title'>Task Aplication</h1>
		</div>
	);
};

export default Header;
