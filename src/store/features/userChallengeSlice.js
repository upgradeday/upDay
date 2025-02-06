import { createSlice } from '@reduxjs/toolkit';
import { userChallengeList } from '../../data/userChallengeData';

const userChallengeSlice = createSlice({
    // 내가 참여한 챌린지를 기준으로
    // 추가된 챌린지를 내가 참여한 챌린지 배열에 추가 후
    // 내 챌린지 리스트에 보여주기
});

export const { setSelectedChallenge, updateChallenge, setMyPosts } =
    userChallengeSlice.actions;
export default userChallengeSlice.reducer;
