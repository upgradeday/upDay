import { createSlice } from '@reduxjs/toolkit';
import { challengeList } from '../../data/challengeData';


const challengeSlice = createSlice({
    name: 'challenge',
    initialState: {
        list: challengeList, // 초기 데이터, challengeData 배열
        selectedChallenge: null, // 
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
            state.selectedChallenge = updatedChallenge;
        },

		// 내가 작성한 글 필터링
		setMyPosts: (state, action) => {
			const loggedInUser = localStorage.getItem('loggedInUser');
			state.myPosts = state.list.filter(post => post.authorId === loggedInUser);

		}
    },
});

export const { setSelectedChallenge, updateChallenge, setMyPosts } = challengeSlice.actions;
export default challengeSlice.reducer;
