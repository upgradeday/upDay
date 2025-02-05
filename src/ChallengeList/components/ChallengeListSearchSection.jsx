import React from 'react';

const btnList = [
	{title: '전체', color: '#121212'},
	{title: '식단', color: '#E3E3F4'},
	{title: '학습', color: '#FEF2C8'},
	{title: '운동', color: '#C5EBE6'},
	{title: '습관', color: '#FFDEE7'},

];

const ChallengeListSearchSection = () => {
    return (
        <section className='flex mb-6'>
            <ul className='flex'>
                {btnList.map((ele, idx) => {
                    return (
                        <li className='pr-4' key={idx}>
                            <button  style={{ border: `1px solid ${ele.color}`}} className='px-8 py-[10px] rounded-xl  bg-white'>{ele.title}</button>
                        </li>
                    );
                })}
            </ul>

			<input type="text" placeholder='검색어를 입력하시오' className='rounded-xl'/>
			<button className='px-8 py-[10px] rounded-xl  bg-white'>검색버튼</button>
        </section>
    );
};

export default ChallengeListSearchSection;
