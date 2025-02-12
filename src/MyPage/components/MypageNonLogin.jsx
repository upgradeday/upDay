import React from 'react';
import { HiFire, HiDocumentCheck, HiMiniTrophy } from 'react-icons/hi2';
import { FaStar, FaChevronDown } from 'react-icons/fa6';
import { BsSearch, BsDot } from 'react-icons/bs';

export default function MyPageNonLogin() {
    return (
        <>
            <section className='flex flex-col w-[48%] gap-6'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>내 프로필</h1>
                    <div className='card flex flex-col gap-3 p-[36px]'>
                        <div className='flex flex-row items-center'>
                            <div className='inline-block w-[35%] max-h-[200px] aspect-square mr-[10%]'>
                                <div className='w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500' />
                            </div>
                            <div className='flex flex-col h-[200px] justify-evenly'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-2xl font-semibold'>
                                        닉네임 없음
                                    </p>
                                    <p className='text-sm font-normal text-neutral-500'>
                                        이메일 없음
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-sm font-semibold'>
                                        <span className='text-blue-500'></span>
                                        ~일 째 업데이 중
                                    </p>
                                    <p className='text-sm font-normal text-neutral-500'>
                                        가입일 정보 없음
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className='text-sm h-[100px]'>
                            아직 소개글을 작성하지 않았습니다. 프로필을
                            업데이트해보세요!
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-2  '>
                    <h1 className='text-2xl font-semibold'>업데이 리포트</h1>
                    <div className='card flex flex-col gap-2 h-[308px] justify-center '>
                        <div className='flex flex-row justify-evenly'>
                            <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                                <p className='text-base font-semibold'>
                                    진행 중
                                </p>
                                <HiFire className='text-6xl text-orange-400' />
                                <p className='text-base font-bold'>7</p>
                            </div>
                            <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                                <p className='text-base font-semibold'>완료</p>
                                <HiDocumentCheck className='text-6xl text-green-400' />
                                <p className='text-base font-bold'>25</p>
                            </div>
                            <div className='flex flex-col justilfy-center items-center gap-6 w-[30%]'>
                                <p className='text-base font-semibold'>
                                    목표 달성율
                                </p>
                                <div className='relative flex justify-center'>
                                    <HiMiniTrophy className='text-6xl text-yellow-400' />
                                    <FaStar className='absolute text-neutral-100 text-lg top-2' />
                                </div>

                                <p className='text-base font-bold'>92%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-[48%]'>
                <div className='flex gap-2'>
                    <button className='tap-default'>
                        <h2>개인정보 관리</h2>
                    </button>
                    <button className='tap-onclick'>
                        <h2>챌린지 관리</h2>
                    </button>
                </div>
                <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
                    <div className='flex flex-row gap-x-3'>
                        <div className='w-[72px] grid shrink-0 grid-cols-1 focus-within:relative'>
                            <select
                                id='currency'
                                name='currency'
                                aria-label='Currency'
                                className='btn btn-black w-full col-start-1 row-start-1 appearance-none pl-3 text-base text-neutral-100 placeholder:text-gray-400 md:text-sm/6'
                            >
                                <option>전체</option>
                                <option>식단</option>
                                <option>학습</option>
                                <option>운동</option>
                                <option>습관</option>
                            </select>
                            <FaChevronDown
                                aria-hidden='true'
                                className='pointer-events-none col-start-1 row-start-1 mr-3 size-2 self-center justify-self-end text-neutral-100 md:size-3'
                            />
                        </div>
                        <div className='relative flex  flex-1 items-center'>
                            <input
                                id='search'
                                name='search'
                                type='text'
                                autoComplete='password-check'
                                className='btn w-full rounded-xl bg-neutral-100 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                            />
                            <button className='absolute right-0.5 w-8 h-8 '>
                                <BsSearch className=' size-5 text-blue-900' />
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-end mt-3 pb-3 border-b border-neutral-300 '>
                        <div className='flex items-center'>
                            <BsDot className='text-blue-500 text-sm' />
                            <p className='text-xs'>내가 만든</p>
                        </div>
                        <div className='flex gap-0.5 items-center'>
                            <HiFire className='text-orange-400 text-sm' />
                            <p className='text-xs'>진행 중</p>
                        </div>
                        <div className='flex gap-0.5 items-center'>
                            <HiDocumentCheck className='text-green-400 text-sm' />
                            <p className='text-xs'>완료</p>
                        </div>
                    </div>

                    <p className='text-center text-gray-500'>
                        로그인한 유저 정보를 찾을 수 없습니다.
                    </p>
                </div>
            </section>
        </>
    );
}
