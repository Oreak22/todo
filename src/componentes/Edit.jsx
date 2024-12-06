import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustList } from "../redux/store";

const Edit = ({ index, close }) => {
	const myList = useSelector((state) => state.reducer.myList);
	const dispatch = useDispatch();
	const editTask = (values) => {
		const newList = () => {
			return myList.map((item, i) => {
				if (i === index) {
					return { task: values.editTask };
				} else {
					return item;
				}
			});
		};
		// console.log(newList());
		dispatch(adjustList(newList()));
		close();
	};
	return (
		<div className='bg-light rounded-3 px-3 py-4 w-100'>
			<div className='d-flex justify-content-between align-items-center my-2'>
				{" "}
				<h6 className='bg-warning py-2 text-center px-2'>
					Edit task {index + 1}{" "}
				</h6>
				<button className='btn btn-outline-danger'>
					<i className='bi bi-x-lg' onClick={close}></i>
				</button>
			</div>
			<Formik
				initialValues={{ editTask: "" }}
				onSubmit={(values) => {
					editTask(values);
				}}
				validate={(values) => {
					const errors = {};
					if (!values.editTask) {
						errors.editTask = "Please enter a new task";
					}
					return errors;
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Field type='text' name='editTask' className='form-control' />
						<ErrorMessage name='editTask' className='text-danger' />
						<div className='d-flex mt-3 justify-content-end'>
							{/* <button className='btn btn-light' onClick={() => close()}>
								Cancle
							</button> */}
							<button
								className='btn btn-warning ms-3'
								type='submit'
								disabled={isSubmitting}
							>
								Edit{" "}
								<span>
									<i className='bi bi-eraser'></i>
								</span>
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Edit;
