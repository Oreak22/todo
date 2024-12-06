import { useState } from "react";
import MoveSection from "./MoveSection";
import Delete from "./Delete";
import Edit from "./Edit";

const Box = ({ task, index }) => {
	const [options, setOptions] = useState(false);
	const [workOn, setworkOn] = useState(false);
	const [editing, setEditing] = useState(false);
	const [moving, setmoving] = useState(false);
	const [deleting, setdeleting] = useState(false);

	const handleOptions = (action) => {
		setOptions(!options);
		setworkOn(true);
		if (action === "edit") {
			setEditing(true);
		} else if (action === "move") {
			setmoving(true);
		} else if (action === "delete") {
			setdeleting(true);
		}
	};
	const close = () => {
		setOptions(false);
		setworkOn(false);
		setEditing(false);
		setmoving(false);
		setdeleting(false);
	};
	return (
		<>
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
							<li
								className=' border-bottom actionList border-1 border-dark px-3'
								onClick={() => handleOptions("move")}
							>
								move
							</li>
							<li
								className=' border-bottom actionList border-1 border-dark px-3 my-2'
								onClick={() => handleOptions("edit")}
							>
								edit
							</li>
							<li
								className='text-danger border-bottom actionList border-1 border-dark px-3'
								onClick={() => handleOptions("delete")}
							>
								delete
							</li>
							{/* </ul> */}
						</div>
					)}
				</div>
			</div>
			{workOn && (
				<div className='fixed-top bg-black workOn' draggable={false}>
					<div className='container-lg'>
						<div
							className='d-flex justify-content-center align-items-center '
							style={{ height: "100vh" }}
						>
							{moving && <MoveSection index={index} close={close} />}
							{deleting && <Delete index={index} close={close} />}
							{editing && <Edit index={index} close={close} />}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Box;
