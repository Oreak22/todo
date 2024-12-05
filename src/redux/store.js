import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
	name: "Olaoluwa",
	myList: [{task:'Go home'}, {task:'Go to work'}, {task:'Go to school'}],
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
	},
});

// Action creators are generated for each case reducer function
export const {
	increment,
	decrement,
	incrementByAmount,
	nameChange,
	adjustList,
} = counterSlice.actions;

export default counterSlice.reducer;
