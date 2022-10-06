import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { LEVELS } from '../../../models/levels.enum';

const TaskForm = ({ addNewTask }) => {
	const nameRef = useRef('');
	const descriptionRef = useRef('');
	const levelRef = useRef(LEVELS.NORMAL);

	/**
	 * AddTask() is a function that takes an event as an argument, prevents the default action of the
	 * event, creates a new task object with the values of the form inputs, and then calls the addNewTask()
	 * function with the new task object as an argument
	 * @params {event} event Event
	 */
	const addTask = (event) => {
		event.preventDefault();
		const task = {
			name: nameRef.current.value,
			description: descriptionRef.current.value,
			completed: false,
			level: levelRef.current.value,
		};
		addNewTask(task);
		event.target.reset();
	};

	return (
		<form onSubmit={addTask} className='border p-3 bg-white'>
			<div className='d-flex flex-column'>
				<label
					htmlFor='inputName'
					className='d-flex align-items-center fw-bold'
				>
					Nombre:
				</label>
				<input
					type='text'
					id='inputName'
					ref={nameRef}
					placeholder='Ingrese nombre'
					className='form-control mb-3'
					autoFocus
					required
				/>
			</div>

			<div className='d-flex flex-column'>
				<label
					htmlFor='inputDescription'
					className='d-flex align-items-center fw-bold'
				>
					Descripción:
				</label>
				<input
					type='text'
					id='inputDescription'
					ref={descriptionRef}
					placeholder='Ingrese descripción'
					className='form-control mb-3'
					required
				/>
			</div>

			<div className='d-flex flex-column'>
				<label
					htmlFor='inputLevel'
					className='d-flex align-items-center fw-bold'
				>
					Prioridad:
				</label>
				<select
					id='inputLevel'
					className='mb-3'
					ref={levelRef}
					defaultValue={LEVELS.NORMAL}
				>
					<option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
					<option value={LEVELS.URGENT}>{LEVELS.URGENT}</option>
					<option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
				</select>
			</div>
			<div>
				<button type='submit' className='btn btn-primary w-100'>
					Agregar tarea
				</button>
			</div>
		</form>
	);
};

TaskForm.propTypes = {
	addNewTask: PropTypes.func.isRequired,
};

export default TaskForm;
