import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMyChallenge } from '../../store/features/userChallengeSlice';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function MyChallengeList() {
    const dispatch = useDispatch();

    // Redux state 확인용 로그 추가
    const myChallenges = useSelector((state) => {
        console.log('Redux State:', state); // Redux 상태 확인
        return state.myChallengeList?.myChallenge || []; // 방어 코드 추가
    });

    useEffect(() => {
        dispatch(setMyChallenge());
    }, [dispatch]);
    return (
        <ul className='w-full text-sm'>
            {myChallenges.length > 0 ? (
                myChallenges.map((post) => (
                    <li
                        key={post.id}
                        className='flex flex-1 gap-2 py-1.5 border-b border-neutral-300'
                    >
                        <div className='w-[72px] p-0 text-neutral-500 flex justify-center items-center'>
                            {post.id}
                        </div>
                        <div className='flex flex-1 gap-1 items-center p-0'>
                            <div className='budge-meal text-xs'>
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
