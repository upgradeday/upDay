import React from 'react';
import CategoryItem from './CategoryItem'; // 새로 만든 CategoryItem 컴포넌트 import

const CategoryList = ({ categories }) => {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-2 gap-4 mt-2'>
                {categories.map((category, index) => (
                    <CategoryItem key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
