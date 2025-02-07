import React, { useState, useEffect } from 'react';

const MyProfile = () => {
    // userData 첫번쩨 요소(테스트 계정)의 데이터 가져오기
    const [userData, setUserData] = useState({
        email: '',
        nickname: '',
        profileImage: null,
        signupDate: '',
        about: '',
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserData({
                email: parsedUser.email || '이메일 없음',
                nickname: parsedUser.nickname || '닉네임 없음',
                profileImage: parsedUser.profileImage || null,
                signupDate: parsedUser.signupDate || '가입일 정보 없음',
                about: parsedUser.about || '소개글이 없습니다.',
            });
        }
    }, []);

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold'>내 프로필</h1>
            <div className='card flex flex-col gap-3 p-[36px]'>
                <div className='flex flex-row items-center'>
                    <div className='inline-block w-[35%] max-w-[200px] aspect-square mr-[10%]'>
                        {userData.profileImage ? (
                            <img
                                alt='프로필 이미지'
                                src={userData.profileImage}
                                className='w-full h-full object-cover rounded-full ring-2 ring-neutral-300 overflow-hidden'
                            />
                        ) : (
                            <div className='w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500'>
                                이미지 없음
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col h-[200px] justify-evenly'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-semibold'>
                                {userData.nickname}
                            </p>
                            <p className='text-sm font-normal text-neutral-500'>
                                {userData.email}
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-semibold'>
                                <span className='text-blue-500'>00</span>일 째
                                업데이 중
                            </p>
                            <p className='text-sm font-normal text-neutral-500'>
                                {userData.signupDate}
                            </p>
                        </div>
                    </div>
                </div>
                <p className='text-sm h-[100px] overflow-hidden text-neutral-700'>
                    {userData.about}
                </p>
            </div>
        </div>
    );
};
export default MyProfile;
