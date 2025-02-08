import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setMyChallenge,
    toggleClgDoing,
} from '../../store/features/userChallengeSlice';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function MyChallengeList() {
    const dispatch = useDispatch();

    const myChallenges = useSelector((state) => {
        return state.myChallengeList?.myChallenge || []; // Redux state 확인용 로그 추가, 에러 방지를 위해 []을 기본값으로 지정
    });

    useEffect(() => {
        dispatch(setMyChallenge());
    }, [dispatch]);

    const reversedChallenges = [...myChallenges].reverse(); // 리스트를 역순으로 정렬

    // 챌린지 카테고리별 뱃지 설정
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

    // 챌린지 수행여부 아이콘 및 텍스트 데코레이션 설정
    const changeClgDoing = (doing) => {
        switch (doing) {
            case true:
                return 'doing-on';
            case false:
                return 'doing-off';
            default:
                return '';
        }
    };
    const changeClgDone = (done) => {
        switch (done) {
            case true:
                return 'done-on';
            case false:
                return 'done-off';
            default:
                return '';
        }
    };
    const showState = (doing, done) => {
        if (doing === false && done === false) {
            return 'line-through text-neutral-500';
        } else if (doing === false && done === true) {
            return 'line-through';
        } else {
            return '';
        }
    };

    // 챌린지 수행여부 아이콘 토글
    const handleClgDoing = (e) => {
        if (e === true) {
            return false;
        } else if (e === false) {
            return false;
        } else {
            return null;
        }
    };

    const handleToggleClgDoing = () => {
        dispatch(toggleClgDoing()); // 해당 챌린지의 clgDoing 값을 반전
    };

    return (
        <ul className='w-full h-[85%] text-sm overflow-scroll'>
            {reversedChallenges.length > 0 ? (
                reversedChallenges.map((post) => (
                    <li
                        key={post.id}
                        className='flex flex-1 gap-x-1.5 h-15 py-4 border-b border-neutral-300'
                    >
                        <div className='w-[10%] p-0 text-xs text-neutral-500 flex justify-center items-center'>
                            {post.id}
                        </div>
                        <div
                            className={`w-10 h-6 ${changeBudge(post.category)}`}
                        >
                            {post.category}
                        </div>
                        <div className='flex flex-1 gap-1 h-6 items-center p-0 overflow-hidden'>
                            <span
                                className={`${showState(post.clgDoing, post.clgDone)} block w-full overflow-hidden text-ellipsis whitespace-nowrap`}
                            >
                                {post.title}
                            </span>
                        </div>

                        <div className='w-[48px] p-0 flex justify-between items-center'>
                            <button
                                className={
                                    post.clgDoing ? 'doing-on' : 'doing-off'
                                }
                                onClick={handleToggleClgDoing}
                            >
                                <HiFire />
                            </button>
                            <button className={changeClgDone(post.clgDone)}>
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
