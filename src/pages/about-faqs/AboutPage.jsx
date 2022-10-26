import React from 'react';

import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
	// const location = useLocation();
	const history = useNavigate();

	const navigate = (path) => {
		history(path);
	};

	const goBack = () => {
		history(-1);
	};

	return (
		<div>
			<h2>About / FAQs</h2>
			<div className='d-flex justify-content-center'>
				<button className='btn btn-primary me-2' onClick={() => navigate('/')}>
					Go to Home
				</button>
				<button className='btn btn-primary me-2' onClick={goBack}>
					Go back
				</button>
			</div>
		</div>
	);
};

export default AboutPage;
