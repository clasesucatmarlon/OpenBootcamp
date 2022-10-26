import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const history = useNavigate();

	const navigate = (path) => {
		history(path);
	};

	return (
		<>
			<h2>Home Page</h2>
			<div className='d-flex justify-content-center'>
				<button
					className='btn btn-primary'
					onClick={() => navigate('/profile')}
				>
					Profile
				</button>
			</div>
		</>
	);
};

export default HomePage;
