import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedChallenge } from '../../store/features/challengeSlice';

const ChallengeCard = ({ cardData }) => {
    // cardData 구조분해할당
    const { id, category, duration, img, title, content, userImg, nickname } = cardData;

    // 라우터 이동을 위한 navigate 함수
    const navigate = useNavigate();

    // Redux 액션 dispatch를 위한 함수
    const dispatch = useDispatch();

    // 카드 클릭시 모달을 띄우는 이벤트 핸들러
    const handleCardClick = () => {
        // 선택한 카드의 데이터를 Redux store에 저장
        dispatch(setSelectedChallenge(cardData));

        // 해당 카드의 상세 모달 페이지로 이동
        navigate(`/challengelist/${id}`);
    };

    return (
        <div
            className='w-[30%] mb-6 p-4 rounded-2xl bg-white'
            onClick={handleCardClick}
        >
			{/* 카테고리 & 기간 */}
            <div className='mb-4'>
                <span className='px-6 py-[6px] rounded-xl bg-[#fbdcc3]'>
                    {category}
                </span>
                <span className='ml-4'>{duration}</span>
            </div>

			{/* 기본 제공 이미지 */}
            <div className='mb-4 rounded-2xl overflow-hidden'>
                <img src={img} className='w-full' alt='' />
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
                            src='https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg'
                            alt=''
                        />
                    </div>
                    <p className='ml-2 text-sm font-light'>{nickname}</p>
                </div>

				{/* 버튼 */}
                <button
                    type='button'
                    className='px-4 py-[6px] text-[#0B4E7A] border-[1px] border-solid border-[#0B4E7A] rounded-xl'
                >
                    참여버튼
                </button>
            </div>
        </div>
    );
};

export default ChallengeCard;
