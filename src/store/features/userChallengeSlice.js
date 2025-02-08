import { createSlice } from '@reduxjs/toolkit';
import { userChallengeList } from '../../data/userChallengeData';

const userChallengeSlice = createSlice({
    name: 'myChallengeList',
    initialState: {
        list: userChallengeList, // 전체 챌린지 데이터
        myChallenge: [], // 내가 참여한 챌린지, 초기값을 빈 배열로 설정
    },
    reducers: {
        setMyChallenge: (state) => {
            state.myChallenge = state.list.filter(
                (challenge) => challenge.clgJoin // 내가 참여한 챌린지 = clgJoin:true
            );
        },
        toggleClg: (state, action) => {
            const clgState = state.list.find(
                (post) => post.id === action.payload
            );
            if (clgState) {
                clgState.clgDoing = !clgState.clgDoing;
            }
        },
    },
});

export const { setMyChallenge, toggleClgDoing } = userChallengeSlice.actions;
export default userChallengeSlice.reducer;
