import React from 'react';
import TaskList from '../../components/containers/TaskList';

const TaskPage = () => {
	return (
		<div>
			<h2>Task list</h2>
			<div>
				<TaskList />
			</div>
		</div>
	);
};

export default TaskPage;
