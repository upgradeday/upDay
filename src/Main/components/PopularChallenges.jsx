import React, { useState, useEffect } from 'react';
import ChallengeIcon from '../images/challenge-2.svg';

const PopularChallenges = ({ challenges }) => {
    const [currentChallenges, setCurrentChallenges] = useState([]);
    const [challengeIndex, setChallengeIndex] = useState(0);

    // 초기 데이터 설정
    useEffect(() => {
        if (challenges && challenges.length > 0) {
            // 클릭수를 기준으로 내림차순 정렬 후 상위 9개만 저장
            const sortedChallenges = [...challenges].sort((a, b) => b.postClicked - a.postClicked);
            setCurrentChallenges(sortedChallenges.slice(0, 9));
        }
    }, [challenges]);

    // 3초마다 challengeIndex 업데이트
    useEffect(() => {
        if (currentChallenges.length > 0) {
            const interval = setInterval(() => {
                setChallengeIndex((prevIndex) => (prevIndex + 1) % currentChallenges.length);
            }, 3000); // 3초마다 다음 챌린지로 이동

            return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 클리어
        }
    }, [currentChallenges]);

    // 현재 챌린지를 가져오는 함수
    const getChallenge = (offset) => {
        if (currentChallenges.length === 0) return null; // 데이터가 없으면 null 반환
        const index = (challengeIndex + offset) % currentChallenges.length; // 순환 인덱스 계산
        return currentChallenges[index];
    };

    return (
        <div className="relative">
            {/* 제목과 아이콘 */}
            <div className="relative z-10">
                <img
                    src={ChallengeIcon}
                    alt="챌린지 아이콘"
                    className="absolute w-[170px] top-[-12px] left-[-15px]"
                />
                <h2 className="relative text-white text-xl font-medium mb-4 z-20 top-[-5px] left-[2px]">
                    인기 있는 챌린지
                </h2>
            </div>

            {/* 챌린지 리스트 */}
            <div className="flex flex-col gap-4">
                {[0, 1, 2].map((offset) => {
                    const challenge = getChallenge(offset); // 현재 인덱스에 따라 챌린지 가져오기
                    return (
                        <div
                            key={offset}
                            className={`bg-white p-4 rounded-xl text-lg font-semibold transform transition-all duration-500 ease-in-out 
                                ${offset === 0 ? 'opacity-100' : 'opacity-50'}`} // 첫 번째 항목은 강조
                        >
                            {challenge ? (
                                <>
                                    <div>{challenge.title}</div>
                                    <div>{challenge.description}</div>
                                </>
                            ) : (
                                <div>데이터를 불러오는 중...</div> // 데이터가 없을 경우 메시지 표시
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PopularChallenges;
