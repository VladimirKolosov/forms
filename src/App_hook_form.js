import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './App.module.css';

const fieldsScheme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[\w_@\\.]*$/,
			'Неверный email.Допустимы слудеующие символы - буквы, цифры ,нижнее подчеркивание',
		)
		.max(30, 'Должно быть меньше 30 символов'),
	password: yup
		.string()
		.matches(
			/^[\w_@\\%\\&\\?\\*]*$/,
			'Допустимы слудеующие символы - латинские буквы, цифры ,нижнее подчеркивание, %,&,*,?',
		)
		.min(8, 'Пароль должен быть не менеее 8 символов')
		.max(25, 'Пароль не должен привышать 25 символов'),
	confirmpassword: yup.string().oneOf([yup.ref('password')], 'Пароль не совпадают'),
});

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmpassword: '',
		},
		resolver: yupResolver(fieldsScheme),
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const passwordConfirmError = errors.confirmpassword?.message;
	const onSubmit = (formData) => {
		console.log(formData);
	};
	return (
		<div className={styles.form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{(emailError || passwordError) && (
					<div className={styles.errorLabel}>{emailError}</div>
				)}
				<input
					name="email"
					type="email"
					placeholder="email"
					{...register('email')}
				/>
				<input
					name="password"
					type="password"
					placeholder="password"
					{...register('password')}
				/>
				<input
					name="password"
					type="password"
					placeholder="password"
					{...register('confirmpassword')}
				/>
				<button
					type="submit"
					disabled={!!emailError || !!passwordError || !!passwordConfirmError}
				>
					Отправить
				</button>
			</form>
		</div>
	);
};
