import React from 'react';
import ChallengeCard from './ChallengeCard';
import { useSelector } from 'react-redux';

const ChallengeListSection = () => {

	const challenges = useSelector(state => state.challenge.list);

    return (
        <section className='flex gap-4 flex-wrap'>

			{/* challene slice의 기본 상태 데이터를 가져와 ChallengeCard 컴포넌트를 map 메소드를 사용해 화면에 뿌리기 */}
            {challenges.map((card) => (
                <ChallengeCard key={card.id} cardData={card} />
            ))}
        </section>
    );
};

export default ChallengeListSection;
