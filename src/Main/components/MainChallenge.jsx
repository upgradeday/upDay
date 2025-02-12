import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArrowButton = ({ direction, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='bg-white rounded-full p-2 shadow-md flex items-center justify-center w-8 h-8'
        >
            {direction === 'left' ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='black'
                    className='w-5 h-5'
                >
                    <path
                        fillRule='evenodd'
                        d='M15.707 19.707a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L9.414 12l6.293 6.293a1 1 0 0 1 0 1.414z'
                        clipRule='evenodd'
                    />
                </svg>
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='black'
                    className='w-5 h-5'
                >
                    <path
                        fillRule='evenodd'
                        d='M8.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 1 1-1.414-1.414L14.586 12 8.293 5.707a1 1 0 0 1 0-1.414z'
                        clipRule='evenodd'
                    />
                </svg>
            )}
        </button>
    );
};

const MainChallenge = ({ challenges, isLoggedIn }) => {
    const navigate = useNavigate();

    // challenges 배열에서 앞의 4개 항목만 사용
    const limitedChallenges = challenges.slice(0, 4);

    if (!isLoggedIn) {
        return (
            <div className='relative bg-neutral-800 rounded-xl w-full md:w-[600px] bottom-[-440px]'>
                {/* 로그아웃 상태일 때 로그인 유도 화면 */}
                <div
                    className='flex flex-col items-center justify-center p-10 bg-white rounded-xl'
                    style={{ minHeight: '300px' }}
                >
                    <h2 className='text-xl font-medium text-gray-700 mb-4'>
                        로그인이 필요한 서비스입니다!
                    </h2>
                    <button
                        onClick={() => navigate('/login')}
                        className='bg-blue-500 text-white px-5 py-3 rounded-lg text-medium font-semibold'
                    >
                        로그인 하러 가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='relative bg-neutral-800 rounded-xl w-full md:w-[600px] bottom-[-440px]'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-medium text-white relative left-4 top-2'>
                    도전 중인 챌린지
                </h2>
                <div className='flex gap-2 relative top-2 right-4'>
                    <ArrowButton
                        direction='left'
                        onClick={() => console.log('왼쪽 버튼 클릭!')}
                    />
                    <ArrowButton
                        direction='right'
                        onClick={() => console.log('오른쪽 버튼 클릭!')}
                    />
                </div>
            </div>

            <ul>
                {limitedChallenges.map((challenge, index) => (
                    <li
                        key={index}
                        className={`py-4 bg-white border flex justify-between items-center ${index === limitedChallenges.length - 1 ? 'rounded-b-xl' : ''} mb-0`}
                        style={{ height: '60px' }}
                    >
                        <span className='text-lg font-semibold text-gray-700 truncate w-2/3 ml-4'>
                            {challenge.name}
                        </span>
                        <span className='text-sm text-gray-500 mr-4'>
                            {challenge.timeRemaining}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainChallenge;