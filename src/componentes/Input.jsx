import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adjustList } from '../redux/store';
import axios from 'axios';

const Input = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState(false);
  const myList = useSelector((state) => state.reducer.myList);
  const url = 'https://todoserver24.vercel.app/api/addtask';
  const addTask = (task, notes) => {
    axios
      .post(url, notes)
      .then((res) => {
        console.log(res);
        dispatch(adjustList(task));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='container-lg fixed-bottom py-2 bg-secondary mb-3 rounded'>
        <Formik
          initialValues={{ task: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.task) {
              errors.task = 'Required';
            }
            if (!values.note && note) {
              errors.note = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(JSON.parse(localStorage.OreakTodoData).userData.id);
            addTask([...myList, { task: values.task }], {
              title: values.task,
              description: note ? values.note : null,
              user: JSON.parse(localStorage.OreakTodoData).userData.id,
            });
            values.task = '';
            values.note = '';
            setNote(false);
          }}>
          {() => (
            <Form className=''>
              <div className='d-flex border-bottom'>
                <Field
                  type='text'
                  name='task'
                  className='w-100  todoInput px-2 fs-5'
                  placeholder='Input your task'
                />
                <ErrorMessage name='task' component='div' />

                {!note && (
                  <>
                    <button
                      onClick={() => setNote(!note)}
                      className={`btn border-0 rounded-circle bg-light ${
                        note ? 'text-danger' : 'text-dark'
                      } fs-4`}>
                      <i
                        className={`${
                          note ? 'bi bi-x-lg' : 'bi bi-paperclip'
                        }`}></i>
                    </button>
                  </>
                )}
                <button
                  className='btn btn-light rounded-pill'
                  type='submit'
                  // disabled={}
                >
                  {<i className='bi bi-pen fs-4'></i> || <span>send</span>}
                </button>
              </div>
              <div className='border-bottom'>
                {note && (
                  <div className='d-flex mx-0 justify-content-between'>
                    <Field
                      as='textarea'
                      rows={3}
                      name='note'
                      className='w-100  todoInput px-2 w-100 fs-5'
                      placeholder='Input your note'
                    />
                    <ErrorMessage name='note' />
                    {note && (
                      <div
                        className='mx-0 text-end px-0'
                        style={{ width: 'fit-content !important' }}>
                        <button
                          onClick={() => setNote(!note)}
                          className={`btn border-0 rounded-circle bg-light ${
                            note ? 'text-danger' : 'text-light'
                          } fs-4`}>
                          <i
                            className={`${
                              note ? 'bi bi-x-lg' : 'bi bi-paperclip'
                            }`}></i>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Input;
