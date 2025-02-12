import { createSlice } from '@reduxjs/toolkit';
import { getChallenges } from '../../utils/localStorage';


// const initialState = {
//     list: allClgList, // 전체 챌린지 목록
// };

const userChallengeSlice = createSlice({
    name: 'myChallengeList',
    // initialState,
    // reducers: {
    //     // 챌린지 상태 변경 (doing / done)
    //     toggleClgState: (state, action) => {
    //         const { id, type } = action.payload;

    //         // 새로운 배열을 생성하여 업데이트 (불변성 유지)
    //         state.list = state.list.map((challenge) => {
    //             if (challenge.id === id) {
    //                 if (type === 'doing') {
    //                     return {
    //                         ...challenge,
    //                         clgDoing: !challenge.clgDoing,
    //                         clgDone: challenge.clgDoing ? true : false,
    //                     };
    //                 } else if (type === 'done') {
    //                     return {
    //                         ...challenge,
    //                         clgDone: !challenge.clgDone,
    //                         clgDoing: false, // 완료 버튼을 누르면 진행 중 상태는 항상 false가 되어야 함
    //                     };
    //                 }
    //             }
    //             return challenge;
    //         });

    //         // 변경된 데이터를 로컬스토리지에 반영
    //         localStorage.setItem('clglist', JSON.stringify(state.list));
    //     },
    // },

	initialState: {
		myPosts: [],
		joinedChallenges: []
	},
	reducers: {
		setMyPosts: (state, action) => {
			const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
			const currentChallenges = getChallenges();
			state.myPosts = currentChallenges.filter(
				post => post.authorId === loggedInUser
			);
		},
		getMyJoinedChallenge: (state, action) => {
			const userId = action.payload;
			const currentChallenges = getChallenges();
			state.joinedChallenges = currentChallenges.filter(
				challenge => challenge.clgJoin && challenge.authorId !== userId
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
				post => post.authorId === JSON.parse(localStorage.getItem('loggedInUser'))
			);
			state.joinedChallenges = updatedChallenges.filter(
				challenge => challenge.clgJoin && challenge.authorId !== action.payload.userId
			);
		}
	}
});

export const { setMyPosts, getMyJoinedChallenge, toggleClgState } = userChallengeSlice.actions;
export default userChallengeSlice.reducer;
