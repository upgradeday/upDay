import React from 'react';

const ModalFooter = ({ userImg, nickname, isMyPost, mode, onSubmit, onClose }) => {
	if(mode === 'create'){
		return (
			<div className='flex justify-between'>
				<button onClick={onClose}>취소하기</button>
				<button onClick={onSubmit}>등록하기</button>
			</div>
		)
	}

    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <div className='w-8 h-8 overflow-hidden rounded-[50%]'>
                    <img src={userImg} alt='' />
                </div>
                <p className='ml-2 text-sm font-light'>{nickname}</p>
            </div>
            <div>
                {isMyPost ? (
                    <button className='px-16 py-2 rounded-xl font-semibold btn-primary'>
                        공유하기
                    </button>
                ) : (
                    <button className='px-16 py-2 rounded-xl font-semibold btn-primary'>
                        참여하기
                    </button>
                )}
            </div>
        </div>
    );
};

export default ModalFooter;
