import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact, number }) => {
  return (
    <div>
      <br />
      <hr />
      <h2>CONTACT { number }</h2>
      <h3>First Name: { contact.firstName }</h3>
      <h3>Last Name: { contact.lastName }</h3>
      <h3>Email: { contact.email }</h3>
      <h3>This contact is: { contact.conected ? 'Contact in Line' : 'Contact not Available' } </h3>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent;