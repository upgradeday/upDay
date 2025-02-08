import React from 'react';
import MainLayout from '../Main/components/MainLayout';
import PopularChallenges from '../Main/components/PopularChallenges';
import CategoryList from '../Main/components/CategoryList';
import ChallengeIcon from './images/challenge-2.svg';
import OngoingChallenges from '../Main/components/OngoingChallenges';
import ButtonIcon from './images/button.svg';
import SpoonIcon from '../assets/images/common/spoon.svg';
import DustIcon from '../assets/images/common/dust.svg';
import LampIcon from '../assets/images/common/Lamp.svg';
import HeartIcon from '../assets/images/common/heart.svg';
import MainDay from './images/mainday.svg';
import MainFlower from './images/main_logo.svg';
import UserInfo from './components/UserInfo'; // UserInfo 컴포넌트 import

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
            <div className='flex gap-[90px] '>
                {/* 왼쪽: 사용자 정보, 메인 꽃 이미지, 도전 중인 챌린지 */}
                <div className='w-full md:w-[600px] flex flex-col items-center relative'>
                    <div className='absolute top-[30px] z-10 w-full text-center'>
                        {/* 메인 플라워 이미지 */}
                        <img
                            src={MainFlower}
                            alt='메인 플라워 아이콘'
                            className='absolute top-[210px] right-[-5px]  w-[600px] h-auto' // MainFlower 이미지의 위치 조정
                        />
                        {/* 사용자 이름 */}
                        <h1 className='text-lg font-medium mb-0 text-left w-full'>
                            <span className='text-3xl font-bold'>
                                {userName}
                            </span>{' '}
                            안녕하세요!
                        </h1>

                        <div className='flex items-center text-gray-500 text-lg'>
                            <img
                                src={MainDay}
                                alt='Main Day'
                                className='w-[150px] h-[90px] object-contain mr-2'
                            />
                            <span>
                                와{' '}
                                <span className='text-2xl font-semibold text-blue-400'>
                                    {challengeDays}
                                </span>
                                일째 도전 중 입니다.
                            </span>
                        </div>
                    </div>

                    {/* 진행 중인 챌린지 */}
                    <div className='w-full mt-12'>
                        <OngoingChallenges challenges={ongoingChallenges} />
                    </div>
                </div>

                {/* 오른쪽: 인기 챌린지 & 카테고리 */}
                <div className='w-full md:w-[650px] mt-10'>
                    <PopularChallenges challenges={popularChallenges} />
                    <div className='mt-10 relative'>
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

                                    {/* 버튼 아이콘 */}
                                    <img
                                        src={ButtonIcon}
                                        alt='Button'
                                        className='absolute bottom-4 left-4 w-8 h-8'
                                    />

                                    {/* 카테고리 아이콘 */}
                                    <img
                                        src={category.icon}
                                        alt={`${category.name} icon`}
                                        className='absolute bottom-4 right-8 object-contain'
                                        style={{
                                            width:
                                                category.name === '식단'
                                                    ? '17%' // SpoonIcon
                                                    : category.name === '학습'
                                                      ? '28%' // LampIcon
                                                      : category.name === '운동'
                                                        ? '40%' // DustIcon
                                                        : '30%', // HeartIcon (default case)
                                        }}
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
