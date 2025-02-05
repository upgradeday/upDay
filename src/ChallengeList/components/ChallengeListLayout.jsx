import React from 'react';
import ChallengeListSection from './ChallengeListSection';
import ChallengeListSearchSection from './ChallengeListSearchSection';

const ChallengeListLayout = () => {
	
	 
    return (
	<main className="w-[80%] max-w-[1344px] mx-auto bg-green-300">
		<ChallengeListSearchSection />
		<ChallengeListSection />
	</main>
    );
};

export default ChallengeListLayout;
