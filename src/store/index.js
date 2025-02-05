import { configureStore } from "@reduxjs/toolkit";
import challengeReducer from './features/challengeSlice';

export const store = configureStore({
	reducer: {
		challenge: challengeReducer
	}
})