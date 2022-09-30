import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/TaskComponent';
import TaskForm from '../pure/forms/TaskForm';

const TaskList = () => {

	const newTask = new Task('Tarea 1', 'Descripción Tarea 1', false, LEVELS.NORMAL);
	const newTask2 = new Task('Tarea 2', 'Descripción Tarea 2', true, LEVELS.URGENT);
	const newTask3 = new Task('Tarea 3', 'Descripción Tarea 3', true, LEVELS.BLOCKING);

	const [listTasks, setListTasks] = useState([newTask, newTask2, newTask3]);
	const [loading, setLoading] = useState(true);


	const changeTaskCompleted = () => {
		console.log('TODO: Cambiar estado de la tarea');
	};

	/** A hook that is called when the component is mounted and when the 
	 * listTasks state is modified
	 */
	useEffect(() => {
		console.log('Task State has been modified...');
		setLoading(false);
		return () => {
			console.log('TaskList component is going unmount...');
		}
	}, [listTasks]);

	return (
		<div>
			<h2>Lista de tareas</h2>
			<div>
				<div className="col-12">
					<div className="card">

						<div
							className="card-body"
							data-mbd-perfect-scrollbar='true'
							style={{ position: 'relative'}}
						>
							<table className='table table-primary table-striped'>
								<thead>
									<tr className='bg-primary'>
										<th scope="col">Título</th>
										<th scope="col">Descripción</th>
										<th scope="col" className='text-center'>Prioridad</th>
										<th scope="col" className='text-center'>Status</th>
										<th scope="col" className='text-center'>Acciones</th>
									</tr>
								</thead>
								<tbody className='table-group-divider'>
									{
										listTasks.map((task, index) => {
											return (
												<TaskComponent key={index} task={task} />
											)
										})
									}
								</tbody>
							</table>
							<TaskForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default TaskList;
