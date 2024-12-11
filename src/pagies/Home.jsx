import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useDispatch, useSelector } from 'react-redux';
import { nameChange } from '../redux/store';
import Input from '../componentes/Input';
import '../style/style.css';
import List from '../componentes/List';
import { Link } from 'react-router-dom';

const Home = () => {
  const count = useSelector((state) => state.reducer.name);
  const modelDate = new Date();
  const year = modelDate.getFullYear();

  const splitDate = Date().split(' ');
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
        <div className='container-lg'>
          <Link className='navbar-brand fw-bold text-primary' to='/'>
            TaskMaster
          </Link>
          
          <button 
            className='navbar-toggle sticky-top btn btn-sm btn-outline-light border-0 outline-0' 
            type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#navbarNav'
          >
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
