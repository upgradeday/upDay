import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { BsSearch, BsDot } from 'react-icons/bs';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function ChallengeManage() {
    return (
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
                <div className='flex gap-2 justify-end mt-2 pb-1 border-b border-neutral-300 '>
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

                <table className='w-full text-sm'>
                    <tr className='flex flex-1 gap-2 py-1 border-b border-neutral-300'>
                        <td className='w-[72px] p-0 text-neutral-500 flex justify-center items-center'>
                            00
                        </td>
                        <td className='flex flex-1 flex gap-1 items-center p-0'>
                            <div className='budge-meal text-xs'>식단</div>제목
                        </td>
                        <td className='w-[48px] p-0 flex justify-between items-center'>
                            <button className='doing-on'>
                                <HiFire />
                            </button>
                            <button className='done-off'>
                                <HiDocumentCheck />
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
    );
}
