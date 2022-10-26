import React from 'react';
import banner from '../../assets/images/banner1.png';

const Header = () => {
	return (
		<div className='header'>
			<div>
				<img src={banner} alt='Banner' />
			</div>
		</div>
	);
};

export default Header;
