import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pagies/Home';
import Signin from './pagies/Signin';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pagies/Login';
import TokenCheck from './securety/TokenCheck';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setList } from './redux/store';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const oreakTodoData = localStorage.getItem('OreakTodoData');
  const myList = useSelector((state) => state.reducer.list);
  // useEffect(() => {
  //   if (oreakTodoData) {
  //     axios
  //       .get('https://todoserver24.vercel.app/api/getTodo', {
  //         headers: {
  //           userid: JSON.parse(localStorage.OreakTodoData).userData._id,
  //         },
  //       })
  //       .then((res) => {
  //         if (res.data.status) {
  //           dispatch(setList([...res.data.data]));
  //         } else {
  //           dispatch(setList([...res.data.data]));
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching todos:', error);
  //         dispatch(setList([{ task: 'jfgbi' }]));
  //       });
  //   } else {
  //     navigate('/signin');
  //   }

  //   // dispatch(setList(myList()));
  // }, [myList]);

  return (
    <>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/to-do' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
