import React from 'react';

const MainChallenge = ({ challenges }) => {
    return (
        <div className='relative bg-neutral-800 rounded-xl w-full md:w-[600px] bottom-[-520px]'>
            {/* 배경색을 변경하고, 위치 내림 */}
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-medium text-white relative left-4 top-2 '>
                    도전 중인 챌린지
                </h2>
                {/* 도전 중인 챌린지 텍스트 오른쪽으로 살짝 이동 */}
                <span className='text-sm text-gray-600 bg-white rounded-full px-3 py- ml-2 relative top-2 right-6'>
                    10
                </span>
                {/* 10 텍스트 왼쪽으로 조금만 이동 */}
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
