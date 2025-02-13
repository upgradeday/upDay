
// import React, { useState, useEffect } from 'react';
// import { CATEGORY_IMAGES } from '../../data/userChallengeData';

// const getCategoryImage = (category) => {
//     return CATEGORY_IMAGES[category] || CATEGORY_IMAGES.default;
// };

// const ChalList = () => {
//     const [challenges, setChallenges] = useState([]);

//     useEffect(() => {
//         // 로컬 스토리지에서 챌린지 데이터를 가져옵니다.
//         const storedChallenges = localStorage.getItem('challenges');
//         if (storedChallenges) {
//             setChallenges(JSON.parse(storedChallenges));
//         }
//     }, []);

//     return (
//         <div className="grid grid-cols-3 gap-6 w-[80%] max-w-[1344px] mx-auto">
//             {challenges.map((challenge) => (
//                 <div key={challenge.id} className="p-4 bg-white rounded-2xl shadow-md">
//                     {/* 카테고리 & 기간 */}
//                     <div className="flex items-center justify-between mb-2">
//                         <span className="px-4 py-1 bg-[#fbdcc3] rounded-xl text-sm">{challenge.category}</span>
//                         <span className="text-sm text-gray-500">{challenge.duration}</span>
//                     </div>

//                     {/* 이미지 */}
//                     <div className="rounded-lg overflow-hidden mb-4">
//                         <img
//                             src={getCategoryImage(challenge.category)}
//                             alt={`${challenge.category} 챌린지`}
//                             className="w-full h-[180px] object-cover"
//                         />
//                     </div>

//                     {/* 제목 & 내용 */}
//                     <h2 className="text-lg font-semibold">{challenge.title}</h2>
//                     <p className="text-sm text-gray-600 mt-2">{challenge.content}</p>

//                     {/* 유저 정보 */}
//                     <div className="flex items-center mt-4">
//                         <img src={challenge.userImg} alt="유저 이미지" className="w-8 h-8 rounded-full" />
//                         <span className="ml-2 text-sm">{challenge.nickname}</span>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChalList;
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    joinChallenge,
    setSelectedChallenge,
} from '../../store/features/challengeSlice';
import { CATEGORY_IMAGES } from '../../data/userChallengeData';
import LoginRequiredModal from '../../common/components/LoginRequiredModal';
import useModal from '../../common/hooks/useModal';

const ChalList = ({ cardData }) => {
    // cardData 구조분해할당
    const {
        id,
        category,
        duration,
        title,
        content,
        userImg,
        nickname,
        authorId,
        clgJoin,
    } = cardData;

	const {isModalOpen, openModal, closeModal} = useModal();

    // 라우터 이동을 위한 navigate 함수
    const navigate = useNavigate();

    // Redux 액션 dispatch를 위한 함수
    const dispatch = useDispatch();

    // 로그인 한 유저의 아이디
    const loggedInUser = localStorage.getItem('loggedInUser');

    // 내가 작성한 글이 아닌 겨우
    const canJoin = loggedInUser !== authorId;

	// 참여하기 버튼 핸들링
    const handleJoin = (e) => {
		e.stopPropagation(); // 이벤트 전파 중지
		e.preventDefault(); // 기본 동작 방지

		if(!loggedInUser){
			openModal();
		}else{
			dispatch(joinChallenge(id));
		}
    };

	// 모달창 닫고 로그인 페이지로 이동하는 로직
	const handleNavigateToLogin = () => {
		closeModal();
		navigate('/login');
	}

    // 카드 클릭시 모달을 띄우는 이벤트 핸들러
    const handleCardClick = () => {
        // 선택한 카드의 데이터를 Redux store에 저장
        dispatch(setSelectedChallenge(cardData));

        // 해당 카드의 상세 모달 페이지로 이동
        navigate(`/challengelist/${id}`);
    };

    const getCategoryImage = (category) => {
        return CATEGORY_IMAGES[category] || CATEGORY_IMAGES.default;
    };

    return (
        <div
            className='p-4 rounded-2xl bg-white'
            onClick={handleCardClick}
        >
            {/* 카테고리 & 기간 */}
            <div className='mb-4'>
                <span className='px-6 py-[6px] rounded-xl' style={{
					backgroundColor: 
					category === '식단' ? '#E3E3F4' :
					category === '학습' ? '#FEF2C8' :
					category === '운동' ? '#C5EBE6' :
					category === '습관' ? '#FBDCC3' :
					'#FBDCC3'
				}}>
                    {category}
                </span>
                <span className='ml-4'>{duration}</span>
            </div>

            {/* 기본 제공 이미지 */}
            <div className='h-72 mb-4 rounded-2xl overflow-hidden'>
                <img
                    src={getCategoryImage(cardData.category)}
                    className='h-full mx-auto'
                    alt={`${cardData.category} 챌린지`}
                />
            </div>

            {/* 챌린지 제목 & 내용 */}
            <div className='mb-4'>
                <p className='mb-1 text-xl font-semibold'>{title}</p>
                <p className='text-sm font-light'>{content}</p>
            </div>

            {/* 유저 닉네임 & 사진 */}
            <div className='flex justify-between'>
                <div className='flex justify-between items-center'>
                    <div className='w-8 h-8 rounded-[50%] overflow-hidden'>
                        <img
                            src={userImg}
                            alt=''
                        />
                    </div>
                    <p className='ml-2 text-sm font-light'>{nickname}</p>
                </div>

                {/* 버튼 */}
                {canJoin && (
                    <button
                        type='button'
                        className='px-4 py-[6px] text-[#0B4E7A] border-[1px] border-solid border-[#0B4E7A] rounded-xl'
						onClick={handleJoin}
						disabled={clgJoin}
                    >
                        {clgJoin ? '참여중' : '참여하기'}
                    </button>
                )}
				<LoginRequiredModal isOpen={isModalOpen} onClose={closeModal} onNavigate={handleNavigateToLogin} stopPropagation={true}/>
            </div>
        </div>
    );
};

export default ChalList;
