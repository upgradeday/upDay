import { createSlice } from '@reduxjs/toolkit';

// 로컬스토리지에서 챌린지 목록 가져오기
const allClgList = JSON.parse(localStorage.getItem('clglist')) || [];

const initialState = {
    list: allClgList, // 전체 챌린지 목록
};

const userChallengeSlice = createSlice({
    name: 'myChallengeList',
    initialState,
    reducers: {
        // 챌린지 상태 변경 (doing / done)
        toggleClgState: (state, action) => {
            const { id, type } = action.payload;

            // 새로운 배열을 생성하여 업데이트 (불변성 유지)
            state.list = state.list.map((challenge) => {
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
                            clgDoing: false, // 완료 버튼을 누르면 진행 중 상태는 항상 false가 되어야 함
                        };
                    }
                }
                return challenge;
            });

            // 변경된 데이터를 로컬스토리지에 반영
            localStorage.setItem('clglist', JSON.stringify(state.list));
        },
    },
});

export const { toggleClgState } = userChallengeSlice.actions;
export default userChallengeSlice.reducer;
