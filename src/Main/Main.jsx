import React from 'react';
import MainLayout from '../Main/components/MainLayout';
import PopularChallenges from '../Main/components/PopularChallenges';
import CategoryList from '../Main/components/CategoryList';
import ChallengeIcon from './images/challenge-2.svg';
import OngoingChallenges from '../Main/components/OngoingChallenges';
import ButtonIcon from './images/button.svg';
import SpoonIcon from './images/spoon.svg';
import DustIcon from './images/dust.svg';
import LampIcon from './images/Lamp.svg';
import HeartIcon from './images/heart.svg';

const Main = () => {
    const userName = '데이메이커 님';
    const challengeDays = 123;
    const ongoingChallenges = [
        '물 2L 마시기',
        '하루 10,000보 걷기',
        '블로그 글 쓰기',
        '책 10페이지 읽기',
    ];
    const popularChallenges = [
        '하루 10000보 걷기',
        '물 1L 마시기',
        '일상 블로그 올리기',
    ];
    const categories = [
        { name: '식단', color: 'bg-mint-200', icon: SpoonIcon },
        { name: '학습', color: 'bg-yellow-200', icon: LampIcon },
        { name: '운동', color: 'bg-purple-200', icon: DustIcon },
        { name: '습관', color: 'bg-pink-200', icon: HeartIcon },
    ];

    return (
        <MainLayout>
            <div className='flex gap-6 mt-10'>
                {/* 왼쪽 사용자 정보 & 도전 중인 챌린지 */}
                <div
                    className='w-2/3 relative flex flex-col'
                    style={{ height: '550px' }}
                >
                    {/* 배경 이미지 (절대 위치 설정) */}
                    <div className='absolute top-0 left-0 w-full h-full -z-10'>
                        <img
                            src='배경이미지경로'
                            alt='배경'
                            className='w-full h-full object-cover'
                        />
                    </div>

                    {/* 도전 중인 챌린지 */}
                    <div className='w-full mb-4 mt-12'>
                        <OngoingChallenges challenges={ongoingChallenges} />
                    </div>

                    {/* 사용자 정보 */}
                    <div className='mt-auto'>
                        <h1 className='text-lg font-medium'>
                            <span className='text-3xl font-bold'>
                                {userName}
                            </span>{' '}
                            안녕하세요!
                        </h1>
                        <p className='text-gray-500 text-lg '>
                            Upday와{' '}
                            <span className='text-2xl font-semibold text-blue-400'>
                                {challengeDays}
                            </span>
                            일째 도전 중 입니다.
                        </p>
                    </div>
                </div>

                {/* 오른쪽: 인기 챌린지 & 카테고리 */}
                <div className='w-2/3 mt-10'>
                    <PopularChallenges challenges={popularChallenges} />
                    <div className='mt-20 relative'>
                        <img
                            src={ChallengeIcon}
                            alt='챌린지 아이콘'
                            className='absolute z-0 top-[-5px] left-[-10px] w-40 mt-5'
                        />
                        <h2 className='ml-1 text-white text-xl font-medium mb-2 flex items-center gap-2 relative z-100 bottom-[-20px] left-[2px]'>
                            챌린지 카테고리
                        </h2>

                        <div className='grid grid-cols-2 gap-4 mt-10'>
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-xl ${category.color} flex flex-col justify-between relative`}
                                    style={{ height: '180px' }}
                                >
                                    <span className='text-2xl font-semibold'>
                                        {category.name}
                                    </span>
                                    <img
                                        src={ButtonIcon}
                                        alt='Button'
                                        className='absolute bottom-4 left-4 w-8 h-8'
                                    />
                                    <img
                                        src={category.icon}
                                        alt={`${category.name} icon`}
                                        className='absolute bottom-4 right-7'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Main;
