import React from 'react';

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

const MainChallenge = ({ challenges }) => {
    return (
        <div className='relative bg-neutral-800 rounded-xl w-full md:w-[600px] bottom-[-490px]'>
            {/* 배경색을 변경하고, 위치 내림 */}
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-medium text-white relative left-4 top-2 '>
                    도전 중인 챌린지
                </h2>
                {/* 좌우 화살표 버튼 추가 */}
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
                {challenges.map((challenge, index) => (
                    <li
                        key={index}
                        className={`py-6 bg-white border flex justify-between items-center ${index === 3 ? 'rounded-b-xl' : ''} mb-0`}
                    >
                        {/* 4번째 항목에만 아래쪽 라운드, 항목 간 간격 제거 */}
                        <span className='text-lg font-semibold text-gray-700'>
                            {challenge.name}
                        </span>
                        <span className='text-sm text-gray-500'>
                            {challenge.timeRemaining}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainChallenge;
