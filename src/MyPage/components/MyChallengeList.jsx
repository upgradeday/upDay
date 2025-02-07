import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMyChallenge } from '../../store/features/userChallengeSlice';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function MyChallengeList() {
    const dispatch = useDispatch();

    const myChallenges = useSelector((state) => {
        return state.myChallengeList?.myChallenge || []; // Redux state 확인용 로그 추가, 에러 방지를 위해 []을 기본값으로 지정
    });

    useEffect(() => {
        dispatch(setMyChallenge());
    }, [dispatch]);

    const reversedChallenges = [...myChallenges].reverse(); // 리스트를 역순 정렬

    const changeBudge = (category) => {
        switch (category) {
            case '식단':
                return 'budge-meal';
            case '학습':
                return 'budge-study';
            case '운동':
                return 'budge-sport';
            case '습관':
                return 'budge-habit';
            default:
                return '';
        }
    };

    return (
        <ul className='w-full h-[85%] text-sm overflow-scroll'>
            {reversedChallenges.length > 0 ? (
                reversedChallenges.map((post) => (
                    <li
                        key={post.id}
                        className='flex flex-1 gap-2 py-4 border-b border-neutral-300'
                    >
                        <div className='w-[8%] p-0 text-neutral-500 flex justify-center items-center'>
                            {post.id}
                        </div>
                        <div className='flex flex-1 gap-1 items-center p-0'>
                            <div
                                className={`text-xs ${changeBudge(post.category)}`}
                            >
                                {post.category}
                            </div>
                            {post.title}
                        </div>
                        <div className='w-[48px] p-0 flex justify-between items-center'>
                            <button className='doing-on'>
                                <HiFire />
                            </button>
                            <button className='done-off'>
                                <HiDocumentCheck />
                            </button>
                        </div>
                    </li>
                ))
            ) : (
                <li className='text-center text-gray-500 py-2'>
                    참여한 챌린지가 없습니다.
                </li>
            )}
        </ul>
    );
}
