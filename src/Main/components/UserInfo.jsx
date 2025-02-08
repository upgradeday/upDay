// components/UserInfo.jsx
import React from 'react';
import MainDay from '../images/mainday.svg';

const UserInfo = ({ userName, challengeDays }) => {
  return (
    <div className='absolute top-[180px] z-10'>
      <h1 className='text-lg font-medium mb-0'>
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
  );
};

export default UserInfo;
