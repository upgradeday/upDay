import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMyChallenge } from '../../store/features/userChallengeSlice';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import useModal from '../../common/hooks/useModal';

import UserProfile from './UserProfileSection';
import UserReport from './UserReportSection';
import TabSwitcher from './TabSwitcher';
import MypageNonLogin from './MypageNonLogin';
import ModalForLogin from '../../common/ModalForLogin';

const MyPageLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isModalOpen, openModal, closeModal } = useModal();
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            openModal(); // 로그인되지 않으면 모달을 열기
        } else {
            setLoggedInUser(loggedInUser);
            dispatch(setMyChallenge()); // 로그인한 사용자 정보 전달
        }
    }, [dispatch, openModal]);

    return (
        <main className='w-[80%] max-w-[1344px] mx-auto flex flex-row justify-between'>
            <Helmet>
                <title>마이페이지 | UpDay, 나의 일상을 업그레이드</title>
            </Helmet>
            {!loggedInUser ? (
                <MypageNonLogin />
            ) : (
                <>
                    <section className='flex flex-col w-[48%] gap-6'>
                        <UserProfile />
                        <UserReport />
                    </section>
                    <TabSwitcher />
                </>
            )}
            <ModalForLogin
                isOpen={isModalOpen} // 모달 열기 여부
                onClose={closeModal} // 모달 닫기
            />
        </main>
    );
};

export default MyPageLayout;
