import React from 'react';
import MainChallenge from './MainChallenge';

const OngoingChallenges = ({ challenges }) => {
    return (
        <div> {/* className 속성 제거 */}
            <MainChallenge challenges={challenges} />
        </div>
    );
};

export default OngoingChallenges;
