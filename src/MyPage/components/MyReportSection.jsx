import React from 'react';
import { HiFire, HiDocumentCheck, HiMiniTrophy } from 'react-icons/hi2';
import { FaStar } from 'react-icons/fa6';

export default function MyReport() {
    const storedList = JSON.parse(localStorage.getItem('loggedInUserClgList'));

    const clgDoingArr = storedList.filter((state) => state.clgDoing === true);
    const clgDoneArr = storedList.filter((state) => state.clgDone === true);
    const clgOverArr = storedList.filter(
        (state) => state.clgDoing !== true && state.clgDone !== true
    );

    const numClgDoing = clgDoingArr.length;
    const numClgDone = clgDoneArr.length;
    const numClgOver = clgOverArr.length;

    const achievementRate = Math.round(
        (numClgDone / (numClgDone + numClgOver)) * 100
    );

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
