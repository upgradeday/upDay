import React from 'react';

export default function MyProfile() {
    return (
        <section>
            <div className='flex flex-col w-[45%] gap-2 bg-neutral-100 p-[48px] rounded-2xl'>
                <h1 className='text-3xl'>내 프로필</h1>
                <div className='flex flex-row gap-9 items-center'>
                    <img
                        alt=''
                        src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        className='inline-block rounded-full ring-2 ring-neutral-300'
                    />
                    <div className='flex flex-col gap-9 '>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <p className='text-2xl font-semibold text-neutral-100'>
                                    사용자 이름 받아오기
                                </p>
                            </div>
                            <p className='text-xl font-normal text-neutral-500'>
                                사용자 아이디/이메일 받아오기
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xl font-semibold'>
                                ~일 째 업데이 중
                            </p>
                            <p className='text-xl font-normal text-neutral-500'>
                                가입날짜
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p></p>
            </div>
        </section>
    );
}
