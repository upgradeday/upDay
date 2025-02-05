import React from 'react';

export default function MyProfile() {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold'>내 프로필</h1>
            <div className='flex flex-col gap-2 bg-neutral-100 p-[36px] rounded-2xl'>
                <div className='flex flex-row items-center'>
                    <img
                        alt=''
                        src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        className='inline-block w-[30%] max-w-[200px] rounded-full ring-2 ring-neutral-300 mr-[10%]'
                    />
                    <div className='flex flex-col h-[200px] justify-evenly '>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <p className='text-2xl font-semibold text-red-100'>
                                    데이메이커
                                </p>
                            </div>
                            <p className='text-sm font-normal text-neutral-500'>
                                daymaker@kakao.com
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-semibold'>
                                <span className='text-blue-400'>00</span>일 째
                                업데이 중
                            </p>
                            <p className='text-sm font-normal text-neutral-500'>
                                가입 2025.01.23
                            </p>
                        </div>
                    </div>
                </div>
                <p className='text-sm h-[100px]'>소개글 받아오기 (최대5줄)</p>
            </div>
        </div>
    );
}
