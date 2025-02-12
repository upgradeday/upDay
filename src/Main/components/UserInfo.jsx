import React from 'react';
import MainDay from '../images/mainday.svg';

const UserInfo = ({ userName, challengeDays }) => {
    return (
        <div className='relative mt-20 z-10 w-full'>
            {userName ? (
                <>
                    <h1 className='text-lg font-medium mb-0 text-left'>
                        <span className='text-3xl font-bold'>{userName}님</span>{' '}
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
                            일째 도전 중입니다.
                        </span>
                    </div>
                </>
            ) : (
                <>
                   <h1 className='text-lg font-medium mb-0 text-left'>
                        <span className='text-3xl font-bold'>사용자 님</span>{' '}
                        안녕하세요!
                    </h1>
                    <div className='flex items-center text-gray-500 text-lg'>
                        <img
                            src={MainDay}
                            alt='Main Day'
                            className='w-[150px] h-[90px] object-contain mr-2'
                        />
                        <span>
                            와 같이 챌린지 시작해 볼까요?
                        </span>
                    </div>

                    

                    
                </>
            )}
        </div>
    );
};

export default UserInfo;
