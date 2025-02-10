import { createSlice } from '@reduxjs/toolkit';

// 로컬스토리지에 저장된 전체 챌린지 목록가져오기
const allClgList = JSON.parse(localStorage.getItem('clglist'));

// 초기 상태 정의
const initialState = {
    list: allClgList, // 전체 챌린지 데이터
    // myChallenge: [], // 내가 참여한 챌린지 목록
};

const userChallengeSlice = createSlice({
    name: 'myChallengeList',
    initialState,
    reducers: {
        // 내가 참여한 챌린지 필터링
        // setMyChallenge: (state) => {
        //     state.myChallenge = state.list.filter(({ clgJoin }) => clgJoin);
        // },

        // 챌린지 상태 변경 (doing / done)
        toggleClgState: (state, action) => {
            const { id, type } = action.payload;
            const challenge = state.list.find((clg) => clg.id === id);

            if (challenge) {
                if (type === 'doing') {
                    if (challenge.clgDoing) {
                        challenge.clgDoing = false; // 완료 : 진행 중인 아이콘 클릭시, 진행 중 off & 완료 on
                        challenge.clgDone = true;
                    } else {
                        challenge.clgDoing = true; // 재진행 : 진행 중이 아닌 아이콘 클릭시, 진행 중 on & 완료 off
                        challenge.clgDone = false;
                    }
                } else if (type === 'done') {
                    if (challenge.clgDone) {
                        challenge.clgDone = false; // 종료 : 완료 아이콘 클릭시, 진행 중 off & 완료 off
                        challenge.clgDoing = false;
                    } else {
                        challenge.clgDone = true; // 재진행 : 완료가 아닌 아이콘 클릭시, 진행 중 off & 완료 on
                        challenge.clgDoing = false;
                    }
                }
            }

            // 변경된 데이터를 로컬스토리지에 반영
            localStorage.setItem('clglist', JSON.stringify(state.list));
        },
    },
});

export const { toggleClgState } = userChallengeSlice.actions;
export default userChallengeSlice.reducer;
