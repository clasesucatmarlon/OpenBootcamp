export class Contact {
  firstName =  '';
  lastName =  '';
  email =  'example@email.com';
  conected =  false;

  constructor (firstName, lastName, email, conected) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.conected = conected;
  }
}