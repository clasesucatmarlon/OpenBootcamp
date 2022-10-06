import { useState } from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name, age }) => {
	const [countAge, setCountAge] = useState(age);

	const increaseAge = () => {
		setCountAge(countAge + 1);
	};

	const decreaseAge = () => {
		setCountAge(countAge - 1);
	};

	return (
		<div>
			<h1>Soy componente Greeting</h1>
			<h3>{`Hola ${name} tienes ${countAge} años`}</h3>
			<button onClick={increaseAge}>Increase</button>
			<button onClick={decreaseAge}>Increase</button>
		</div>
	);
};

Greeting.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
};

export default Greeting;
