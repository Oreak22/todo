import { Route, Routes } from 'react-router-dom';
import Home from './pagies/Home';
import Signin from './pagies/Signin';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pagies/Login';
import TokenCheck from './securety/TokenCheck';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setList } from './redux/store';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:5022/api/getTodo', {
        headers: {
          userid: JSON.parse(localStorage.OreakTodoData).userData._id,
        },
      })
      .then((res) => {
        if (res.data.status) {
          dispatch(setList([...res.data.data]));
        } else {
          dispatch(setList([...res.data.data]));
        }
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
        dispatch(setList([{ task: 'jfgbi' }]));
      });
    // dispatch(setList(myList()));
  }, []);

  return (
    <>
      <TokenCheck />
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/to-do' element={<Home />} />
        <Route path='/todo' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
