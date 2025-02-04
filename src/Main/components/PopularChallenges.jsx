import React from 'react';

const PopularChallenges = ({ challenges }) => {
    return (
        <div className='bg-white p-4 shadow-md rounded-xl'>
            <h2 className='text-xl font-bold'>인기 있는 챌린지</h2>
            <ol className='mt-2'>
                {challenges.map((challenge, index) => (
                    <li key={index} className='py-1'>
                        {index + 1}. {challenge}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default PopularChallenges;
