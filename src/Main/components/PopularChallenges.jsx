import React from 'react';
import ChallengeIcons from '../images/challenge-1.svg';
import MainFlower from '../images/main_logo.svg';

const PopularChallenges = ({ challenges }) => {
    return (
        <>
            <div className='relative'>
                {' '}
                {/* 부모 div에 relative 추가 */}
                <img
                    src={MainFlower}
                    alt='메인 플라워 아이콘'
                    className='absolute top-[140px] right-[720px] w-[600px] h-auto' // MainFlower 이미지의 위치 조정
                />
                <div className='relative z-10'>
                    <img
                        src={ChallengeIcons}
                        alt='챌린지 아이콘'
                        className='absolute w-40 top-[-10px] left-[-10px]' // ChallengeIcons 이미지의 위치 조정
                    />
                    <h2 className='relative text-white text-xl font-medium mb-4 z-20 top-[-5px] left-[2px]'>
                        인기 있는 챌린지
                    </h2>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {challenges.map((challenge, index) => (
                    <div key={index} className='bg-white p-4 rounded-xl'>
                        <p className='text-lg font-semibold'>
                            {index + 1}. {challenge}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularChallenges;
