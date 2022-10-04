import React from 'react';
import PropTypes from 'prop-types'
import { Contact } from './model/contact.class';

const ComponentB = ({ newContact }) => {
    return (
        <div>
            <h5>Nombre: {newContact.firstName}</h5>
            <h5>Apellido: {newContact.lastName}</h5>
            <h5>Email: {newContact.email}</h5>
            <h5>Status: {newContact.conected ? 'CONECTADO' : 'NO CONECTADO'}</h5>
            <hr />
            <br />
        </div>
    )
}

ComponentB.propTypes = {
    task: PropTypes.instanceOf(Contact)
  };

export default ComponentB;