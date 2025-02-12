import { createSlice } from '@reduxjs/toolkit';
import { getChallenges } from '../../utils/localStorage';

const userChallengeSlice = createSlice({
    name: 'myClgList',
    initialState: {
        myPosts: [],
        joinedChallenges: [],
    },
    reducers: {
        setMyPosts: (state, action) => {
            const loggedInUser = JSON.parse(
                localStorage.getItem('loggedInUser')
            );
            const currentChallenges = getChallenges();
            state.myPosts = currentChallenges.filter(
                (post) => post.authorId === loggedInUser
            );
        },
        getMyJoinedChallenge: (state, action) => {
            const userId = action.payload;
            const currentChallenges = getChallenges();
            state.joinedChallenges = currentChallenges.filter(
                (challenge) =>
                    challenge.clgJoin && challenge.authorId !== userId
            );
        },
        toggleClgState: (state, action) => {
            const { id, type } = action.payload;
            const currentChallenges = getChallenges();

            const updatedChallenges = currentChallenges.map((challenge) => {
                if (challenge.id === id) {
                    if (type === 'doing') {
                        return {
                            ...challenge,
                            clgDoing: !challenge.clgDoing,
                            clgDone: challenge.clgDoing ? true : false,
                        };
                    } else if (type === 'done') {
                        return {
                            ...challenge,
                            clgDone: !challenge.clgDone,
                            clgDoing: false,
                        };
                    }
                }
                return challenge;
            });

            localStorage.setItem('clglist', JSON.stringify(updatedChallenges));

            state.myPosts = updatedChallenges.filter(
                (post) =>
                    post.authorId ===
                    JSON.parse(localStorage.getItem('loggedInUser'))
            );
            state.joinedChallenges = updatedChallenges.filter(
                (challenge) =>
                    challenge.clgJoin &&
                    challenge.authorId !== action.payload.userId
            );
        },
    },
});

export const { setMyPosts, getMyJoinedChallenge, toggleClgState } =
    userChallengeSlice.actions;
export default userChallengeSlice.reducer;
