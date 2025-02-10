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

const ChallengeCard = ({ cardData }) => {
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

    // 내가 작성한 글이 아니면서 아직 참여하지 않은 경우에만 버튼 표시
    const canJoin = loggedInUser !== authorId && !clgJoin;

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
                <img
                    src={getCategoryImage(cardData.category)}
                    className='w-full'
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
                        {clgJoin ? '참여완료' : '참여하기'}
                    </button>
                )}
				<LoginRequiredModal isOpen={isModalOpen} onClose={closeModal} onNavigate={handleNavigateToLogin} stopPropagation={true}/>
            </div>
        </div>
    );
};

export default ChallengeCard;
