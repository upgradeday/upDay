import React, { useState, useEffect } from 'react';
import ChallengeCard from './ChallengeCard';
import { useSelector } from 'react-redux';

const ChallengeListSection = ({ selectedCategory }) => {
	// 
    const [filteredChallenges, setFilteredChallenges] = useState([]);

	// redux store의 기본 상태
	const challenges = useSelector(state => state.challenge.list);

    useEffect(() => {
        const storedChallenges = JSON.parse(localStorage.getItem('clglist')) || [];
		
		const filtered = selectedCategory === '전체' ? storedChallenges : storedChallenges.filter( ch => ch.category === selectedCategory);

		// 필터링 된 결과들을 최신 날짜로 정렬
		const sortedChallenges = filtered.sort((a, b) => {

			if(!a.postDate) return 1; // 날짜 없는 항목은 뒤로
			if(!b.postDate) return -1; // 날짜 없는 항목은 뒤로

			const dateA = new Date(a.postDate);
			const dateB = new Date(b.postDate);

			// 유효한 날짜인지 확인
			if(isNaN(dateA.getTime())) return 1;
			if(isNaN(dateB.getTime())) return -1;

			return dateB - dateA;
		})

		setFilteredChallenges(sortedChallenges);
    }, [selectedCategory, challenges]);

    return (
        <section className='flex gap-4 flex-wrap'>
            {filteredChallenges.length > 0 ? (
                filteredChallenges.map((card) => (
                    <ChallengeCard key={card.id} cardData={card} />
                ))
            ) : (
                <p>등록된 챌린지가 없습니다.</p>
            )}
        </section>
    );
};
export default ChallengeListSection;