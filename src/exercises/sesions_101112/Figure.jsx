import { useState } from 'react';

const Figure = () => {
	const [color, setColor] = useState('#000000');
	const [manageInterval, setManageInterval] = useState(0);

	/**
	 * It returns a random number between 0 and 255
	 */
	const getColor = () => Math.floor(Math.random() * 256);

	/**
	 * It takes three numbers, converts them to hexadecimal, and returns a string with a hash symbol in
	 * front of them
	 *
	 * @return A function that takes in three parameters (red, green, blue) and returns a string that is
	 * the hexadecimal representation of the three parameters.
	 */
	const getHex = (red, green, blue) => {
		return (
			'#' +
			[red, green, blue]
				.map((c) => {
					const hex = c.toString(16);
					return hex.lenght === 1 ? '0' + hex : hex;
				})
				.join('')
		);
	};

	/**
	 * @return the value of the setColor function.
	 */
	const generateHex = () => {
		const rgb = {
			r: getColor(),
			g: getColor(),
			b: getColor(),
		};
		return setColor(getHex(rgb.r, rgb.g, rgb.b));
	};

	/**
	 * When the button is clicked, the setInterval function is called, which calls the generateHex
	 * function every 500 milliseconds.
	 *
	 * @return The setInterval function is being returned.
	 */
	const onChangeColor = () => {
		return setManageInterval(setInterval(generateHex, 500));
	};

	/**
	 * The onStopChangeColor function clears the interval that was set in the onStartChangeColor function.
	 *
	 * @return The clearInterval() method clears a timer set with the setInterval() method.
	 */
	const onStopChangeColor = () => {
		return clearInterval(manageInterval);
	};

	/**
	 * When the user clicks the button, the interval is cleared.
	 *
	 * @return The function clearInterval() is being returned.
	 */
	const onClickChangeColor = () => {
		return clearInterval(manageInterval);
	};

	return (
		<div className='App' style={{ margin: 'auto' }}>
			<div
				id='square'
				onMouseOver={onChangeColor}
				onMouseLeave={onStopChangeColor}
				onDoubleClick={onClickChangeColor}
				style={{
					width: '255px',
					height: '255px',
					backgroundColor: color,
					margin: 'auto',
				}}
			></div>{' '}
			<p style={{ color: 'black' }}>Color: {color} </p>
		</div>
	);
};
export default Figure;
