import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ModalHeader from './components/ModalHeader';
import ModalContent from './components/ModalContent';
import ModalFooter from './components/ModalFooter';
import { addChallenge } from '../store/features/challengeSlice';
import { CATEGORY_IMAGES, userChallengeList } from '../data/userChallengeData';

const PostDetailModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { pathname } = useLocation();

    // 현재 모드 확인
    const isCreateMode = pathname.endsWith('/create');
    const isEditMode = pathname.endsWith('/edit');
    const isViewMode = !isCreateMode && !isEditMode;

    const selectedChallenge = useSelector(
        (state) => state.challenge.selectedChallenge
    );

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // 챌린지 생성 & 수정 모드일 때 사용할 상태
    const [formData, setFormData] = useState({
        title: isEditMode ? selectedChallenge?.title : '',
        content: isEditMode ? selectedChallenge?.content : '',
        category: isEditMode ? selectedChallenge?.category : '',
        duration: isEditMode ? selectedChallenge?.duration : '',
    });

    // 존재하지 않는 글을 보려고 할 때 빈 화면을 보여주는 안전장치
    if (isViewMode && !selectedChallenge) {
        return null;
    }

    // 카테고리별 이미지를 가져오는 함수 추가
    const getCategoryImage = (category) => {
        return CATEGORY_IMAGES[category] || CATEGORY_IMAGES.default;
    };

    const isMyPost = isCreateMode || loggedInUser?.email === selectedChallenge?.authorId;

    const handleClose = () => {
        navigate('/challengelist');
    };

    const handleSubmit = () => {
        if (isCreateMode) {
            const maxId =
                Math.max(...userChallengeList.map((challenge) => challenge.id)) + 1;
            // 이건 추후에 사용할 예정
            const userInfo = JSON.parse(localStorage.getItem('users'));
			
            const newChallenge = {
                ...formData,
                id: maxId,
                authorId: loggedInUser,
                nickname: userInfo.nickname,
                userImg: userInfo.profileImage,
            };

            // 필수 입력 체크
            if (
                !formData.title ||
                !formData.content ||
                !formData.duration ||
                !formData.category
            ) {
                alert('모든 항목을 입력하시오');
                return;
            }

			// 로컬 스토리지에 저장
			// const existingChallenges = JSON.parse(localStorage.getItem('challenges') || '[]');
			// const updatedChallenges = [...existingChallenges, newChallenge];
			// localStorage.setItem('challenges', JSON.stringify(updatedChallenges));

			const existingChallenges = JSON.parse(localStorage.getItem('challenges') || '[]');
			const updatedChallenges = [...existingChallenges, newChallenge];
			localStorage.setItem('challenges', JSON.stringify(updatedChallenges));

            dispatch(addChallenge(newChallenge));
            navigate('/challengelist');
        }
    };

    return (
        <div
            className='fixed inset-0 bg-neutral-900/60 flex items-center justify-center z-50'
            onClick={handleClose}
        >
            {/* 모달 내부 클릭시 닫히지 않도록 하는 메소드 */}
            <div
                className='w-[440px] p-6 rounded-2xl bg-neutral-100'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='mb-4 overflow-hidden rounded-2xl'>
                    <img
                        className='w-full'
                        src={
                            isViewMode
                                ? getCategoryImage(selectedChallenge?.category)
                                : formData.category
                                  ? getCategoryImage(formData.category)
                                  : CATEGORY_IMAGES.default
                        }
                        alt=''
                    />
                </div>
                <ModalHeader
                    mode={
                        isCreateMode ? 'create' : isEditMode ? 'edit' : 'view'
                    }
                    category={
                        isViewMode
                            ? selectedChallenge?.category
                            : formData.category
                    }
                    duration={
                        isViewMode
                            ? selectedChallenge?.duration
                            : formData.duration
                    }
                    isMyPost={isMyPost}
                    onChange={setFormData}
                    formData={formData}
                />
                <ModalContent
                    mode={
                        isCreateMode ? 'create' : isEditMode ? 'edit' : 'view'
                    }
                    title={isViewMode ? selectedChallenge?.title : formData.title}
                    content={isViewMode ? selectedChallenge?.content : formData.content}
                    onChange={setFormData}
                    formData={formData}
                />
                <ModalFooter
                    mode={
                        isCreateMode ? 'create' : isEditMode ? 'edit' : 'view'
                    }
                    userImg={isViewMode ? selectedChallenge?.userImg : 'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg'}
                    nickname={isViewMode ? selectedChallenge?.nickname : 'ㄴㅇㅇ'}
                    isMyPost={isMyPost}
                    onSubmit={handleSubmit}
					onClose={handleClose}
                />
            </div>
        </div>
    );
};

export default PostDetailModal;