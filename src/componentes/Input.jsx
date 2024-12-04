import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustList } from "../redux/store";

const Input = () => {
	const dispatch = useDispatch()
	const myList = useSelector(state=>state.reducer.myList)
	const addTask = (task) => {
		dispatch(adjustList(task));
	}
	return (
		<>
			<div className='container-lg fixed-bottom py-2 bg-secondary mb-3 rounded-pill'>
				<Formik
					initialValues={{ task: "" }}
					onSubmit={(values) => {
						addTask([...myList,{task:values.task}]);
						values.task = "";
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
								className='btn btn-light rounded-pill'
								type='submit'
								// disabled={}
							>
								{<i className='bi bi-send fs-4'></i>|| <span>send</span>}
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default Input;
