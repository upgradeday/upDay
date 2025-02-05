import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { BsPersonCircle } from 'react-icons/bs';

export default function Management() {
    return (
        <section className='w-[48%]'>
            <div className='flex gap-2'>
                <button className='w-[100px] h-[32px] mt-[8px] rounded-t-xl bg-blue-400 text-sm font-semibold text-neutral-100'>
                    <h2>개인정보 관리</h2>
                </button>
                <button className='w-[100px] h-[32px] mt-[8px] rounded-t-xl bg-blue-300 text-sm font-semibold text-neutral-100'>
                    <h2>챌린지 관리</h2>
                </button>
            </div>
            <div className='w-full h-[756px] rounded-r-2xl rounded-bl-2xl bg-neutral-100 p-[24px]'>
                <form>
                    <div className='space-y-12'>
                        <div className='border-b border-neutral-200 pb-8'>
                            <div className='grid grid-cols-1 gap-4 sm:grid-cols-6'>
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
                                            className='size-12 text-gray-300'
                                        />
                                        <button
                                            type='button'
                                            className='rounded-xl bg-blue-900 px-2 py-1 text-sm font-semibold text-neutral-100 shadow-xs hover:bg-blue-400 hover:text-blue-900'
                                        >
                                            사진 올리기
                                        </button>
                                        <button
                                            type='button'
                                            className='rounded-xl bg-neutral-300 px-2 py-1 text-sm font-semibold text-blue-900 shadow-xs hover:bg-red-400 hover:text-neutral-100'
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
                                            className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-b border-neutral-200 pb-8'>
                            <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6'>
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
                                            className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
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
                                            className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
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
                                            className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
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
                                            className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-b border-neutral-300 pb-8'>
                            <h2 className='text-base font-semibold'>알림</h2>
                            {/* <p className='mt-2 text-xs text-neutral-600'>
                                We'll always let you know about important
                                changes, but you pick what else you want to hear
                                about.
                            </p> */}

                            <div className='mt-4'>
                                <fieldset>
                                    <div className='mt-4 space-y-2'>
                                        <div className='flex items-center gap-x-3'>
                                            <input
                                                defaultChecked
                                                id='push-everything'
                                                name='push-notifications'
                                                type='radio'
                                                className='relative size-3.5 appearance-none rounded-full border border-neutral-300 bg-neutral-100 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden'
                                            />
                                            <label
                                                htmlFor='push-everything'
                                                className='block text-sm/6'
                                            >
                                                모든 알림
                                            </label>
                                        </div>
                                        <div className='flex items-center gap-x-3'>
                                            <input
                                                id='push-email'
                                                name='push-notifications'
                                                type='radio'
                                                className='relative size-3.5 appearance-none rounded-full border border-neutral-300 bg-neutral-100 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden'
                                            />
                                            <label
                                                htmlFor='push-email'
                                                className='block text-sm/6'
                                            >
                                                참여 챌린지 알림만
                                            </label>
                                        </div>
                                        <div className='flex items-center gap-x-3'>
                                            <input
                                                id='push-nothing'
                                                name='push-notifications'
                                                type='radio'
                                                className='relative size-3.5 appearance-none rounded-full border border-neutral-300 bg-neutral-100 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden'
                                            />
                                            <label
                                                htmlFor='push-nothing'
                                                className='block text-sm/6'
                                            >
                                                알림 설정 안
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 flex items-center justify-end gap-x-6'>
                        <button
                            type='button'
                            className='rounded-xl bg-neutral-300 px-4 py-1 text-sm font-semibold text-blue-900 hover:bg-red-400 hover:text-neutral-100'
                        >
                            취소하기
                        </button>
                        <button
                            type='submit'
                            className='rounded-xl bg-blue-900 px-4 py-1 text-sm font-semibold text-neutral-100 hover:bg-blue-400 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            저장하기
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
