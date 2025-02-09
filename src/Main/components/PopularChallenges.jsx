import { useState, useEffect } from 'react';
import ChallengeIcons from '../images/challenge-1.svg';
import '../styles/PopularChallenges.css';

const PopularChallenges = ({ challenges }) => {
    const [currentChallenges, setCurrentChallenges] = useState(
        challenges.slice(0, 3)
    ); // 기본적으로 3개의 챌린지만 보이게 설정
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % (challenges.length - 2)); // 순위를 변경하는 로직
        }, 2000); // 2초마다 순위 변경

        return () => clearInterval(interval); // 컴포넌트가 unmount될 때 interval을 정리
    }, [challenges.length]);

    useEffect(() => {
        setCurrentChallenges(challenges.slice(index, index + 3)); // 현재 3개의 챌린지를 보여주는 로직
    }, [index, challenges]);

    return (
        <>
            <div className='relative'>
                <div className='relative z-10'>
                    <img
                        src={ChallengeIcons}
                        alt='챌린지 아이콘'
                        className='absolute w-[180px] top-[-12px] left-[-8px]' // ChallengeIcons 이미지의 위치 조정
                    />
                    <h2 className='relative text-white text-xl font-medium mb-4 z-20 top-[-5px] left-[2px]'>
                        최근에 올라온 챌린지
                    </h2>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {currentChallenges.map((challenge, index) => (
                    <div
                        key={index}
                        className='bg-white p-4 rounded-xl text-lg font-semibold transform transition-all duration-500 ease-in-out'
                    >
                        <p className={`challenge-text animate-change-text`}>
                            {challenge}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularChallenges;
