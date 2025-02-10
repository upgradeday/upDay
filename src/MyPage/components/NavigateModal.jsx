import React from 'react';

const NavigateModal = ({ isOpen, onNavigate }) => {
    if (!isOpen) return null; // 모달이 열리지 않으면 아무것도 렌더링하지 않음

    return (
        <div className='fixed inset-0 bg-neutral-900 bg-opacity-50 flex justify-center items-center z-50'>
            <div className='card flex flex-col justify-between items-center w-96 h-48 p-6'>
                <h2 className='text-xl font-semibold m-6'>
                    로그인이 필요한 페이지입니다.
                </h2>

                <button
                    onClick={onNavigate}
                    className='btn btn-key px-4 py-2 text-base'
                >
                    로그인하러 가기
                </button>
            </div>
        </div>
    );
};

export default NavigateModal;
