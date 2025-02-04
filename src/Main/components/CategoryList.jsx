import React from 'react';

const CategoryList = ({ categories }) => {
    return (
        <div className='mt-6'>
            <h2 className='text-xl font-bold'>챌린지 둘러보기</h2>
            <div className='grid grid-cols-2 gap-4 mt-2'>
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`p-4 text-center rounded-lg ${category.color} cursor-pointer`}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
