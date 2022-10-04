import React from 'react'
import { useState } from 'react';
import { Contact } from './model/contact.class';
import ContactInfo from './ContactInfo'
import FormContact from './FormContact';

const ListContacts = () => {
  const newContact = new Contact('Marlon', 'García', 'clasesucatmarlon@gmail.com', true);
  const newContact2 = new Contact('Leidy', 'Gandica', 'lg@gmail.com', false);
  const newContact3 = new Contact('Blanca', 'García', 'bg@gmail.com', true);

  const [listContacts, setListContacts] = useState([newContact, newContact2, newContact3]);

  /**
   * It changes the status of the contact to connected or disconnected.
   */
  const changeStatusConected = (contact) => {
    const contactTemp = [...listContacts];
    const indexContact = contactTemp.indexOf(contact);
    contactTemp[indexContact].conected = !contactTemp[indexContact].conected;
    setListContacts(contactTemp);
  };

  /**
   * It deletes a contact from the list of contacts.
   */
  const deleteContact = (contact) => {
    const contactTemp = [...listContacts];
    const indexContact = contactTemp.indexOf(contact);
    contactTemp.splice(indexContact, 1);
    setListContacts(contactTemp);
  };

  /**
   * It adds a new contact to the list of contacts.
   */
  const addNewContact = (contact) => {
    const { firstName, lastName, email } = contact;
    const contactTemp = [...listContacts];
    const objContact = new Contact(firstName, lastName, email, false);
    contactTemp.push(objContact);
    setListContacts(contactTemp);
  };

  return (
    <div>
      <h2>Lista de contactos</h2>
      <div className='card mb-3 p-3'>
        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {
              listContacts.map((contact, index) => (
                <ContactInfo
                  key={index}
                  contact={contact}
                  changeStatusConected={changeStatusConected}
                  deleteContact={deleteContact}
                />
              ))
            }
          </tbody>
        </table>
      </div>
      <FormContact addNewContact={addNewContact} />
    </div>
  )
}

export default ListContacts;