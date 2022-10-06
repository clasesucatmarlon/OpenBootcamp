import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({ contact, changeStatusConected, deleteContact }) => {
	const { firstName, lastName, email, conected } = contact;

	/**
	 * A function that returns an icon that indicates the status of the connection of the contact.
	 *
	 * @return the icon that will be displayed in the contact list.
	 */
	const iconStatusConected = () => {
		if (conected) {
			return (
				<i
					className='bi-toggle-on d-flex justify-content-center'
					style={{ color: 'green', fontSize: '1.4rem' }}
					onClick={() => changeStatusConected(contact)}
				></i>
			);
		} else {
			return (
				<i
					className='bi-toggle-off d-flex justify-content-center'
					style={{ color: 'red', fontSize: '1.4rem' }}
					onClick={() => changeStatusConected(contact)}
				></i>
			);
		}
	};

	return (
		<tr>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{email}</td>
			<td>{iconStatusConected()}</td>
			<td>
				<i
					className='bi bi-trash d-flex justify-content-center'
					style={{ color: 'red', fontSize: '1.3rem' }}
					onClick={() => deleteContact(contact)}
				></i>
			</td>
		</tr>
	);
};

ContactInfo.propTypes = {
	contact: PropTypes.object.isRequired,
	changeStatusConected: PropTypes.func.isRequired,
	deleteContact: PropTypes.func.isRequired,
};

export default ContactInfo;
