import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyJoinedChallenge } from '../../store/features/userChallengeSlice';
import UserChallengeSearch from './UserChallengeSearch';
import UserChallengeList from './UserChallengeList';

export default function UserChallengeSection() {
    const dispatch = useDispatch();
    const joinedChallenges = useSelector(
        (state) => state.myClgList.joinedChallenges
    );
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isTestAccount, setIsTestAccount] = useState(true);
    const [categoryFilter, setCategoryFilter] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredChallenges, setFilteredChallenges] = useState([]);

    useEffect(() => {
        dispatch(getMyJoinedChallenge());
    }, [dispatch]);

    // localStorage 값 가져올 때 예외 처리
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('loggedInUser') || '';
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

            setLoggedInUser(storedUser);
            setUsers(storedUsers);
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
            setLoggedInUser('');
            setUsers([]);
        }
    }, []);

    // 테스트 계정 여부 확인
    useEffect(() => {
        setIsTestAccount(users.length === 0 || loggedInUser === users[0].email);
    }, [users, loggedInUser]);

    // 필터링된 챌린지 리스트 업데이트
    useEffect(() => {
        let filtered = [...joinedChallenges];

        if (categoryFilter !== '전체') {
            filtered = filtered.filter(
                (challenge) => challenge.category === categoryFilter
            );
        }

        if (searchTerm.trim() !== '') {
            const lowerSearchTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (challenge) =>
                    challenge.title.toLowerCase().includes(lowerSearchTerm) ||
                    challenge.content.toLowerCase().includes(lowerSearchTerm) ||
                    challenge.nickname.toLowerCase().includes(lowerSearchTerm)
            );
        }

        setFilteredChallenges(filtered);
    }, [joinedChallenges, categoryFilter, searchTerm]);

    // 검색 버튼 클릭 시 실행되는 함수
    const handleSearch = () => {
        setSearchTerm(searchTerm);
    };

    if (!isTestAccount) {
        return (
            <div className='w-full h-[627px] md:h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[24px] md:p-[36px]'>
                <UserChallengeSearch
                // categoryFilter={categoryFilter}
                // setCategoryFilter={setCategoryFilter}
                // searchTerm={searchTerm}
                // setSearchTerm={setSearchTerm}
                // onSearch={handleSearch}
                />
                <p className='text-xs md:text-sm text-center text-gray-500 mt-4'>
                    테스트 계정이 아닌 경우, 해당 기능은 제한됩니다.
                </p>
            </div>
        );
    }

    return (
        <div className='w-full h-[627px] md:h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[24px] md:p-[36px]'>
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
