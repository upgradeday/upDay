import React from 'react';
import { HiFire, HiDocumentCheck, HiMiniTrophy } from 'react-icons/hi2';
import { FaStar } from 'react-icons/fa6';

export default function UserReport() {
    const storedClgList = JSON.parse(localStorage.getItem('clglist'));
    const loggedInUser = localStorage.getItem('loggedInUser');

    // 테스트 계정이 로그인했을 떄 storedList(챌린지 목록) 사용
    const getClgList = storedClgList.some(
        (challenge) => challenge.authorId === loggedInUser
    )
        ? storedClgList
        : [];

    // 내가 참여한 챌린지 목록
    const myChallenges = getClgList.filter(({ clgJoin }) => clgJoin);

    const numClgDoing = myChallenges.filter((clg) => clg.clgDoing).length;
    const numClgDone = myChallenges.filter((clg) => clg.clgDone).length;
    const numClgOver = myChallenges.filter(
        (clg) => !clg.clgDoing && !clg.clgDone
    ).length;

    const achievementRate =
        numClgDone + numClgOver > 0
            ? Math.round((numClgDone / (numClgDone + numClgOver)) * 100)
            : 0;

    // 유저 정보가 없을 때 메시지 출력
    if (!loggedInUser) {
        return (
            <div className='card flex flex-col gap-2 h-[308px] justify-center'>
                <p className='text-center text-gray-500'>
                    로그인한 유저 정보를 찾을 수 없습니다.
                </p>
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-2  '>
            <h1 className='text-2xl font-semibold'>업데이 리포트</h1>
            <div className='card flex flex-col gap-2 h-[308px] justify-center '>
                <div className='flex flex-row justify-evenly'>
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

                        <p className='text-base font-bold'>
                            {achievementRate}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
