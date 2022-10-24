import React from 'react';
//  import logoTask from '../../assets/images/logoTask.png';
import logoTask22 from '../../assets/images/logoTask22.png';
import '../../assets/styles/header.scss';

const Header = () => {
	return (
		<div className='d-flex text-center justify-content-center pt-3'>
			<div className=''>
				<img src={logoTask22} alt='Banner' />
			</div>
		</div>
	);
};

export default Header;
