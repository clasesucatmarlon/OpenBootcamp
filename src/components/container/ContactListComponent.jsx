import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/ContactComponent';

const ContactListComponent = props => {
  const defaultContact = new Contact('Marlon Aurelio', 'García Morales', 'clasesucatmarlon@gmail.com', true);
  const defaultContact2 = new Contact('Marol Yonathan', 'García Morales', 'marolgarcia@gmail.com', false);

  return (
    <div>
      <h1>CONTACT LIST</h1>
      <ContactComponent contact={defaultContact} number={1}/>
      <ContactComponent contact={defaultContact2} number={2}/>
    </div>
  )
}

ContactListComponent.propTypes = {}

export default ContactListComponent;