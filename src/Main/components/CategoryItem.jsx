import React from 'react';

const CategoryItem = ({ category }) => {
    return (
        <div
            className={`p-4 text-center rounded-lg ${category.color} cursor-pointer relative`}
            style={{ height: '180px' }}
        >
            <span className='text-2xl font-semibold'>{category.name}</span>
            <img
                src={category.icon}
                alt={`${category.name} icon`}
                className='absolute bottom-4 right-7'
            />
        </div>
    );
};

export default CategoryItem;
