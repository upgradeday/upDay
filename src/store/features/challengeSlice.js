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
		// 선택된 챌린지 정보를 저장하는 액션 
        setSelectedChallenge: (state, action) => {
            state.selectedChallenge = action.payload;
        },

		// 새로운 챌린지 생성하는 액션
		addChallenge: (state, action) => {
			state.list.push(action.payload);
		},

		// 변경된 챌린지 정보를 처리하는 액션
        updateChallenge: (state, action) => {
            const updatedChallenge = action.payload;

			// 전체 목록에서 해당 챌린지 정보 업데이트
            state.list = state.list.map((challenge) =>
                challenge.id === updatedChallenge.id
                    ? updatedChallenge
                    : challenge
            );
            state.selectedChallenge = updatedChallenge;
        },

		// 로그인 한 유저의 챌린지만 필터링
		setMyPosts: (state, action) => {
			const loggedInUser = localStorage.getItem('loggedInUser');
			state.myPosts = state.list.filter(post => post.authorId === loggedInUser);

		}
    },
});

export const { setSelectedChallenge, updateChallenge, setMyPosts, addChallenge } = challengeSlice.actions;
export default challengeSlice.reducer;
