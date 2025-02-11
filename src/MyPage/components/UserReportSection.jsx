import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiFire, HiDocumentCheck, HiMiniTrophy } from 'react-icons/hi2';
import { FaStar } from 'react-icons/fa6';

export default function UserReport() {
    const dispatch = useDispatch();
    const challenges = useSelector((state) => state.myChallengeList.list);
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users'));
    const [isTestAccount, setIsTestAccount] = useState(true);

    // 테스트 계정 체크
    useEffect(() => {
        if (users && users.length > 0 && users[0].email !== loggedInUser) {
            setIsTestAccount(false);
        }
    }, [loggedInUser, users]);

    // 챌린지 데이터가 변경될 때마다 새롭게 로컬스토리지에서 가져오기
    useEffect(() => {
        const storedChallenges =
            JSON.parse(localStorage.getItem('clglist')) || [];
        if (storedChallenges.length > 0) {
            dispatch({ type: 'UPDATE_CHALLENGES', payload: storedChallenges });
        }
    }, [challenges, dispatch]); // `challenges`가 변경될 때마다 실행

    // 내가 참여한 챌린지 목록
    const myChallenges = challenges.filter(({ clgJoin }) => clgJoin);

    const numClgDoing = myChallenges.filter((clg) => clg.clgDoing).length;
    const numClgDone = myChallenges.filter((clg) => clg.clgDone).length;
    const numClgOver = myChallenges.filter(
        (clg) => !clg.clgDoing && !clg.clgDone
    ).length;

    const achievementRate =
        numClgDone + numClgOver > 0
            ? Math.round((numClgDone / (numClgDone + numClgOver)) * 100)
            : 0;

    // 테스트 계정이 아닐 경우
    if (!isTestAccount) {
        return (
            <div className='relative flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>업데이 리포트</h1>
                <div className='card flex flex-row gap-1 h-[308px] justify-evenly items-center '>
                    <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                        <p className='text-base font-semibold'>진행 중</p>
                        <HiFire className='text-6xl text-orange-400' />
                        <p className='text-base font-bold opacity-0'>-</p>
                    </div>
                    <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                        <p className='text-base font-semibold'>완료</p>
                        <HiDocumentCheck className='text-6xl text-green-400' />
                        <p className='text-base font-bold opacity-0'>-</p>
                    </div>
                    <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                        <p className='text-base font-semibold'>목표 달성율</p>
                        <div className='relative flex justify-center'>
                            <HiMiniTrophy className='text-6xl text-yellow-400' />
                            <FaStar className='absolute text-neutral-100 text-lg top-2' />
                        </div>

                        <p className='text-base font-bold opacity-0'>-</p>
                    </div>
                </div>
                <p className='absolute top-[75%] w-full px-[36px] text-xs md:text-sm text-center text-gray-500'>
                    테스트 계정이 아닌 경우, 해당 기능은 제한됩니다.
                </p>
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold'>업데이 리포트</h1>
            <div className='card flex flex-row gap-2 h-[308px] justify-evenly items-center '>
                <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                    <p className='text-base font-semibold'>진행 중</p>
                    <HiFire className='text-6xl text-orange-400' />
                    <p className='text-base font-bold'>{numClgDoing}</p>
                </div>
                <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                    <p className='text-base font-semibold'>완료</p>
                    <HiDocumentCheck className='text-6xl text-green-400' />
                    <p className='text-base font-bold'>{numClgDone}</p>
                </div>
                <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                    <p className='text-base font-semibold'>목표 달성율</p>
                    <div className='relative flex justify-center'>
                        <HiMiniTrophy className='text-6xl text-yellow-400' />
                        <FaStar className='absolute text-neutral-100 text-lg top-2' />
                    </div>

                    <p className='text-base font-bold'>{achievementRate}%</p>
                </div>
            </div>
        </div>
    );
}
