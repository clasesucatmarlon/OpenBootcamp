import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const FormContact = ({ addNewContact }) => {
	const firstNameRef = useRef('');
	const lastNameRef = useRef('');
	const emailRef = useRef('');

	/**
	 * addContact() is a function that takes an event as an argument, prevents the default action of the
	 * event, creates a new contact object with the values of the form inputs, and then calls the addNewContact()
	 * function with the new task object as an argument
	 * @params {event} event Event
	 */
	const addContact = (event) => {
		event.preventDefault();
		const contact = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			email: emailRef.current.value,
			conected: false,
		};
		addNewContact(contact);
		event.target.reset();
	};

	return (
		<form onSubmit={addContact} className='border p-3 bg-white'>
			<div className='d-flex flex-column'>
				<label
					htmlFor='inputName'
					className='d-flex align-items-center fw-bold'
				>
					Nombre:
				</label>
				<input
					type='text'
					id='inputFirstName'
					ref={firstNameRef}
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
					Apellido:
				</label>
				<input
					type='text'
					id='inputLastName'
					ref={lastNameRef}
					placeholder='Ingrese Apellido'
					className='form-control mb-3'
					required
				/>
			</div>

			<div className='d-flex flex-column'>
				<label
					htmlFor='inputDescription'
					className='d-flex align-items-center fw-bold'
				>
					Email:
				</label>
				<input
					type='email'
					id='inputEmail'
					ref={emailRef}
					placeholder='Ingrese Email'
					className='form-control mb-3'
					required
				/>
			</div>

			<div>
				<button type='submit' className='btn btn-primary w-100'>
					Agregar Contacto
				</button>
			</div>
		</form>
	);
};

FormContact.propTypes = {
	addNewContact: PropTypes.func.isRequired,
};

export default FormContact;
