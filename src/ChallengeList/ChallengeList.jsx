import React from 'react';
import ChallengeListLayout from './components/ChallengeListLayout';
import { Outlet, useNavigate } from 'react-router-dom';

const ChallengeList = () => {

	// 글 생성하는 모달로 가게 하기 위해 호출
	const navigate = useNavigate();

	// 클릭시 글 생성하는 모달로 이동하는 로직
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