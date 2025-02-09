import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setMyChallenge,
    toggleClgState,
} from '../../store/features/userChallengeSlice';
import { BsDot } from 'react-icons/bs';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function MyChallengeList() {
    const dispatch = useDispatch();
    const myChallenges = useSelector(
        (state) => state.myChallengeList?.myChallenge || []
    );
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
        dispatch(setMyChallenge());
    }, [dispatch]);

    const reversedChallenges = [...myChallenges].reverse();

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
            {reversedChallenges.length > 0 ? (
                reversedChallenges.map(
                    ({ id, authorId, category, title, clgDoing, clgDone }) => (
                        <li
                            key={id}
                            className='flex flex-1 gap-x-1.5 h-15 py-4 border-b border-neutral-300 items-center'
                        >
                            <div className='flex flex-row justify-center w-[8%] text-xs text-neutral-500'>
                                {id}
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
                <li className='text-center text-gray-500 py-2'>
                    참여한 챌린지가 없습니다.
                </li>
            )}
        </ul>
    );
}
