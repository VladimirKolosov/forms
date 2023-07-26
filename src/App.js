import { useState } from 'react';
import math from 'mathjs';
import styles from './App.module.css';

const calcNumbersButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const App = () => {
	const [displayValue, setDisplayValue] = useState('');
	const [resultColor, setResultColor] = useState('');
	const actionButtonClick = (value) => {
		if (value === '=') {
			setDisplayValue(math.evaluate(displayValue));
			setResultColor(styles.result);
		} else if (value === 'C') {
			setDisplayValue('');
			setResultColor('');
		} else {
			setDisplayValue(displayValue + value);
			setResultColor('');
		}
	};

	return (
		<div className={styles.calculator}>
			<div className={styles.display}>
				<span className={resultColor}>{displayValue}</span>
			</div>
			<div className={styles.buttons}>
				{calcNumbersButtons.map((num) => (
					<button
						key={num}
						onClick={() => actionButtonClick(num)}
						className={styles.button}
					>
						{num}
					</button>
				))}
				<button onClick={() => actionButtonClick('+')} className={styles.button}>
					+
				</button>
				<button onClick={() => actionButtonClick('-')} className={styles.button}>
					-
				</button>
				<button onClick={() => actionButtonClick('=')} className={styles.button}>
					=
				</button>
				<button onClick={() => actionButtonClick('C')} className={styles.button}>
					C
				</button>
			</div>
		</div>
	);
};
