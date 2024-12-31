import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useDispatch, useSelector } from 'react-redux';
import { nameChange, setList } from '../redux/store';
import Input from '../componentes/Input';
import '../style/style.css';
import List from '../componentes/List';
import { Link, useNavigate } from 'react-router-dom';
import TokenCheck from '../securety/TokenCheck';
import { useEffect } from 'react';
import axios from 'axios';
// import TokenCheck from '../componentes/TokenCheck';

const Home = () => {
  const count = useSelector((state) => state.reducer.name);
  const modelDate = new Date();
  const year = modelDate.getFullYear();
  const navigate = useNavigate();
  const oreakTodoData = localStorage.getItem('OreakTodoData');
  const myList = useSelector((state) => state.reducer.list);
  const dispatch = useDispatch();

  const splitDate = Date().split(' ');
  useEffect(() => {
    if (oreakTodoData) {
      axios
        .get('https://todoserver24.vercel.app/api/getTodo', {
          headers: {
            userid: JSON.parse(localStorage.OreakTodoData).userData._id,
          },
        })
        .then((res) => {
          if (res.data.status) {
            dispatch(setList(res.data.data));
          } else {
            dispatch(setList([]));
          }
        })
        .catch((error) => {
          console.error('Error fetching todos:', error);
          dispatch(setList([]));
        });
    } else {
      navigate('/signin');
    }
  }, []);
  return (
    <>
      {/* <TokenCheck /> */}
      <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
        <div className='container-lg'>
          <Link className='navbar-brand fw-bold text-dark' to='/'>
            TaskMaster
          </Link>

          <button
            className='navbar-toggle sticky-top btn btn-sm btn-outline-light border-0 outline-0'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/todo'>
                  <i className='bi bi-list-check me-1'></i>Todo
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/history'>
                  <i className='bi bi-clock-history me-1'></i>History
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/profile'>
                  <i className='bi bi-person me-1'></i>Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div>{Date.now()}</div> */}

      <div className='py-3 info bg-light'>
        <div className='container-lg'>
          {splitDate[0] + ' ' + splitDate[1] + ' ' + splitDate[2] + ' ' + year}
        </div>
      </div>
      <div className='container-lg'>
        <Input />
        <List />
      </div>
    </>
  );
};

export default Home;
