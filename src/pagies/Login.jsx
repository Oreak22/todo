import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/store';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = (values) => {
    setIsLoading(true);
    const { email, password } = values;
    axios
      .post(`https://todoserver24.vercel.app/api/login`, { email, password })
      .then((res) => {
        console.log(res);
        dispatch(setToken(res.data.token));
        res.data.statusStatus ? navigate('/to-do') : setError(res.data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className='signContainer container-lg'>
        <div
          className='d-flex justify-content-center align-items-center'
          style={{ height: '100dvh' }}>
          <div className='row justify-content-center align-items-center shadow-sm rounded-1 p-md-3 p-1 w-100'>
            {error && (
              <div className='alert alert-danger col-11 col-lg-8 mb-5 text-center'>
                {error}
              </div>
            )}

            <div className='col-11 col-lg-6'>
              <Formik
                initialValues={{
                  email: '',
                  name: '',
                  password: '',
                  confirmPassword: '',
                }}
                onSubmit={(values) => {
                  login(values);
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = 'Invalid email address';
                  } else if (!values.password) {
                    errors.password = 'Required';
                  }
                  return errors;
                }}>
                {({ isSubmitting }) => (
                  <Form>
                    <div>
                      <label htmlFor='email'>Email</label>
                      <Field
                        name='email'
                        type='email'
                        className='form-control'
                      />
                      <p className='text-danger'>
                        <ErrorMessage name='email' />
                      </p>
                    </div>
                    <div>
                      <label htmlFor='password'>Password</label>
                      <Field
                        name='password'
                        type='password'
                        className='form-control'
                      />
                      <p className='text-danger'>
                        <ErrorMessage name='password' className='text-danger' />
                      </p>
                    </div>

                    <div className='d-flex justify-content-between mt-3'>
                      <div>
                        Dont't have an account?{' '}
                        <Link
                          className='text-decoration-none text-warning'
                          to='/'>
                          Signin
                        </Link>
                      </div>
                      <button
                        className='btn btn-success'
                        type='submit'
                        disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Sign-In'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className='col-6 d-none d-lg-block border-start'>
              <h1 className='display-3 mx-auto text-center text-warning'>
                Oreak Todo
              </h1>
              <p className='text-center fs-4'>
                Plan your day as to your liking
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
