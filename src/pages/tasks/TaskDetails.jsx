import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
	const { id } = useParams();

	return (
		<>
			<h2>Task details - {id}</h2>
		</>
	);
};

export default TaskDetails;
