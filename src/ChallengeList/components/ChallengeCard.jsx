import React from 'react';

const ChallengeCard = () => {
    return (
        <div className='w-[30%] mb-6 p-4 rounded-2xl bg-white'>
            <div className='mb-4'>
                <span className='px-6 py-[6px] rounded-xl bg-[#fbdcc3]'>
                    습관
                </span>
                <span className='ml-4'>2주</span>
            </div>
            <div className='mb-4 rounded-2xl overflow-hidden'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtt3aOrfYZ1KnQq4GK0vf9gkNBC07f72UWQ&s'
                    className='w-full'
                    alt=''
                />
            </div>
            <div className='mb-4'>
                <p className='mb-1 text-xl font-semibold'>여기는 제목</p>
                <p className='text-sm font-light'>여기는 내용</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-between items-center'>
                    <div className='w-8 h-8 rounded-[50%] overflow-hidden'>
                        <img src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg' alt='' />
                    </div>
                    <p className='ml-2 text-sm font-light'>닉네임</p>
                </div>

                <button type='button' className='px-4 py-[6px] text-[#0B4E7A] border-[1px] border-solid border-[#0B4E7A] rounded-xl'>참여버튼</button>
            </div>
        </div>
    );
};

export default ChallengeCard;
