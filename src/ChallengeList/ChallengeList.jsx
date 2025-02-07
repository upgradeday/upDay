import React from 'react';
import ChallengeListLayout from './components/ChallengeListLayout';
import { Outlet, useNavigate } from 'react-router-dom';

const ChallengeList = () => {

	const navigate = useNavigate();

	const handleCreateClick = () => {
		navigate('create');
	}
    return (
        <>
            <ChallengeListLayout />
			<Outlet />
			<button className='w-[6.125rem] h-[6.125rem] rounded-[50%] bg-blue-500' onClick={handleCreateClick}>
				+
			</button>
        </>
    );
};

export default ChallengeList;
