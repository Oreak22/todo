import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";
import { adjustList } from "../redux/store";

const List = () => {
	const myList = useSelector((state) => state.reducer.myList);
	const [overIndex, setoverIndex] = useState();
	const dispatch = useDispatch();
	const updateList = (array, fromIndex, toIndex) => {
		array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
		dispatch(adjustList(array))
	};

	return (
		<div className='shadow list-container p-3 py-4 mb-5'>
			{myList.length <= 0 ? (
				<div className='alert alert-light mx-auto text-center'>
					Your Task Is Empty, Update It With Task Ahead
				</div>
			) : (
				<div className="mb-5">
					<ol>
						{myList.map((tasks, index) => {
							return (
								<li
									key={index}
									className=' my-1  '
									draggable
									// onDragEnd={()=>dispatch(adjustList({array:myList,fromIndex:index,toIndex:overIndex}))}
									onDragEnd={() => updateList([...myList], index, overIndex)}
									onDragOver={() => {
										setoverIndex(index);
									}}
								>
									<Box index={index} task={tasks.task} />
								</li>
							);
						})}
					</ol>
				</div>
			)}
		</div>
	);
};

export default List;
