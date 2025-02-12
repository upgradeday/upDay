import React, { useState, useEffect } from 'react';

import PersonalInfo from './PersonalInfoSection'; // PersonalInfo 컴포넌트 임포트
import UserChallenge from './UserChallengeSection'; // MyChallenge 컴포넌트 임포트

export default function TabSwitcher() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users'));

    const [isTestAccount, setIsTestAccount] = useState(true);
    const [activeTab, setActiveTab] = useState(1); // 기본값으로 1번 탭을 활성화

    // 테스트 계정 여부 체크
    useEffect(() => {
        if (users && users.length > 0 && users[0].email !== loggedInUser) {
            setIsTestAccount(false);
        } else {
            setIsTestAccount(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 테스트 계정이 아니면 activeTab(2)로 설정
    useEffect(() => {
        if (!isTestAccount) {
            setActiveTab(2); // 테스트 계정이 아니면 개인정보 관리 탭을 활성화
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className='w-full md:w-[48%]'>
            <div className='flex gap-2'>
                <button
                    className={`tap-onclick ${activeTab === 1 ? 'tap-onclick' : 'tap-default'}`}
                    onClick={() => setActiveTab(1)}
                >
                    <h2>챌린지 관리</h2>
                </button>
                <button
                    className={`tap-onclick ${activeTab === 2 ? 'tap-onclick' : 'tap-default'}`}
                    onClick={() => setActiveTab(2)}
                >
                    <h2>개인정보 관리</h2>
                </button>
            </div>

            {/* 활성화된 탭에 맞는 컴포넌트 렌더링 */}
            {activeTab === 1 && (
                <UserChallenge
                // challenges={challenges}
                // setChallenges={setChallenges}
                />
            )}
            {activeTab === 2 && <PersonalInfo />}
        </section>
    );
}
