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

		setFilteredChallenges(filtered);
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