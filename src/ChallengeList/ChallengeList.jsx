import React from 'react';
import ChallengeListLayout from './components/ChallengeListLayout';
import { Outlet } from 'react-router-dom';

const ChallengeList = () => {
    return (
        <>
            <ChallengeListLayout />
			<Outlet />
        </>
    );
};

export default ChallengeList;
