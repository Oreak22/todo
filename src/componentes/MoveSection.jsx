import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustList } from "../redux/store";

const MoveSection = ({ index, close }) => {
	const dispatch = useDispatch();
	const myList = useSelector((state) => state.reducer.myList);
	const maxMove = useSelector((state) => state.reducer.myList.length);
	//
	const updateList = (array, fromIndex, toIndex) => {
		array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
		dispatch(adjustList(array));
	};
	return (
		<div className='bg-light rounded-3 px-3 py-4'>
			<h6>Move {index + 1} task</h6>
			<div className='d-flex justify-content-evenly align-items-center'>
				<Formik
					initialValues={{ moveTo: "" }}
					validate={(value) => {
						const errors = {};
						if (value.moveTo < 1) {
							errors.move = "Move must be greater than 0";
						} else if (value.moveTo > maxMove) {
							errors.move = "Move must be less than or equal to " + maxMove;
						}
						return errors;
					}}
					onSubmit={(values) => {
						close();
						updateList([...myList], index, values.moveTo - 1);
					}}
				>
					{({ isSubmitting }) => (
						<Form className='d-flex justify-content-center align-items-center'>
							<Field
								type='number'
								name=''
								value={index + 1}
								id=''
								disabled
								style={{ width: "50px" }}
								className='form-control mx-2'
							/>
							<Field
								type='number'
								className='form-control mx-2'
								max={maxMove}
								min={1}
								name='moveTo'
								id=''
								style={{ width: "50px" }}
							/>
							<ErrorMessage component='div' name='moveTo' />
							<button
								className='btn btn-success'
								type='submit'
								disabled={isSubmitting}
							>
								{" "}
								<i className='bi bi-arrow-down-up'></i>
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default MoveSection;
