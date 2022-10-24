import React from 'react';
import '../../../assets/styles/registerFormik.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { ROLES } from '../../../models/roles.enum';
// import { User } from '../../../models/user.class';

const RegisterFormik = () => {
	// const user = new User();

	/* Setting the initial values of the form. */
	const initialValues = {
		username: '',
		email: '',
		password: '',
		confirm: '', // to confirm password
		role: ROLES.USER,
	};

	/* A validation schema for the form. */
	const registerSchema = Yup.object().shape({
		username: Yup.string()
			.min(6, 'Usename too short, min: 6 characters')
			.max(20, 'Username too long, max: 20 characters')
			.required('Username is required...'),
		email: Yup.string()
			.email('Invalid email format...')
			.required('Email is required...'),
		password: Yup.string()
			.min(8, 'Password too short, min: 8 characters')
			.required('Password is required...'),
		role: Yup.string()
			.oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin ')
			.required('Role is required...'),
		confirm: Yup.string()
			.when('password', {
				is: (value) => (value && value.length > 0 ? 'true' : 'false'),
				then: Yup.string().oneOf(
					[Yup.ref('password')],
					'Password mush match!!!'
				),
			})
			.required('You mush confirm the password...'),
	});

	/**
	 * The submit function is called when the user clicks the submit button
	 */
	// const submit = (values) => {
	// 	alert('Register user...');
	// };

	return (
		<div className='d-flex flex-column container mt-2 w-25 '>
			<h2>Register</h2>
			<Formik
				initialValues={initialValues}
				// Yup validation schema
				validationSchema={registerSchema}
				onSubmit={async (values) => {
					await new Promise((resolve, reject) => setTimeout(reject, 2000));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur,
				}) => (
					<Form className='d-flex flex-column p-4 shadow'>
						<label htmlFor='username' className='fs-6 fw-bold mt-3 '>
							Username
						</label>
						<Field
							id='username'
							type='text'
							name='username'
							placeholder='Input your username'
							className='placeholder'
						></Field>
						{/* Username errors */}
						{errors.username && touched.username && (
							<span className='info__error'>
								<ErrorMessage name='username' component='div'></ErrorMessage>
							</span>
						)}

						<label htmlFor='email' className='fs-6 fw-bold mt-3'>
							Email
						</label>
						<Field
							id='email'
							type='email'
							name='email'
							placeholder='example@email.com'
							className='placeholder'
						></Field>
						{/* Email errors */}
						{errors.email && touched.email && (
							<span className='info__error'>
								<ErrorMessage name='email' component='div'></ErrorMessage>
							</span>
						)}

						<label htmlFor='password' className='fs-6 fw-bold mt-3'>
							Password
						</label>
						<Field
							id='password'
							type='password'
							name='password'
							placeholder='Password'
							className='placeholder'
						></Field>
						{/* Password errors */}
						{errors.password && touched.password && (
							<span className='info__error'>
								<ErrorMessage name='password' component='div'></ErrorMessage>
							</span>
						)}

						<label htmlFor='confirm' className='fs-6 fw-bold mt-3'>
							Confirm
						</label>
						<Field
							id='confirm'
							type='password'
							name='confirm'
							placeholder='Confirm password'
							className='placeholder'
						></Field>
						{/* Confirm errors */}
						{errors.confirm && touched.confirm && (
							<span className='info__error'>
								<ErrorMessage name='confirm' component='div'></ErrorMessage>
							</span>
						)}

						{values.username === '' ||
						values.email === '' ||
						values.password === '' ||
						values.confirm === '' ? (
							<button
								type='submit'
								className='fs-6 mt-4 btn text-white bg-secondary'
								disabled
							>
								Register Account
							</button>
						) : (
							<button
								type='submit'
								className='fs-6 mt-4 btn text-white bg-primary'
							>
								Register Account
							</button>
						)}

						{isSubmitting ? (
							<span className='info__success'>
								Sending your credentiales...
							</span>
						) : null}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterFormik;
