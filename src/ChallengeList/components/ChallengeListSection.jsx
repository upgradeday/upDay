import React from 'react';
import ChallengeCard from './ChallengeCard';
import { challengeList } from '../../data/challengeData';

const ChallengeListSection = () => {
    return (
        <section className='flex gap-4 flex-wrap'>

			{/* challengeData.js 파일에 있는 데이터를 가져와 ChallengeCard 컴포넌트를 map 메소드를 사용해 화면에 뿌리기 */}
            {challengeList.map((card) => (
                <ChallengeCard key={card.id} cardData={card} />
            ))}
        </section>
    );
};

export default ChallengeListSection;
