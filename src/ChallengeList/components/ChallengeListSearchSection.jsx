import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getChallenges } from '../../utils/localStorage';

const btnList = [
    { title: '전체', color: '#121212' },
    { title: '식단', color: '#E3E3F4' },
    { title: '학습', color: '#FEF2C8' },
    { title: '운동', color: '#C5EBE6' },
    { title: '습관', color: '#FBDCC3' },
];

const ChallengeListSearchSection = ({
    setSelectedCategory,
    setSearchResults,
}) => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setSelectedCategory(category); // 부모 컴포넌트에 선택한 카테고리 전달
        setSearchResults(null); // 카테고리 변경시 검색 결과 초기화
        navigate(`/challengelist/category/${category}`);
    };

    // 검색 로직
    const handleSearch = () => {

        if (!searchTerm.trim()) {
            setSearchResults(null); // 검색어가 없으면 검색 결과 초기화
            return;
        }

		// 로컬 스토리지에 담긴 모든 챌린지 작성글
        const challenges = getChallenges();

		// 검색어 필터링 하는 로직
        const results = challenges.filter(
            (challenges) =>
                challenges.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                challenges.content
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
        );

        setSearchResults(results); // 검색 결과를 부모에게 전달
    };

    // Enter 키 눌러도 검색 가능
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className='flex mb-6'>
            <ul className='flex'>
                {btnList.map((ele, idx) => (
                    <li className='pr-4' key={idx}>
                        <button
                            onClick={() => handleCategoryClick(ele.title)}
							style={{
                                border: `1px solid ${ele.color}`,
                                backgroundColor:
                                    activeCategory === ele.title
                                        ? ele.color
                                        : 'white',
								color: activeCategory === ele.title ? 'white' : 'black',
                            }}
                            className='px-8 py-[10px] rounded-xl'
                        >
                            {ele.title}
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='검색어를 입력하시오'
                className='rounded-xl'
            />
            <button
                onClick={handleSearch}
                className='px-8 py-[10px] rounded-xl bg-white'
            >
                검색버튼
            </button>
        </section>
    );
};

export default ChallengeListSearchSection;
