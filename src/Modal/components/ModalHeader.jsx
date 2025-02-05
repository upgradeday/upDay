import React from 'react';

const ModalHeader = ({ category, duration, isMyPost }) => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
                <span className='mr-4 px-6 py-[6px] rounded-xl bg-pink-200'>
                    {category}
                </span>
                <span>목표기간 {duration}</span>
            </div>

			{
				isMyPost && (
					<div className='flex'>
						<button>수정</button>
						<button>삭제</button>
					</div>
				)
			}
        </div>
    );
};

export default ModalHeader;
