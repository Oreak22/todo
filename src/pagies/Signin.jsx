import React from "react";
import "../style/style.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/store";

const Signin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const signUp = (values) => {
		const { name, email, password } = values;
		axios
			.post(`https://todoserver24.vercel.app/api/register`, { name, email, password })
			.then((res) => {
				console.log(res);
				dispatch(setToken(res.data.token))
				res.data.statusStatus && navigate("/to-do");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<section className='signContainer container-lg'>
				<div
					className='d-flex justify-content-center align-items-center'
					style={{ height: "100dvh" }}
				>
					<div className='row justify-content-center align-items-center shadow-sm rounded-1 p-md-3 p-1 w-100'>
						<div className='col-6 d-none d-lg-block border-end'>
							<h1 className='display-3 mx-auto text-center text-warning'>
								Oreak Todo
							</h1>
							<p className='text-center fs-4'>
								Plan your day as to your liking
							</p>
						</div>
						<div className='col-11 col-lg-6'>
							<Formik
								initialValues={{
									email: "",
									name: "",
									password: "",
									confirmPassword: "",
								}}
								onSubmit={(values) => {
									signUp(values);
								}}
								validate={(values) => {
									const errors = {};
									if (!values.email) {
										errors.email = "Required";
									} else if (
										!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
											values.email,
										)
									) {
										errors.email = "Invalid email address";
									} else if (!values.name) {
										errors.name = "Required";
									} else if (!values.password) {
										errors.password = "Required";
									} else if (!values.confirmPassword) {
										errors.confirmPassword = "Required";
									} else if (values.password !== values.confirmPassword) {
										errors.confirmPassword = "Passwords do not match";
									} else if (values.password.length < 6) {
										errors.password = "Password must be at least 6 characters";
									} else if (values.name.length < 3) {
										errors.name = "Name must be at least 3 characters";
									}
									return errors;
								}}
							>
								{({ isSubmitting }) => (
									<Form>
										<div>
											<label htmlFor='name'>Name</label>
											<Field name='name' type='text' className='form-control' />
											<p className='text-danger'>
												<ErrorMessage name='name' />
											</p>
										</div>
										<div>
											<label htmlFor='email'>Email</label>
											<Field
												name='email'
												type='email'
												className='form-control'
											/>
											<p className='text-danger'>
												<ErrorMessage name='email' />
											</p>
										</div>
										<div>
											<label htmlFor='password'>Password</label>
											<Field
												name='password'
												type='password'
												className='form-control'
											/>
											<p className='text-danger'>
												<ErrorMessage name='password' className='text-danger' />
											</p>
										</div>
										<div>
											<label htmlFor='confirmPassword'>Confirm Password</label>
											<Field
												name='confirmPassword'
												type='password'
												className='form-control'
											/>
											<p className='text-danger'>
												<ErrorMessage name='confirmPassword' />
											</p>
										</div>
										<div className='d-flex justify-content-between mt-3'>
											<div>
												Have an account?{" "}
												<Link className='text-decoration-none text-warning' to="/login">
													Signin
												</Link>
											</div>
											<button
												className='btn btn-warning'
												type='submit'
												
											>
												Sign-In
											</button>
										</div>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signin;
