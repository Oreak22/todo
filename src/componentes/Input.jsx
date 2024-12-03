import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const Input = () => {
	return (
		<>
			<div className='container-lg fixed-bottom py-2 bg-secondary mb-3 rounded-pill'>
				<Formik
					initialValues={{ task: "" }}
					onSubmit={(values) => {
						console.log(values);
						// alert(JSON.stringify("values));
					}}
					validate={(values) => {
						const errors = {};
						if (!values.task) {
							errors.task = "Required";
						}
						return errors;
					}}
				>
					{() => (
						<Form className='d-flex'>
							<Field
								type='text'
								name='task'
								className='w-100  todoInput px-2 fs-5'
								placeholder='Input your task'
							/>
							<ErrorMessage name='task' component='div' />
							<button
								className='btn btn-primary rounded-pill'
								type='submit'
								// disabled={}
							>
								<i className='bi bi-send fs-4'></i>
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default Input;
