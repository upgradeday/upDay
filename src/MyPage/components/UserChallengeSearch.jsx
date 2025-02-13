import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { BsSearch, BsDot } from 'react-icons/bs';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';

export default function UserChallengeSearch({
    categoryFilter,
    setCategoryFilter,
    searchTerm,
    setSearchTerm,
    isMyPost,
    setIsMyPost,
    isDoingClg,
    setIsDoingClg,
    isDoneClg,
    setIsDoneClg,
}) {
    const [inputValue, setInputValue] = useState(''); // 사용자가 입력하는 값

    // 입력값 변경 (입력하는 동안 필터링 X)
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // 검색 버튼 클릭 또는 Enter 입력 시 필터링 실행
    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            setSearchTerm(inputValue.trim()); // 필터링할 검색어 업데이트
        } else {
            setCategoryFilter('전체'); // 검색어가 없을 경우 전체 목록 다시 보여주기
            setSearchTerm('');
            setIsMyPost(false); // 필터 초기화
            setIsDoingClg(false); // 필터 초기화
            setIsDoneClg(false); // 필터 초기화
        }
    };

    // 엔터 키 입력 시 검색 실행
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    // 입력창 클릭 시 인풋값 초기화
    const clearSearch = () => {
        setInputValue('');
    };

    // 내가 만든, 진행 중, 완료 챌린지 필터링
    const handleIsMyPost = () => {
        setIsMyPost((prev) => !prev); // true-false 토글
        setIsDoingClg();
        setIsDoneClg();
    };
    const handleIsDoingClg = () => {
        setIsDoingClg((prev) => !prev);
        setIsMyPost();
        setIsDoneClg();
    };
    const handleIsDoneClg = () => {
        setIsDoneClg((prev) => !prev);
        setIsMyPost();
        setIsDoingClg();
    };

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
                <div className='relative flex flex-1 items-center'>
                    <input
                        id='search'
                        name='search'
                        type='text'
                        autoComplete='search-input'
                        className='input-field text-xs/6 md:text-sm/7'
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onClick={clearSearch}
                    />
                    <button
                        className='absolute right-0.5 md:right-1 w-8 h-8'
                        onClick={handleSearch}
                    >
                        <BsSearch className='text-blue-900 size-4 md:size-5' />
                    </button>
                </div>
            </div>
            <div className='flex gap-2 justify-end py-3 md:py-4 border-b border-neutral-300'>
                <div
                    className={`flex gap-0.5 px-1 pl-0.5 pr-1.5 rounded-lg items-center text-sm ${isMyPost ? 'bg-blue-500' : ''}`}
                    onClick={handleIsMyPost}
                >
                    <BsDot
                        className={`text-blue-500 text-sm ${isMyPost ? 'text-blue-100' : ''}`}
                    />
                    <button
                        className={`text-[10px] md:text-xs ${isMyPost ? 'text-neutral-100 font-bold' : ''}`}
                    >
                        내가 만든
                    </button>
                </div>
                <div
                    className={`flex gap-1 p-1 pr-1.5 rounded-lg items-center text-sm ${isDoingClg ? 'bg-orange-400' : ''}`}
                    onClick={handleIsDoingClg}
                >
                    <HiFire
                        className={`text-orange-400 text-sm ${isDoingClg ? 'text-orange-100' : ''}`}
                    />
                    <button
                        className={`text-[10px] md:text-xs ${isDoingClg ? 'text-neutral-100 font-bold' : ''}`}
                    >
                        진행 중
                    </button>
                </div>
                <div
                    className={`flex gap-1 p-1 pr-1.5 rounded-lg items-center text-sm ${isDoneClg ? 'bg-green-400' : ''}`}
                    onClick={handleIsDoneClg}
                >
                    <HiDocumentCheck
                        className={`text-green-400 text-sm ${isDoneClg ? 'text-green-100' : ''}`}
                    />
                    <button
                        className={`text-[10px] md:text-xs ${isDoneClg ? 'text-neutral-100 font-bold' : ''}`}
                    >
                        완료
                    </button>
                </div>
            </div>
        </>
    );
}
