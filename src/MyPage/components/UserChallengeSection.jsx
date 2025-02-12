import React, { useState, useEffect, useMemo } from 'react';
import UserChallengeSearch from './UserChallengeSearch';
import UserChallengeList from './UserChallengeList';

export default function UserChallengeSection({
    challenges,
    filteredChallenges,
    setFilteredChallenges,
}) {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); // 실제 검색어

    // localStorage 값 가져올 때 JSON 파싱 예외 처리
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('loggedInUser');
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

            setLoggedInUser(storedUser);
            setUsers(storedUsers);
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
            setLoggedInUser(null);
            setUsers([]);
        }
    }, []);

    // 테스트 계정 여부를 상태로 관리하지 않고 즉시 계산
    const isTestAccount = useMemo(() => {
        return users.length > 0 && users[0].email !== loggedInUser;
    }, [users, loggedInUser]);

    // 필터링된 챌린지 리스트를 `useMemo`로 최적화
    const filteredList = useMemo(() => {
        let filtered = [...challenges];

        if (categoryFilter !== '전체') {
            filtered = filtered.filter(
                (challenge) => challenge.category === categoryFilter
            );
        }

        if (searchQuery.trim() !== '') {
            const lowerSearchTerm = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (challenge) =>
                    challenge.title.toLowerCase().includes(lowerSearchTerm) ||
                    challenge.content.toLowerCase().includes(lowerSearchTerm) ||
                    challenge.nickname.toLowerCase().includes(lowerSearchTerm)
            );
        }

        return filtered;
    }, [challenges, categoryFilter, searchQuery]);

    // 필터링된 리스트 상태 업데이트
    useEffect(() => {
        setFilteredChallenges(filteredList);
    }, [filteredList, setFilteredChallenges]);

    // 검색 버튼 클릭 시 실행되는 함수
    const handleSearch = () => {
        setSearchQuery(searchTerm);
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
