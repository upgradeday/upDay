import React, { useState, useEffect } from 'react';
import UserChallengeSearch from './UserChallengeSearch';
import UserChallengeList from './UserChallengeList';

export default function MyChallengeSection({
    challenges,
    setChallenges,
    filteredChallenges,
    setFilteredChallenges,
}) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users'));

    const [isTestAccount, setIsTestAccount] = useState(true);
    const [categoryFilter, setCategoryFilter] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); // 실제 검색어

    // 테스트 계정 체크
    useEffect(() => {
        if (users && users.length > 0 && users[0].email !== loggedInUser) {
            setIsTestAccount(false);
        }
    }, [loggedInUser, users]);

    // // 전체 챌린지 목록 가져오기
    // useEffect(() => {
    //     const storedClgList = JSON.parse(localStorage.getItem('clglist')) || [];
    //     setChallenges(storedClgList);
    //     setFilteredChallenges(storedClgList); // 초기 상태로 전체 목록 표시
    // }, []);

    // 필터링 업데이트 (검색어 및 카테고리 변경 시)
    useEffect(() => {
        let filtered = [...challenges];

        // 카테고리
        if (categoryFilter !== '전체') {
            filtered = filtered.filter(
                (challenge) => challenge.category === categoryFilter
            );
        }

        // 검색어
        if (searchQuery.trim() !== '') {
            const lowerSearchTerm = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (challenge) =>
                    challenge.title.toLowerCase().includes(lowerSearchTerm) ||
                    challenge.content.toLowerCase().includes(lowerSearchTerm) ||
                    challenge.nickname.toLowerCase().includes(lowerSearchTerm)
            );
        }

        // 필터링된 챌린지 리스트 업데이트
        setFilteredChallenges(filtered);
    }, [challenges, categoryFilter, searchQuery]);

    // 검색 버튼 클릭 시 실행되는 함수
    const handleSearch = () => {
        setSearchQuery(searchTerm); // 현재 입력된 검색어를 실제 검색어로 설정
    };

    // 테스트 계정이 아닐 경우
    if (!isTestAccount) {
        return (
            <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
                <UserChallengeSearch
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onSearch={handleSearch}
                />
                <p className='text-xs md:text-sm text-center text-gray-500 mt-4'>
                    테스트 계정이 아닌 경우, 해당 기능은 제한됩니다.
                </p>
            </div>
        );
    }

    return (
        <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
            <UserChallengeSearch
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
            />
            <UserChallengeList challenges={filteredChallenges} />
        </div>
    );
}
