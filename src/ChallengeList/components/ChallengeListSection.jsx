import React from 'react';
import ChallengeCard from './ChallengeCard';


const listData = [
	{id: 1, category: '습관1', period: '2주', img: '', title: '제목01010101', content: '내용 011111111', userImg: '', nickname: 'ㄴㅇㅇ' },
	{id: 2, category: '습관2', period: '3주', img: '', title: '제목222222222222', content: '내용 02222222222', userImg: '', nickname: 'ㄹㄹㄹ' },
	{id: 3, category: '습관3', period: '5주', img: '', title: '제목33333333', content: '내용 03333333333', userImg: '', nickname: 'ㅅㅅㅅㅅ' },
	{id: 4, category: '습관4', period: '7주', img: '', title: '제목44444444444', content: '내용 04444444444', userImg: '', nickname: 'dsfsdf' },

];

const ChallengeListSection = () => {

    return (
        <section className='flex gap-4 flex-wrap'>
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
        </section>
    );
};

export default ChallengeListSection;
