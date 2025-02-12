import React from 'react';
import MainChallenge from './MainChallenge';

const OngoingChallenges = ({ challenges, isLoggedIn }) => {
    return (
        <div>
            <MainChallenge challenges={challenges} isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default OngoingChallenges;
