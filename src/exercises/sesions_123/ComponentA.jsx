import React from 'react'
import ComponentB from './ComponentB';
import { Contact } from './model/contact.class';

const ComponentA = () => {
    const newContact = new Contact('Marlon', 'García', 'clasesucatmarlon@gmail.com', true);
    const newContact2 = new Contact('Leidy', 'Gandica', 'lg@gmail.com', false);

    return (
        <div>
            <h1>Lista de contactos</h1>
            <ComponentB newContact={newContact} />
            <ComponentB newContact={newContact2} />
        </div>
    )
}

export default ComponentA;
