import React, { useEffect, useState, useCallback } from 'react';
import useModal from '../../common/hooks/useModal';
import { Helmet } from 'react-helmet';
import MyPageNonLogin from './MypageNonLogin';
import UserProfile from './UserProfileSection';
import UserReport from './UserReportSection';
import TabSwitcher from './TabSwitcher';
import ModalForLogin from '../../common/ModalForLogin';
import { getChallenges } from '../../utils/localStorage';

const MyPageLayout = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const { isModalOpen, openModal, closeModal } = useModal();
    const [challenges, setChallenges] = useState([]);
    const [filteredChallenges, setFilteredChallenges] = useState([]);

    const checkUserLogin = useCallback(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (!storedUser) {
            openModal();
        } else {
            try {
                setLoggedInUser(JSON.parse(storedUser)); // ✅ JSON 파싱 추가 (안전성 ↑)
            } catch (error) {
                console.error('Error parsing loggedInUser:', error);
                setLoggedInUser(storedUser);
            }
        }
    }, [openModal]);

    useEffect(() => {
        checkUserLogin();
    }, [checkUserLogin]);

    useEffect(() => {
        // 초기 상태를 한 번에 처리
        const storedClgList = getChallenges();
        setChallenges(storedClgList);
        setFilteredChallenges(storedClgList);

        // localStorage 변경 감지 이벤트 리스너 등록
        const storageEventListener = () => {
            const updatedChallenges = getChallenges();
            setChallenges(updatedChallenges);
            setFilteredChallenges(updatedChallenges);
        };

        window.addEventListener('storage', storageEventListener);

        return () => {
            window.removeEventListener('storage', storageEventListener);
        };
    }, []);

    return (
        <main className='w-[90%] md:w-[80%] md:max-w-[1344px] mx-auto flex flex-col md:flex-row gap-4 justify-between'>
            <Helmet>
                <title>마이페이지 | UpDay, 나의 일상을 업그레이드</title>
            </Helmet>
            {!loggedInUser ? (
                <MyPageNonLogin />
            ) : (
                <>
                    <section className='flex flex-col w-full md:w-[48%] gap-4 md:gap-6'>
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
