import React, { useState } from 'react';
import PersonalInfo from './PersonalInfoSection'; // PersonalInfo 컴포넌트 임포트
import MyChallenge from './MyChallengeSection'; // MyChallenge 컴포넌트 임포트

export default function TabSwitcher() {
    const [activeTab, setActiveTab] = useState(1); // 기본값으로 1번 탭을 활성화

    return (
        <section className='w-[48%]'>
            <div className='flex gap-2'>
                <button
                    className={`tap-onclick ${activeTab === 1 ? 'tap-onclick' : 'tap-default'}`}
                    onClick={() => setActiveTab(1)}
                >
                    <h2>개인정보 관리</h2>
                </button>
                <button
                    className={`tap-onclick ${activeTab === 2 ? 'tap-onclick' : 'tap-default'}`}
                    onClick={() => setActiveTab(2)}
                >
                    <h2>챌린지 관리</h2>
                </button>
            </div>

            {/* 활성화된 탭에 맞는 컴포넌트 렌더링 */}
            {activeTab === 1 && <PersonalInfo />}
            {activeTab === 2 && <MyChallenge />}
        </section>
    );
}
