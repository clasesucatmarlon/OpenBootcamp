/**
 * Ejemplo de uso de:
 *
 * useState(): Manejar estados de variables
 * useContext(): Usar el contexto mpara pasarlo a
 * componentes de nivel inferior
 */

import React, { useState, useContext } from 'react';

const myContext = React.createContext(null);
/**
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que recibe del padre
 */
const Componente1 = () => {
	// Estado inicial vacío con los datos que recibe del contexto padre
	const state = useContext(myContext);
	return (
		<div>
			<h2>
				El TOKEN es: {state.token}
				<Componente2 />
			</h2>
		</div>
	);
};

/**
 * @returns Componente2
 * Dispone de un contexto que va a tener un valor
 * que recibe del padre
 */
const Componente2 = () => {
	const state = useContext(myContext);
	return (
		<div>
			<h2>La sesión es: {state.sesion}</h2>
		</div>
	);
};

/**
 * @returns ComponentePadre
 * Componente padre
 */
const ComponentePadre = () => {
	const stateInitial = {
		token: '1234567',
		sesion: 1,
	};
	// Estado del componente
	const [sesionData, setSesionData] = useState(stateInitial);

	// Actualizar sesion
	const updateSesion = () => {
		setSesionData({
			token: 'NewToken 1234567',
			sesion: sesionData.sesion + 1,
		});
	};

	return (
		<myContext.Provider value={sesionData}>
			{/* Todo lo que está aqì adentro puede leer los datos de sesionData */}
			{/* Además, si se actualiza sesionData, los componentes de aquí, también lo actualizan */}
			<h2>Uso de useState() - useContext()</h2>
			<Componente1 />
			<button onClick={updateSesion}>Actualizar sesión</button>
		</myContext.Provider>
	);
};

export default ComponentePadre;
