import React, { useEffect, useState } from 'react';
import useModal from '../../common/hooks/useModal';
import { Helmet } from 'react-helmet';
import MyPageNonLogin from './MypageNonLogin';
import UserProfile from './UserProfileSection';
import UserReport from './UserReportSection';
import TabSwitcher from './TabSwitcher';
import ModalForLogin from '../../common/ModalForLogin';

const MyPageLayout = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const { isModalOpen, openModal, closeModal } = useModal();
    const [challenges, setChallenges] = useState([]);
    const [filteredChallenges, setFilteredChallenges] = useState([]);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            openModal(); // 로그인되지 않으면 모달을 열기
        } else {
            setLoggedInUser(loggedInUser);
        }
    }, [openModal]);

    useEffect(() => {
        // localStorage에서 데이터를 불러와서 상태를 업데이트하는 함수
        const updateChallenges = () => {
            const storedClgList =
                JSON.parse(localStorage.getItem('clglist')) || [];
            setChallenges(storedClgList);
            setFilteredChallenges(storedClgList); // 초기 상태로 전체 목록 표시
        };

        updateChallenges();

        // localStorage 변경을 감지하여 상태 업데이트
        const storageEventListener = () => {
            updateChallenges();
        };

        // localStorage에 변화가 있을 때마다 감지
        window.addEventListener('storage', storageEventListener);

        // Cleanup: 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('storage', storageEventListener);
        };
    }, []);

    return (
        <main className='w-[80%] max-w-[1344px] mx-auto flex flex-row justify-between'>
            <Helmet>
                <title>마이페이지 | UpDay, 나의 일상을 업그레이드</title>
            </Helmet>
            {!loggedInUser ? (
                <MyPageNonLogin />
            ) : (
                <>
                    <section className='flex flex-col w-[48%] gap-6'>
                        <UserProfile />
                        <UserReport />
                    </section>
                    <TabSwitcher
                        challenges={challenges}
                        setChallenges={setChallenges}
                        filteredChallenges={filteredChallenges}
                        setFilteredChallenges={setFilteredChallenges}
                    />
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
