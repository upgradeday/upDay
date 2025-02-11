import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { BsSearch, BsDot } from 'react-icons/bs';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function UserChallengeSearch({
    categoryFilter,
    setCategoryFilter,
    searchTerm,
    setSearchTerm,
    onSearch,
}) {
    return (
        <>
            <div className='flex flex-row gap-x-3'>
                <div className='w-[60px] md:w-[72px] grid shrink-0 grid-cols-1 focus-within:relative'>
                    <select
                        id='category'
                        name='category'
                        aria-label='Category'
                        className='btn btn-black w-full col-start-1 row-start-1 appearance-none pl-3 text-neutral-100 placeholder:text-gray-400 text-xs/6 md:text-sm/6'
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option>전체</option>
                        <option>식단</option>
                        <option>학습</option>
                        <option>운동</option>
                        <option>습관</option>
                    </select>
                    <FaChevronDown
                        aria-hidden='true'
                        className='pointer-events-none col-start-1 row-start-1 mr-3 self-center justify-self-end text-neutral-100 size-2 md:size-3'
                    />
                </div>
                <div className='relative flex  flex-1 items-center'>
                    <input
                        id='search'
                        name='search'
                        type='text'
                        autoComplete='search-input'
                        className='input-field text-xs/6 md:text-sm/7'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className='absolute right-0.5 md:right-1 w-8 h-8 '>
                        <BsSearch
                            className='text-blue-900 size-4 md:size-5'
                            onClick={onSearch}
                        />
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
        </>
    );
}
