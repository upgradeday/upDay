import React from 'react';

const PopularChallenges = ({ challenges }) => {
    return (
        <>
            <h2 className='text-xl font-bold mb-3'>인기 있는 챌린지</h2>
            <div className='flex flex-col gap-4'>
                {challenges.map((challenge, index) => (
                    <div key={index} className='bg-white p-4 rounded-xl'>
                        <p className='text-lg font-semibold'>{index + 1}. {challenge}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularChallenges;
