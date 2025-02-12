import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from './features/challengeSlice';
import userReducer from './features/UserSlice';
import userChallengeReducer from './features/userChallengeSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        challenge: challengeReducer,
        myClgList: userChallengeReducer,
    },
});
