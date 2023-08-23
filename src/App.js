// import { useState } from 'react';
// import styles from './App.module.css';

// export const App1111 = () => {
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [confirmPassword, setConfirmPassword] = useState('');
// 	const [chekErorr, setChekError] = useState(null);

// 	const onEmailChange = ({ target }) => {
// 		let error = null;
// 		setEmail(target.value);
// 		if (!/^[\w_@\\.]*$/.test(target.value)) {
// 			error =
// 				'Неверный email.Допустимы слудеующие символы - буквы, цифры ,нижнее подчеркивание, @';
// 		} else if (target.value.length > 30) {
// 			error = 'Неверный email. Должно быть не более 30 символов';
// 		}
// 		setChekError(error);
// 	};
// 	const onPasswordChange = ({ target }) => {
// 		let error;
// 		setPassword(target.value);
// 		if (!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(target.value)) {
// 			error =
// 				'Неверный пароль. Пароль должен быть не менеее 8 символов.Cодержать как минимум одну строчную, одну заглавую буквы';
// 		}
// 		setChekError(error);
// 	};

// 	const onConfirmPasswordChange = ({ target }) => {
// 		let error = null;
// 		setConfirmPassword(target.value);
// 		if (password !== target.value) {
// 			error = 'Пароли не совпадают';
// 		}
// 		setChekError(error);
// 	};

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		console.log(email, password, confirmPassword);
// 	};
// 	return (
// 		<div className={styles.form}>
// 			<form onSubmit={onSubmit}>
// 				{chekErorr && <div className={styles.errorLabel}>{chekErorr}</div>}
// 				<input
// 					name="email"
// 					type="email"
// 					value={email}
// 					placeholder="email"
// 					onChange={onEmailChange}
// 				/>

// 				<input
// 					name="password"
// 					type="password"
// 					value={password}
// 					placeholder="password"
// 					onChange={onPasswordChange}
// 				/>
// 				<input
// 					name="password"
// 					type="password"
// 					value={confirmPassword}
// 					placeholder="confirm password"
// 					onChange={onConfirmPasswordChange}
// 				/>
// 				<button type="submit" disabled={chekErorr !== null}>
// 					Зарегистрироваться
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

import React, { useState } from 'react';
import styles from './App.module.css';

export const App1111 = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});

	const validateForm = (value) => {
		let error = {};

		if (!email) {
			error.email = 'Введите email';
		} else if (!/^[\w_@\\.]*$/.test(value)) {
			error.email =
				'Недопустимый email, доступые символы: буквы, цифры, нижнее подчеркиваение, @';
		}
		if (!password) {
			error.password = 'Введите пароль';
		} else if (value.length < 8) {
			error.password = 'Пароль должен быть не менее 8 символов';
		}

		if (password !== value) {
			error.confirmPassword =
				'Пароли не совпадают. Проверьте правильность введенных паролей';
		}

		return error;
	};

	const onEmailChange = ({ target }) => {
		setErrors(validateForm(target.value));
		setEmail(target.value);
	};

	const onPasswordChange = ({ target }) => {
		setPassword(target.value);
		setErrors(validateForm(target.value));
	};

	const onConfirmPasswordChange = ({ target }) => {
		setConfirmPassword(target.value);
		setErrors(validateForm(target.value));
	};
	const onSubmit = (event) => {
		event.preventDefault();
		console.log(email, password, confirmPassword);
	};

	return (
		<div className={styles.form}>
			<form onSubmit={onSubmit}>
				{errors.email && <div className={styles.errorLabel}>{errors.email}</div>}
				<input
					className={styles.input}
					name="email"
					type="email"
					value={email}
					placeholder="email"
					onChange={onEmailChange}
				/>

				<input
					className={styles.input}
					name="password"
					type="password"
					value={password}
					placeholder="password"
					onChange={onPasswordChange}
				/>
				{errors.password && (
					<div className={styles.errorLabel}>{errors.password}</div>
				)}
				<input
					className={styles.input}
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					placeholder="confirm password"
					onChange={onConfirmPasswordChange}
				/>
				{errors.confirmPassword && (
					<div className={styles.errorLabel}>{errors.confirmPassword}</div>
				)}
				<button type="submit" disabled={errors !== null}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
