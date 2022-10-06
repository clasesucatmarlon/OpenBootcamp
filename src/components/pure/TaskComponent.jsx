import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import '../../assets/styles/task.scss';

const TaskComponent = ({ task, taskCompleted, taskDelete }) => {
	/** A hook that is called when the component is created and
	 * when it is destroyed
	 */
	useEffect(() => {
		// console.log('Created task...');
		return () => {
			// console.log(`Task: ${task.name} is going to unmount...`)
		};
	}, [task]);

	/**
	 * It returns a JSX element based on the value of the `task.level` property
	 * @return A function that returns a JSX element.
	 */
	const taskLevelBadge = () => {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-primary align-middle d-flex justify-content-center'>
							{task.level}
						</span>
					</h6>
				);
			case LEVELS.URGENT:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-danger align-middle d-flex justify-content-center'>
							{task.level}
						</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-warning align-middle d-flex justify-content-center'>
							{task.level}
						</span>
					</h6>
				);
			default:
				break;
		}
	};

	/**
	 * If the task is completed, return a green checkmark icon, otherwise return a red checkmark icon
	 * @return the icon that will be displayed in the task list.
	 */
	const iconTaskCompleted = () => {
		if (task.completed) {
			return (
				<i
					className='bi-toggle-on d-flex justify-content-center'
					style={{ color: 'green', fontSize: '1.4rem' }}
					onClick={() => taskCompleted(task)}
				></i>
			);
		} else {
			return (
				<i
					className='bi-toggle-off d-flex justify-content-center'
					style={{ color: 'red', fontSize: '1.4rem' }}
					onClick={() => taskCompleted(task)}
				></i>
			);
		}
	};

	return (
		<tr className='fw-normal'>
			<td className='align-middle'>
				<span>{task.name}</span>
			</td>
			<td className='align-middle'>
				<span>{task.description}</span>
			</td>
			<td className='align-middle'>
				<span>{taskLevelBadge()}</span>
			</td>
			<td className='align-middle'>
				<span>{iconTaskCompleted()}</span>
			</td>
			<td className='align-middle'>
				<i
					className='bi bi-trash d-flex justify-content-center'
					style={{ color: 'red', fontSize: '1.3rem' }}
					onClick={() => taskDelete(task)}
				></i>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	taskCompleted: PropTypes.func.isRequired,
	taskDelete: PropTypes.func.isRequired,
};

export default TaskComponent;
