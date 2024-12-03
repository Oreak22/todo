import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { nameChange } from "../redux/store";
import Input from "../componentes/Input";
import "../style/style.css";

const Home = () => {
	const count = useSelector((state) => state.reducer.name);
	const dispatch = useDispatch();
	return (
		<>
			<Input />
			<div className='container-lg'>
				<div>New Project</div>

				<h1>{count}</h1>
				<button
					className='btn btn-primary'
					onClick={() => dispatch(nameChange("tosin"))}
				>
					Change
				</button>
			</div>
		</>
	);
};

export default Home;
