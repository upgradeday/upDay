import { createSlice } from '@reduxjs/toolkit';
import { userChallengeList } from '../../data/userChallengeData';

const getInitialList = () => {
    // 로컬 스토리지에서 챌린지 가져오기
    const savedChallenges = localStorage.getItem('challenges');
    const parsedChallenges = savedChallenges ? JSON.parse(savedChallenges) : [];

    // 1. 더미데이터의 상태 업데이트
    const updatedList = userChallengeList.map((challenge) => {
        const savedChallenge = parsedChallenges.find(
            (saved) => saved.id === challenge.id
        );
        return savedChallenge || challenge;
    });

    // 2. 사용자가 작성한 챌린지 추가
    const userWrittenChallenges = parsedChallenges.filter(
        (challenge) =>
            !userChallengeList.some((data) => data.id === challenge.id)
    );

    // 3. 업데이트 된 더미데이터 + 사용자가 작성한 챌린지
    return [...updatedList, ...userWrittenChallenges];
};

const challengeSlice = createSlice({
    name: 'challenge',
    initialState: {
        list: getInitialList(), // 초기 데이터,
        selectedChallenge: null,
        myPosts: [], // 내가 작성한 글 목록
    },
    reducers: {
        // 선택된 챌린지 정보를 저장하는 액션
        setSelectedChallenge: (state, action) => {
            state.selectedChallenge = action.payload;
        },

        // 새로운 챌린지 생성하는 액션
        addChallenge: (state, action) => {
            state.list.push(action.payload);

            // 로컬 스토리지에 저장
            const currentChallenges = JSON.parse(
                localStorage.getItem('challenges') || '[]'
            );
            const updatedChallenges = [...currentChallenges, action.payload];
            localStorage.setItem(
                'challenges',
                JSON.stringify(updatedChallenges)
            );
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
            const existingChallenges = JSON.parse(
                localStorage.getItem('challenges') || '[]'
            );
            const updatedChallenges = existingChallenges.map((challenge) =>
                challenge.id === updatedChallenge.id
                    ? updatedChallenge
                    : challenge
            );
            localStorage.setItem(
                'challenges',
                JSON.stringify(updatedChallenges)
            );
        },

        // 챌린지 삭제하는 액션
        deleteChallenge: (state, action) => {
            // 전체 목록에서 id가 일치하지 않는 챌린지만 남겨 새 배열에 담는 로직
            // redux toolkit의 immer 라이브러리가 원본 보존을 해주기 때문에 코드에선 원본을 건드리는것 같지만 실제론 새 배열에 담는다.
            state.list = state.list.filter(
                (challenge) => challenge.id !== action.payload
            );

            // 삭제된 챌린지를 null로 변경
            if (state.selectedChallenge?.id === action.payload) {
                state.selectedChallenge = null;
            }

            // 로컬 스토리지 업데이트 하기
            const existingChallenges = JSON.parse(
                localStorage.getItem('challenges') || '[]'
            );
            const updatedChallenges = existingChallenges.filter(
                (challenge) => challenge.id !== action.payload
            );
            localStorage.setItem(
                'challenges',
                JSON.stringify(updatedChallenges)
            );
        },

        // 챌린지 참여 액션
        joinChallenge: (state, action) => {
            const challengeId = action.payload;

            // redux 스토어의 list 업데이트
            state.list = state.list.map((challenge) => {
                if (challenge.id === challengeId) {
                    return {
                        ...challenge,
                        clgJoin: true,
                        clgDoing: true,
                    };
                }
                return challenge;
            });

            // 로컬 스토리지 업데이트
            const existingChallenges = JSON.parse(
                localStorage.getItem('challenges') || '[]'
            );
            const updatedChallenge = existingChallenges.map((challenge) => {
                if (challenge.id === challengeId) {
                    return {
                        ...challenge,
                        clgJoin: true,
                        clgDoing: true,
                    };
                }
                return challenge;
            });
            localStorage.setItem(
                'challenges',
                JSON.stringify(updatedChallenge)
            );
        },

        // 로그인 한 유저의 챌린지만 필터링
        setMyPosts: (state, action) => {
            const loggedInUser = JSON.parse(
                localStorage.getItem('loggedInUser')
            );
            state.myPosts = state.list.filter(
                (post) => post.authorId === loggedInUser.email
            );
        },

        // 내가 참여한 챌린지 목록 필터링
        getMyJoinedChallenge: (state, action) => {
            const userId = action.payload;
            state.joinedChallenges = state.list.filter(
                (challenge) =>
                    challenge.clgJoin && challenge.authorId !== userId
            );
        },
    },
});

export const {
    setSelectedChallenge,
    updateChallenge,
    addChallenge,
    deleteChallenge,
    joinChallenge,
    setMyPosts,
    getMyJoinedChallenge,
} = challengeSlice.actions;
export default challengeSlice.reducer;
