import { useState } from "react";

const Box = ({ task, index }) => {
	const [options, setOptions] = useState(false);
	return (
		<div
			className='d-flex align-items-center eachBox'
			title='Drag to adjust tasks in order'
		>
			<h6 className='rounded-2 shadow-sm py-3 px-2 w-100 list'>{task}</h6>
			<div className='bugger'>
				<button
					className='btn shadow-0 h-100 px-0'
					onClick={() => setOptions(!options)}
				>
					<i className='bi bi-three-dots-vertical'></i>
				</button>
				{options && (
					<div className='bg-light optionConatiner shadow-sm px-0 py-2'>
						{/* <ul style={{listStyle:"none"}}> */}
						<li className=' border-bottom border-1 border-dark px-3'>move</li>
						<li className=' border-bottom border-1 border-dark px-3 my-2'>edit</li>
						<li className='text-danger border-bottom border-1 border-dark px-3'>
							delete
						</li>
						{/* </ul> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default Box;
