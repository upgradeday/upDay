import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleClgState } from '../../store/features/userChallengeSlice';
import { BsDot } from 'react-icons/bs';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function UserChallengeList({ filteredChallenges }) {
    const dispatch = useDispatch();
    const myPosts = useSelector((state) => state.myClgList.myPosts);
    const joinedChallenges =
        useSelector((state) => state.myClgList.joinedChallenges) || [];

    // 노출할 목록 선택
    const challengesToDisplay =
        (filteredChallenges?.length > 0
            ? filteredChallenges
            : joinedChallenges) || [];

    // 참여날짜 오래된 순으로 정렬
    const sortedChallenges = [...challengesToDisplay].sort(
        (a, b) => new Date(b.joinDate) - new Date(a.joinDate)
    );

    // 역순 번호 매핑
    const clgNum = (index) => sortedChallenges.length - index;

    // 챌린지 상태 변경 핸들러
    const handleToggle = (id, type) => {
        dispatch(toggleClgState({ id, type }));
    };

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
    const isMyChallenge = (authorId) => {
        if (!Array.isArray(myPosts)) return 'opacity-0';
        return myPosts.some((post) => post.authorId === authorId)
            ? 'opacity-100'
            : 'opacity-0';
    };

    return (
        <ul className='w-full h-[490px] md:h-[570px] text-xs md:text-sm overflow-scroll list-none'>
            {sortedChallenges.length > 0 ? (
                sortedChallenges.map(
                    (
                        { id, authorId, category, title, clgDoing, clgDone },
                        index
                    ) => (
                        <li
                            key={id}
                            className='flex flex-1 gap-x-1 md:gap-x-1.5 h-15 py-3 md:py-4 border-b border-neutral-300 items-center'
                        >
                            <div className='flex flex-row justify-center w-[8%] text-[10px] md:text-xs text-neutral-500'>
                                {clgNum(index)}
                            </div>
                            <BsDot
                                className={`${isMyChallenge(authorId)} text-2xl text-blue-500 ml-[-3%]`}
                            />
                            <div className={`${getBadgeClass(category)}`}>
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
                                    onClick={() => handleToggle(id, 'doing')}
                                >
                                    <HiFire />
                                </button>
                                <button
                                    className={getClgDoneClass(clgDone)}
                                    onClick={() => handleToggle(id, 'done')}
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
