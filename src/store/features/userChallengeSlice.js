import { createSlice } from '@reduxjs/toolkit';
import { userChallengeList } from '../../data/userChallengeData';

// 초기 상태 정의
const initialState = {
    list: userChallengeList, // 전체 챌린지 데이터
    myChallenge: [], // 내가 참여한 챌린지 목록
};

const userChallengeSlice = createSlice({
    name: 'myChallengeList',
    initialState,
    reducers: {
        // 내가 참여한 챌린지 필터링
        setMyChallenge: (state) => {
            state.myChallenge = state.list.filter(({ clgJoin }) => clgJoin);
        },

        // 챌린지 수행 여부 토글
        toggleClgState: (state, action) => {
            const { id, type } = action.payload;
            const storedData =
                JSON.parse(localStorage.getItem('userChallengList')) ||
                state.list;

            const updatedData = storedData.map((challenge) => {
                if (challenge.id === id) {
                    return {
                        ...challenge,
                        clgDoing:
                            type === 'doing'
                                ? !challenge.clgDoing
                                : challenge.clgDoing,
                        clgDone:
                            type === 'done'
                                ? !challenge.clgDone
                                : challenge.clgDone,
                    };
                }
                return challenge;
            });

            localStorage.setItem(
                'userChallengList',
                JSON.stringify(updatedData) // 변경된 데이터를 로컬스토리지에 저장
            );

            state.list = updatedData; // Redux state도 업데이트
        },
    },
});

export const { setMyChallenge, toggleClgState } = userChallengeSlice.actions;
export default userChallengeSlice.reducer;
