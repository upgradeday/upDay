import React from 'react';
import { userData } from '../../data/userData';

const MyProfile = () => {
    // userData 첫번쩨 요소(테스트 계정)의 데이터 가져오기
    const { email, nickname, profileImage, signupDate } = userData[0];

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold'>내 프로필</h1>
            <div className='card flex flex-col gap-3 p-[36px]'>
                <div className='flex flex-row items-center'>
                    <div className='inline-block w-[35%] max-w-[200px] aspect-square mr-[10%]'>
                        <img
                            alt='이미지를 읽어올 수 없습니다.'
                            src={profileImage}
                            className='w-full h-full object-cover rounded-full ring-2 ring-neutral-300 overflow-hidden'
                        />
                    </div>

                    <div className='flex flex-col h-[200px] justify-evenly '>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <p className='text-2xl font-semibold'>
                                    {nickname}
                                </p>
                            </div>
                            <p className='text-sm font-normal text-neutral-500'>
                                {email}
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-semibold'>
                                <span className='text-blue-500'>00</span>일 째
                                업데이 중
                            </p>
                            <p className='text-sm font-normal text-neutral-500'>
                                {signupDate}
                            </p>
                        </div>
                    </div>
                </div>
                <p className='text-sm h-[100px]'>소개글 받아오기 (최대5줄)</p>
            </div>
        </div>
    );
};
export default MyProfile;
