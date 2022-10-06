import React, { useState, useEffect } from 'react';

const ClockFuntional = () => {
	const dataUser = {
		fecha: new Date(),
		edad: 0,
		nombre: 'Marlon Aurelio',
		apellidos: 'García Morales',
	};
	const [user, setUser] = useState(dataUser);

	useEffect(() => {
		const timerAge = setInterval(() => {
			updateUser();
		}, 1000);
		return () => {
			clearInterval(timerAge);
		};
	});

	const updateUser = () => {
		return setUser({
			fecha: new Date(),
			edad: user.edad + 1,
			nombre: user.nombre,
			apellidos: user.apellidos,
		});
	};

	return (
		<div>
			<br />
			<h3>
				Hora Actual:
				{user.fecha.toLocaleTimeString()}
			</h3>
			<h5>
				{user.nombre} {user.apellidos}
			</h5>
			<h1>Edad: {user.edad}</h1>
		</div>
	);
};

export default ClockFuntional;
