import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
    list: [],
    myClgDoing: [], // 진행 중인 챌린지
    myClgDone: [], // 완료한 챌린지
    myClgOver: [], // 종료한 챌린지
};

const userChallengeReportSlice = createSlice({
    name: 'myChallengeReport',
    initialState,
    reducers: {
        // 로컬스토리지에서 가져온 데이터를 설정하는 액션
        setClgList: (state, action) => {
            state.list = action.payload; // 로컬스토리지에서 가져온 데이터를 리스트에 저장
        },

        // 진행 중인 챌린지
        setMyClgDoing: (state) => {
            // 안전하게 필터링하도록 개선
            state.myClgDoing = state.list.filter(
                ({ clgDoing }) => clgDoing === true
            );
        },

        // 완료(목표달성)한 챌린지
        setMyClgDone: (state) => {
            // 안전하게 필터링하도록 개선
            state.myClgDone = state.list.filter(
                ({ clgDone }) => clgDone === true
            );
        },

        // 종료(목표미달성)한 챌린지
        setMyClgOver: (state) => {
            // 안전하게 필터링하도록 개선
            state.myClgOver = state.list.filter(
                ({ clgDoing, clgDone }) => clgDoing !== true && clgDone !== true
            );
        },
    },
});

export const { setClgList, setMyClgDoing, setMyClgDone, setMyClgOver } =
    userChallengeReportSlice.actions;
export default userChallengeReportSlice.reducer;
