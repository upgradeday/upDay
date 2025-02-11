import React, { useState } from 'react';
import ChallengeListSection from './ChallengeListSection';
import ChallengeListSearchSection from './ChallengeListSearchSection';

const ChallengeListLayout = () => {

    const [selectedCategory, setSelectedCategory] = useState('전체');
	
    return (
    <main className="w-[80%] max-w-[1344px] mx-auto bg-green-300">
		{/* 상태 변경 함수가 필요하기에 setSelectedCategory 를 props로 전달 */}
        <ChallengeListSearchSection setSelectedCategory={setSelectedCategory} />
		{/* 현재 값만 필요하기에 selectedCategory 을 props로 전달 */}
        <ChallengeListSection selectedCategory={selectedCategory} />
    </main>
    );
};
export default ChallengeListLayout;