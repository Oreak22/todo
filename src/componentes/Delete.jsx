import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adjustList } from "../redux/store";

const Delete = ({ index, close }) => {
    const myList = useSelector(state=>state.reducer.myList)
    const dispatch = useDispatch()
    const deleteTask = () => {
        const newList = myList.filter((item, i) => i !== index)
        dispatch(adjustList(newList))
        close()
    }
	return (
		<div className='bg-light rounded-3 px-3 py-4'>
			<h6 className="mb-3">Delete task {index}, <span className="text-danger fw-bold">are you sure?</span></h6>
			<div className='d-flex justify-content-between align-items-center'>
				<button className='btn btn-light' onClick={() => close()}>
					Cancle{" "}
				</button>
				<button className='btn btn-danger ms-3' onClick={deleteTask}>
					Delete{" "}
					<span>
						<i className='bi bi-trash'></i>
					</span>
				</button>
			</div>
		</div>
	);
};

export default Delete;
