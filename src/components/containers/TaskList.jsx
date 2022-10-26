import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { AllTasks } from '../../data/data';
import TaskForm from '../pure/forms/TaskForm';
import Table from './Table';

const TaskList = () => {
	const [listTasks, setListTasks] = useState(AllTasks);
	const [loading, setLoading] = useState(true);

	/**
	 * The function takes a task as an argument, creates a temporary array of the list of tasks, finds the
	 * index of the task in the list of tasks, and then toggles the completed property of
	 * the task at that index
	 * @param {task} task object with task
	 */
	const taskCompleted = (task) => {
		const taskTemp = [...listTasks];
		const indexTask = listTasks.indexOf(task);
		taskTemp[indexTask].completed = !taskTemp[indexTask].completed;
		setListTasks(taskTemp);
	};

	/**
	 * The function takes in a task object, creates a new task object, and pushes it
	 * into the listTasks array
	 * @param {task} task object with task information
	 */
	const addNewTask = (task) => {
		const { name, description, completed, level } = task;
		const taskTemp = [...listTasks];
		const newTask = new Task(name, description, completed, level);
		taskTemp.push(newTask);
		setListTasks(taskTemp);
	};

	/**
	 * The function takes a task as an argument, creates a temporary array of the list of tasks, finds the
	 * index of the task in the list of tasks, and then removes the task from the temporary array
	 * @param {task} task object with task
	 */
	const taskDelete = (task) => {
		const taskTemp = [...listTasks];
		const indexTask = listTasks.indexOf(task);
		taskTemp.splice(indexTask, 1);
		setListTasks(taskTemp);
	};

	/** A hook that is called when the component is mounted and when the
	 * listTasks state is modified
	 */
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
		return () => {};
	}, [listTasks]);

	return (
		<div className='d-flex flex-column align-items-center'>
			<div className='col-12'>
				<div className='card'>
					<div
						className='card-body'
						data-mbd-perfect-scrollbar='true'
						style={{ position: 'relative' }}
					>
						{listTasks.length > 0 ? (
							<Table
								listTasks={listTasks}
								taskCompleted={taskCompleted}
								taskDelete={taskDelete}
								loading={loading}
							/>
						) : (
							<>
								<h5 className='text-center'>
									There are no tasks at this time...!!!
								</h5>
								<h6 className='text-center'>Please add one</h6>
							</>
						)}
					</div>
				</div>
			</div>
			<div className='bg-light mt-4 p-3 d-flex justify-content-center w-50 '>
				<TaskForm addNewTask={addNewTask} numberTasks={listTasks.length} />
			</div>
		</div>
	);
};

export default TaskList;
