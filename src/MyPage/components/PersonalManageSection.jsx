import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';

export default function PersonalManage() {
    return (
        <section className='w-[48%]'>
            <div className='flex gap-2'>
                <button className='tap-onclick'>
                    <h2>개인정보 관리</h2>
                </button>
                <button className='tap-default'>
                    <h2>챌린지 관리</h2>
                </button>
            </div>
            <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
                <form className='h-full flex flex-col justify-between'>
                    <div className='space-y-12'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                            <div className='col-span-full'>
                                <label
                                    htmlFor='photo'
                                    className='block text-sm'
                                >
                                    프로필 사진
                                </label>
                                <div className='mt-2 flex items-center gap-x-3'>
                                    <BsPersonCircle
                                        aria-hidden='true'
                                        className='size-[24%] max-size-10 text-gray-300'
                                    />
                                    <button
                                        type='button'
                                        className='btn btn-primary text-sm shadow-xs '
                                    >
                                        사진 올리기
                                    </button>
                                    <button
                                        type='button'
                                        className='btn btn-secondary text-sm shadow-xs '
                                    >
                                        삭제하기
                                    </button>
                                </div>
                            </div>

                            <div className='col-span-full'>
                                <label
                                    htmlFor='about'
                                    className='block text-sm/6'
                                >
                                    소개글
                                </label>
                                <div className='mt-2'>
                                    <textarea
                                        id='about'
                                        name='about'
                                        rows={3}
                                        className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 placeholder:text-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-6'>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='nickname'
                                    className='block text-sm/6 font-medium text-gray-900'
                                >
                                    닉네임
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='nickname'
                                        name='nickname'
                                        type='text'
                                        autoComplete='user-nickname'
                                        className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                    />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='name'
                                    className='block text-sm/6 font-medium text-gray-900'
                                >
                                    이름
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='name'
                                        name='name'
                                        type='text'
                                        autoComplete='user-name'
                                        className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                    />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='pw'
                                    className='block text-sm/6 font-medium text-gray-900'
                                >
                                    비밀번호
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='pw'
                                        name='pw'
                                        type='text'
                                        autoComplete='password'
                                        className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                    />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='pw-check'
                                    className='block text-sm/6 font-medium text-gray-900'
                                >
                                    비밀번호 확인
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='pw-check'
                                        name='pw-check'
                                        type='text'
                                        autoComplete='password-check'
                                        className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-end gap-x-4'>
                        <button
                            type='button'
                            className='btn btn-secondary text-sm shadow-xs '
                        >
                            취소하기
                        </button>
                        <button
                            type='submit'
                            className='btn btn-primary px-6 text-sm shadow-xs '
                        >
                            저장하기
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
