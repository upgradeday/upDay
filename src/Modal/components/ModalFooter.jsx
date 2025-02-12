import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useModal from '../../common/hooks/useModal';
import { joinChallenge, setSelectedChallenge } from '../../store/features/challengeSlice';
import LoginRequiredModal from '../../common/components/LoginRequiredModal';
import { useNavigate } from 'react-router-dom';

const ModalFooter = ({ userImg, nickname, isMyPost, mode, onSubmit, onClose, challengeId }) => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loggedInUser = localStorage.getItem('loggedInUser');
	const {isModalOpen, openModal, closeModal} = useModal();
	const selectedChallenge = useSelector(state => state.challenge.selectedChallenge);

	const handleNavigateToLogin = () => {
        navigate('/login'); // 로그인 페이지로 리디렉션
        onClose(); // 모달 닫기
    };

	const handleJoin = () => {
		!loggedInUser ? openModal() : dispatch(joinChallenge(challengeId));
	}

	if(mode === 'create' || mode === 'edit'){
		return (
			<div className='flex justify-between'>
				<button onClick={onClose}>취소하기</button>
				<button onClick={onSubmit}>
					{mode === 'create' ? '등록하기' : '수정하기'}
				</button>
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
                    <button onClick={handleJoin} className='px-16 py-2 rounded-xl font-semibold btn-primary'>
                        {selectedChallenge ? '참여중' : '참여하기'}
                    </button>
                )}
            </div>
			<LoginRequiredModal isOpen={isModalOpen} onClose={closeModal} stopPropagation={true} onNavigate={handleNavigateToLogin} />
        </div>
    );
};

export default ModalFooter;
