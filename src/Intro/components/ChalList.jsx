// import React from 'react';
// import { CATEGORY_IMAGES } from '../../data/userChallengeData';

// const ChalList = ({ cardData }) => {
//     const { category, duration, title, content, userImg, nickname } = cardData;

//     // 카테고리 이미지 가져오는 함수
//     const getCategoryImage = (category) => {
//         return CATEGORY_IMAGES[category] || CATEGORY_IMAGES.default;
//     };

//     return (
//         <div className='w-[30%] mb-6 p-4 rounded-2xl bg-white'>
//             {/* 카테고리 & 기간 */}
//             <div className='mb-4'>
//                 <span className='px-6 py-[6px] rounded-xl bg-[#fbdcc3]'>
//                     {category}
//                 </span>
//                 <span className='ml-4'>{duration}</span>
//             </div>

//             {/* 기본 제공 이미지 */}
//             <div className='mb-4 rounded-2xl overflow-hidden'>
//                 <img
//                     src={getCategoryImage(category)}
//                     className='w-full'
//                     alt={`${category} 챌린지`}
//                 />
//             </div>

//             {/* 챌린지 제목 & 내용 */}
//             <div className='mb-4'>
//                 <p className='mb-1 text-xl font-semibold'>{title}</p>
//                 <p className='text-sm font-light'>{content}</p>
//             </div>

//             {/* 유저 닉네임 & 사진 */}
//             <div className='flex items-center'>
//                 <div className='w-8 h-8 rounded-full overflow-hidden'>
//                     <img src={userImg} alt='' />
//                 </div>
//                 <p className='ml-2 text-sm font-light'>{nickname}</p>
//             </div>
//         </div>
//         {Object.entries(CATEGORY_IMAGES).map(([category, imageUrl]) => (
//             <div key={category}>
//                 <img src={imageUrl} alt={`${category} 챌린지`} />
//                 <p>{category}</p>
//             </div>
//         ))};
//     );
// };

// export default ChalList;
import React from 'react';
import { CATEGORY_IMAGES } from '../../data/userChallengeData'; // 카테고리별 이미지 데이터


const ChalList = () => {
    return (
        <div className="grid grid-cols-3 gap-6 w-[80%] max-w-[1344px] mx-auto">
            {CATEGORY_IMAGES.map((challenge) => (
                <div key={challenge.id} className="p-4 bg-white rounded-2xl shadow-md">
                    
                    {/* 카테고리 & 기간 */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="px-4 py-1 bg-[#fbdcc3] rounded-xl text-sm">{challenge.category}</span>
                        <span className="text-sm text-gray-500">{challenge.duration}</span>
                    </div>

                    {/* 이미지 */}
                    <div className="rounded-lg overflow-hidden mb-4">
                        <img
                            src={CATEGORY_IMAGES[challenge.category] || CATEGORY_IMAGES.default}
                            alt={`${challenge.category} 챌린지`}
                            className="w-full h-[180px] object-cover"
                        />
                    </div>

                    {/* 제목 & 내용 */}
                    <h2 className="text-lg font-semibold">{challenge.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{challenge.content}</p>

                    {/* 유저 정보 */}
                    <div className="flex items-center mt-4">
                        <img src={challenge.userImg} alt="유저 이미지" className="w-8 h-8 rounded-full" />
                        <span className="ml-2 text-sm">{challenge.nickname}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChalList;
