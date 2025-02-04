import React from 'react';
import MainLayout from '../Main/components/MainLayout';
import MainChallenge from '../Main/components/MainChallenge';
import PopularChallenges from '../Main/components/PopularChallenges';
import CategoryList from '../Main/components/CategoryList';

const Main = () => {
    const userName = '데이메이커 님'; // 예제 데이터
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
        { name: '식단', color: 'bg-green-200' },
        { name: '학습', color: 'bg-yellow-200' },
        { name: '운동', color: 'bg-purple-200' },
        { name: '습관', color: 'bg-pink-200' },
    ];

    return (
        <MainLayout>
            <div className='flex gap-6 mt-10'>
                {/* 왼쪽: 사용자 정보 & 챌린지 */}
                <div className='w-2/3'>
                    <h1 className='text-2xl font-bold'>
                        {userName} 안녕하세요
                    </h1>
                    <p className='text-gray-500'>
                        Upday와 123일째 도전 중 입니다
                    </p>
                    <MainChallenge challenges={ongoingChallenges} />
                </div>

                {/* 오른쪽: 인기 챌린지 & 챌린지 카테고리 */}
                <div className='w-1/3'>
                    <PopularChallenges challenges={popularChallenges} />
                    <CategoryList categories={categories} />
                </div>
            </div>
        </MainLayout>
    );
};

export default Main;
