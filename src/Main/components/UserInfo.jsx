import React from 'react';
import MainDay from '../images/mainday.svg';
import MbFlower from '../images/mb_flower.svg'

const UserInfo = ({ userName, challengeDays }) => {
    return (
        <div className='relative mt-[110px] z-10 w-full'>
            {userName ? (
         <>
         <div className="relative w-full">
             {/* 모바일에서만 흰색 배경 박스 */}
             <div className="absolute inset-0 bg-white rounded-xl p-4 md:hidden border border-neutral-500 z-10"></div>
     
             {/* 기존 콘텐츠 */}
             <div className="relative z-10 text-left pl-4 top-[13px] md:pl-0 md:top-[-30px]">
                 <h1 className="text-base md:text-lg font-medium mb-0">
                     <span className="text-xl md:text-3xl font-bold">
                         {userName}님
                     </span>{' '}
                     안녕하세요!
                 </h1>
                 <div className="flex items-center text-gray-500 text-sm md:text-lg">
                     <img
                         src={MainDay}
                         alt="Main Day"
                         className="w-[120px] md:w-[150px] h-[70px] md:h-[90px] object-contain mr-2 mb-3"
                     />

                     
     
                     <span>
                         와{' '}
                         <span className="text-xl md:text-2xl font-semibold text-blue-400">
                             {challengeDays}
                         </span>{' '}
                         일째 도전 중입니다.
                     </span>
                 </div>
             </div>
         </div>
         <img 
    src={MbFlower} 
    alt="MbFlower" 
    className="w-[150px] absolute top-[-80px] right-4 md:hidden" 
/>


     </>
     
     
            ) : (
                <>
                    <h1 className='text-lg font-medium mb-0 text-left'>
                        <span className='text-3xl font-bold'>사용자 님</span>{' '}
                        안녕하세요!
                    </h1>
                    <div className='flex items-center text-gray-500 text-lg'>
                        <img
                            src={MainDay}
                            alt='Main Day'
                            className='w-[150px] h-[90px] object-contain mr-2'
                        />
                        <span>와 같이 챌린지 시작해 볼까요?</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserInfo;
