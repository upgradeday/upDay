import { createSlice } from '@reduxjs/toolkit';
import { challengeList } from '../../data/challengeData';


const challengeSlice = createSlice({
    name: 'challenge',
    initialState: {
        list: challengeList,
        selectedChallenge: null,
		myPosts: [],  // 내가 작성한 글 목록
    },
    reducers: {
        setSelectedChallenge: (state, action) => {
            state.selectedChallenge = action.payload;
        },
        updateChallenge: (state, action) => {
            const updatedChallenge = action.payload;
            state.list = state.list.map((challenge) =>
                challenge.id === updatedChallenge.id
                    ? updatedChallenge
                    : challenge
            );
            state.setSelectedChallenge = updatedChallenge;
        },

		// 내가 작성한 글 필터링
		setMyPosts: (state, action) => {
			const loggedInUser = localStorage.get('loggedInUser');
			state.myPosts = state.list.filter(post => post.authorId === loggedInUser);

		}
    },
});

export const { setSelectedChallenge, updateChallenge, setMyPosts } = challengeSlice.actions;
export default challengeSlice.reducer;
