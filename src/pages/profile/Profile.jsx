import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const history = useNavigate();

	const goBack = () => {
		history(-1);
	};

	return (
		<>
			<h2>Profile</h2>
			<div className='d-flex justify-content-center'>
				<button className='btn btn-primary me-2' onClick={goBack}>
					Go back
				</button>
			</div>
		</>
	);
};

export default Profile;
