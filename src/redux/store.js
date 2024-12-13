import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// const dispatch = useDispatch();



const initialState = {
  currentList: [],
  myList: [],
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    nameChange: (state, action) => {
      state.name = action.payload;
    },
    adjustList: (state, action) => {
      state.myList = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setList: (state, action) => {
      state.myList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  nameChange,
  adjustList,
  setToken,
  logout,
  setLoading,
  setError,
  setList,
} = counterSlice.actions;

export default counterSlice.reducer;
