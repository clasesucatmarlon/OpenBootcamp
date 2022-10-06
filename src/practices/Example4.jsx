/**
 * Ejemplo para entender el uso de:
 *
 * props.children: Pasar elementos HTML
 */

import React from 'react';

const Examplo4 = (props) => {
	return (
		<div>
			<h2>Uso de children.props</h2>
			{/* <h3>Nombre: {props.nombre}</h3> */}
			{/* props.children pintará por defecto lo que
        se encuentre entre las etiquetas de apertura
        y cierre de este componente desde el componente padre */}

			
		</div>
	);
};

export default Examplo4;
