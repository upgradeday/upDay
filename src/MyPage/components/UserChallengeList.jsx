import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleClgState } from '../../store/features/userChallengeSlice';
import { BsDot } from 'react-icons/bs';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function MyChallengeList() {
    const dispatch = useDispatch();
    const storedClgList = JSON.parse(localStorage.getItem('clglist')) || [];
    const loggedInUser = localStorage.getItem('loggedInUser');

    // 테스트 계정이 로그인했을 떄 storedList(챌린지 목록) 사용
    const getClgList = storedClgList.some(
        (challenge) => challenge.authorId === loggedInUser
    )
        ? storedClgList
        : [];

    // 내가 참여한 챌린지 목록
    const myChallenges = getClgList.filter(({ clgJoin }) => clgJoin);

    // 챌린지 역순(최신순)으로 배열 변경
    // const reversedChallenges = [...myChallenges].reverse();

    // 오래된 순서대로 정렬
    const sortedChallenges = [...myChallenges].sort(
        (a, b) => new Date(b.joinDate) - new Date(a.joinDate)
    );

    console.log(sortedChallenges);
    // 역순 번호 매핑
    const clgNum = (index) => myChallenges.length - index;

    // 챌린지 카테고리별 뱃지 클래스
    const badgeClasses = {
        식단: 'budge-meal',
        학습: 'budge-study',
        운동: 'budge-sport',
        습관: 'budge-habit',
    };
    const getBadgeClass = (category) => badgeClasses[category] || '';

    // 챌린지 상태 클래스
    const getClgTitleClass = (doing, done) =>
        !doing && done
            ? 'line-through'
            : !doing && !done
              ? 'line-through text-neutral-500'
              : '';
    const getClgDoingClass = (doing) => (doing ? 'doing-on' : 'doing-off');
    const getClgDoneClass = (done) => (done ? 'done-on' : 'done-off');

    // 내 챌린지 여부 아이콘 표시
    const isMyChallenge = (authorId) =>
        loggedInUser === authorId ? 'opacity-100' : 'opacity-0';

    return (
        <ul className='w-full h-[85%] text-sm overflow-scroll list-none'>
            {sortedChallenges.length > 0 ? (
                sortedChallenges.map(
                    (
                        { id, authorId, category, title, clgDoing, clgDone },
                        index
                    ) => (
                        <li
                            key={id}
                            className='flex flex-1 gap-x-1.5 h-15 py-4 border-b border-neutral-300 items-center'
                        >
                            <div className='flex flex-row justify-center w-[8%] text-xs text-neutral-500'>
                                {clgNum(index)}
                            </div>
                            <BsDot
                                className={`${isMyChallenge(authorId)} text-2xl text-blue-500 ml-[-3%]`}
                            />
                            <div
                                className={`${getBadgeClass(category)} w-10 h-6`}
                            >
                                {category}
                            </div>
                            <div className='flex flex-1 gap-1 h-6 items-center overflow-hidden'>
                                <span
                                    className={`${getClgTitleClass(clgDoing, clgDone)} block w-full overflow-hidden text-ellipsis whitespace-nowrap`}
                                >
                                    {title}
                                </span>
                            </div>
                            <div className='w-[48px] flex justify-between items-center'>
                                <button
                                    className={getClgDoingClass(clgDoing)}
                                    onClick={() =>
                                        dispatch(
                                            toggleClgState({
                                                id,
                                                type: 'doing',
                                            })
                                        )
                                    }
                                >
                                    <HiFire />
                                </button>
                                <button
                                    className={getClgDoneClass(clgDone)}
                                    onClick={() =>
                                        dispatch(
                                            toggleClgState({ id, type: 'done' })
                                        )
                                    }
                                >
                                    <HiDocumentCheck />
                                </button>
                            </div>
                        </li>
                    )
                )
            ) : (
                <li className='text-center text-gray-500 py-4'>
                    참여한 챌린지가 없습니다.
                </li>
            )}
        </ul>
    );
}
