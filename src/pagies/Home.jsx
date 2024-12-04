import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { nameChange } from "../redux/store";
import Input from "../componentes/Input";
import "../style/style.css";
import List from "../componentes/List";

const Home = () => {
	const count = useSelector((state) => state.reducer.name);
	const modelDate = new Date();
	const year = modelDate.getFullYear();

	const splitDate = Date().split(" ");
	return (
		<>
			<div className='py-3 info bg-light'>
				<div className="container-lg">{splitDate[0] + " " + splitDate[1] + " " + splitDate[2] + " " + year}</div>
			</div>
			<div className='container-lg'>
				<Input />
				<List />
			</div>
		</>
	);
};

export default Home;
