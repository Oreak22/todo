import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
	name: "Olaoluwa",
	myList: [],
	token: null,
	isAuthenticated: false,
	isLoading: false,
	error: null
};

export const counterSlice = createSlice({
	name: "counter",
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
			console.log(state.token);
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
} = counterSlice.actions;

export default counterSlice.reducer;
