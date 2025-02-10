import React, { useState, useEffect } from 'react';
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
import MainFlower from './images/main_logo.svg';
import UserInfo from './components/UserInfo';

const Main = () => {
    const [userName, setUserName] = useState('데이메이커 님');
    const [challengeDays, setChallengeDays] = useState(0);

    // 로컬스토리지에서 사용자 정보를 읽어와 상태 설정
    useEffect(() => {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        const usersData = localStorage.getItem('users');

        if (usersData && loggedInUserEmail) {
            try {
                const users = JSON.parse(usersData);
                const foundUser = users.find(
                    (user) => user.email === loggedInUserEmail
                );

                if (foundUser) {
                    setUserName(foundUser.nickname || '데이메이커 님');
                    if (foundUser.signupDate) {
                        const signUpDate = new Date(foundUser.signupDate);
                        const today = new Date();
                        const diffDays = Math.floor(
                            (today - signUpDate) / (1000 * 60 * 60 * 24)
                        );
                        setChallengeDays(diffDays);
                    }
                } else {
                    console.error('로그인된 사용자를 찾을 수 없습니다.');
                }
            } catch (error) {
                console.error('로컬 스토리지 데이터 파싱 오류:', error);
            }
        }
    }, []);

    const ongoingChallenges = [
        { name: '물 2L 마시기', timeRemaining: '4일 남음' },
        { name: '하루 10,000보 걷기', timeRemaining: '18일 남음' },
        { name: '블로그 글 쓰기', timeRemaining: '64일 남음' },
        { name: '책 10페이지 읽기', timeRemaining: '254일 남음' },
    ];

    // 인기 챌린지 목록
    const popularChallenges = [
        '1. 하루 10,000보 걷기',
        '2. 물 3L 마시기',
        '3. 네이버 블로그에 일상 글 올리기',
        '4. 아침 일찍 일어나서 미라클 모닝하기',
        '5. 헬스 시작하기 (체지방 -5kg 빼기)',
        '6. 영어 회화 공부하기',
        '7. 자기 전에 감사 일기 쓰기',
        '8. 배달 음식 줄이고 집밥 먹기',
        '9. 저녁 10시에 핸드폰 놓고 잠자기',
    ];

    // 카테고리 정보
    const categories = [
        { name: '식단', color: 'bg-mint-200', icon: SpoonIcon },
        { name: '학습', color: 'bg-yellow-200', icon: LampIcon },
        { name: '운동', color: 'bg-purple-200', icon: DustIcon },
        { name: '습관', color: 'bg-pink-200', icon: HeartIcon },
    ];

    return (
        <MainLayout>
            <div className='flex gap-[90px]'>
                {/* 왼쪽 콘텐츠 */}
                <div className='w-full md:w-[600px] flex flex-col items-center relative'>
                    <div className='absolute top-[-22px] z-10 w-full text-center'>
                        <img
                            src={MainFlower}
                            alt='메인 플라워 아이콘'
                            className='absolute top-[210px] right-[-5px] w-[600px] h-auto'
                        />
                        <UserInfo
                            userName={userName}
                            challengeDays={challengeDays}
                        />
                    </div>

                    <div className='w-full mt-11'>
                        <OngoingChallenges challenges={ongoingChallenges} />
                    </div>
                </div>

                {/* 오른쪽 콘텐츠 */}
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
                                    <img
                                        src={ButtonIcon}
                                        alt='Button'
                                        className='absolute bottom-4 left-4 w-8 h-8'
                                    />
                                    <img
                                        src={category.icon}
                                        alt={`${category.name} icon`}
                                        className='absolute bottom-4 right-8 object-contain'
                                        style={{
                                            width:
                                                category.name === '식단'
                                                    ? '17%'
                                                    : category.name === '학습'
                                                      ? '28%'
                                                      : category.name === '운동'
                                                        ? '40%'
                                                        : '30%',
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
