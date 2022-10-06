import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';
import TaskForm from '../pure/forms/TaskForm';

const TaskList = () => {
	const newTask = new Task(
		'Tarea 1',
		'Descripción Tarea 1',
		false,
		LEVELS.NORMAL
	);
	const newTask2 = new Task(
		'Tarea 2',
		'Descripción Tarea 2',
		true,
		LEVELS.URGENT
	);

	const [listTasks, setListTasks] = useState([newTask, newTask2]);
	// const [loading, setLoading] = useState(true);

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
		// console.log('Task State has been modified...');
		// setLoading(false);
		return () => {
			// console.log('TaskList component is going unmount...');
		};
	}, [listTasks]);

	return (
		<div>
			<h2>Lista de tareas</h2>
			<div>
				<div className='col-12'>
					<div className='card'>
						<div
							className='card-body'
							data-mbd-perfect-scrollbar='true'
							style={{ position: 'relative' }}
						>
							<table className='table table-primary table-striped'>
								<thead>
									<tr className='bg-primary'>
										<th scope='col'>Título</th>
										<th scope='col'>Descripción</th>
										<th scope='col' className='text-center'>
											Prioridad
										</th>
										<th scope='col' className='text-center'>
											Status
										</th>
										<th scope='col' className='text-center'>
											Acciones
										</th>
									</tr>
								</thead>
								<tbody className='table-group-divider'>
									{listTasks.map((task, index) => {
										return (
											<TaskComponent
												key={index}
												task={task}
												taskCompleted={taskCompleted}
												taskDelete={taskDelete}
											/>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-light mt-4 p-3'>
				<TaskForm addNewTask={addNewTask} />
			</div>
		</div>
	);
};

export default TaskList;
