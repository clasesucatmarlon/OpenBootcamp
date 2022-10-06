/**
 * Ejemplo de uso de UseState
 *
 * Crear componente de tipo función y acceder a su estado
 * privado mediante un hook y poder modificarlo
 */

import React, { useState } from 'react';

const Example1 = () => {
	const valorInicial = 0;

	// Valor inicial para una persona
	const personaInicial = {
		nombre: 'Marlon García',
		email: 'clasesucatmarlon@gmail.com',
	};

	/**
	 * Se quiere que el valorInicial y personaInicial sean
	 * parte del estado inicial del componente y poder gestionar
	 * su cambio, así como este se vea reflejado en la
	 * vista del componente
	 *
	 * const [variable, funcionParaCambiar] = useState(valorInicialDeVariable)
	 */

	const [count, setCount] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	/**
	 * When the function is called, set the count to the current count plus one.
	 */
	const updateCountUp = () => {
		setCount(count + 1);
	};

	/**
	 * When the user clicks the button, update the count by subtracting 1 from the current count.
	 */
	const updateCountDown = () => {
		setCount(count - 1);
	};

	/**
	 * The function updatePersona takes two parameters, nombre and email, and sets the state of the
	 * component to an object with the properties nombre and email, which are set to the values of the
	 * @param {string} nombre
	 * @param {string} email
	 */
	const updatePersona = (nombre, email) => {
		setPersona({
			nombre,
			email,
		});
	};

	return (
		<div>
			<h2>1- Uso de useState()</h2>
			<h3>Contador: {count}</h3>
			<button onClick={updateCountUp}>+ 1</button>
			<button onClick={updateCountDown}>- 1</button>
			<br />
			<h3>Persona</h3>
			<h4>
				Nombre: {persona.nombre} - Email: {persona.email}
			</h4>
			<button onClick={() => updatePersona('Leidy', 'leidy1@gmail.com')}>
				Cambiar persona
			</button>
		</div>
	);
};

export default Example1;
