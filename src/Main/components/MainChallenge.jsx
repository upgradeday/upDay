import React from 'react';

const MainChallenge = ({ challenges }) => {
    return (
        <div className='p-4 bg-white rounded-xl w-full md:w-[500px] mt-6 md:mt-10'> {/* 반응형 크기 설정 */}
            <h2 className='text-xl font-bold mb-2'>도전중인 챌린지</h2>

            <ul>
                {challenges.map((challenge, index) => (
                    <li key={index} className='py-2 border-b last:border-b-0'>
                        {challenge}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainChallenge;
