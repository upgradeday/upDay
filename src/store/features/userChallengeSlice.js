import { createSlice } from '@reduxjs/toolkit';
import { getChallenges } from '../../utils/localStorage';

const getInitialList = () => {
    try {
        const savedChallenges = localStorage.getItem('clglist');
        if (savedChallenges) {
            return JSON.parse(savedChallenges);
        }
    } catch (error) {
        console.error('로컬 스토리지 파싱 오류:', error);
    }
    return [];
};

const saveChallengesToLocalStorage = (challenges) => {
    localStorage.setItem('clglist', JSON.stringify(challenges));
};

const userChallengeSlice = createSlice({
    name: 'myClgList',
    initialState: {
        myPosts: [], // 테스트계정이 작성한 챌린지 목록
        joinedChallenges: [], // 테스트계정이 참여한 챌린지 목록
        selectedChallenge: null, // 현재 선택된 챌린지
        list: getInitialList(), // 초기 데이터,
    },
    reducers: {
        // 작성한 챌린지 가져오는 액션
        setMyPosts: (state, action) => {
            const loggedInUser = localStorage.getItem('loggedInUser');
            const currentChallenges = getChallenges();

            state.myPosts = currentChallenges.filter(
                (post) => post.authorId === loggedInUser
            );

            saveChallengesToLocalStorage(currentChallenges);
        },

        // 참여한 챌린지 가져오는 액션
        getMyJoinedChallenge: (state) => {
            const currentChallenges = getChallenges();
            state.joinedChallenges = currentChallenges.filter(
                (challenge) => challenge.clgJoin
            );

            saveChallengesToLocalStorage(currentChallenges);
        },

        // 참여한 챌린지 상태 변경 및 저장하는 액션
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

            saveChallengesToLocalStorage(updatedChallenges);

            state.list = updatedChallenges;
            state.myPosts = updatedChallenges.filter(
                (post) => post.authorId === localStorage.getItem('loggedInUser')
            );
            state.joinedChallenges = updatedChallenges.filter(
                (challenge) => challenge.clgJoin
            );
        },

        // 선택된 챌린지 정보를 저장하는 액션
        setSelectedChallenge: (state, action) => {
            state.selectedChallenge = action.payload;
        },

        // 변경된 챌린지 정보를 처리하는 액션
        updateChallenge: (state, action) => {
            // 수정된 새로운 데이터 값
            const updatedChallenge = action.payload;

            // 전체 목록에서 해당 챌린지 정보 업데이트
            state.list = state.list.map((challenge) =>
                challenge.id === updatedChallenge.id
                    ? updatedChallenge
                    : challenge
            );

            // 선택된 챌린지의 상태 업데이트
            state.selectedChallenge = updatedChallenge;

            // 로컬 스토리지 상태 업데이트
            const currentChallenges = getChallenges();
            const updatedChallenges = currentChallenges.map((challenge) =>
                challenge.id === updatedChallenge.id
                    ? updatedChallenge
                    : challenge
            );
            saveChallengesToLocalStorage(updatedChallenges);
        },

        // 챌린지 삭제하는 액션

        deleteChallenge: (state, action) => {
            const challengeId = action.payload;
            const currentChallenges = getChallenges();
            const updatedList = currentChallenges.filter(
                (challenge) => challenge.id !== challengeId
            );

            saveChallengesToLocalStorage(updatedList);

            state.list = updatedList;
            state.joinedChallenges = updatedList.filter(
                (challenge) => challenge.clgJoin
            );
            state.selectedChallenge =
                state.selectedChallenge?.id === challengeId
                    ? null
                    : state.selectedChallenge;
            state.myPosts = updatedList.filter(
                (post) => post.authorId === localStorage.getItem('loggedInUser')
            );
        },
    },
});

export const {
    setMyPosts,
    getMyJoinedChallenge,
    toggleClgState,
    setSelectedChallenge,
    updateChallenge,
    deleteChallenge,
} = userChallengeSlice.actions;

export default userChallengeSlice.reducer;
