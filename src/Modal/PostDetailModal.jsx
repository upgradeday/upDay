import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ModalHeader from './components/ModalHeader';
import ModalContent from './components/ModalContent';
import ModalFooter from './components/ModalFooter';
import { addChallenge, deleteChallenge, updateChallenge } from '../store/features/challengeSlice';
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

    const loggedInUser = localStorage.getItem('loggedInUser');

    // 챌린지 생성 & 수정 모드일 때 사용할 상태
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: '',
        duration: '',
    });

	useEffect(() => {
		if(isEditMode && selectedChallenge){
			setFormData({
				title: selectedChallenge.title,
				content: selectedChallenge.content,
				category: selectedChallenge.category,
				duration: selectedChallenge.duration,
			});
		}
	}, [isEditMode, selectedChallenge]) // isEditMode 혹은 selectedChallenge가 변경될 때마다 재렌더링

    // 존재하지 않는 글을 보려고 할 때 빈 화면을 보여주는 안전장치
    if (isViewMode && !selectedChallenge) {
        return null;
    }

    // 카테고리별 이미지를 가져오는 함수 추가
    const getCategoryImage = (category) => {
        return CATEGORY_IMAGES[category] || CATEGORY_IMAGES.default;
    };

	// 로그인 한 유저인지 확인하는 로직
    const isMyPost = isCreateMode || loggedInUser === selectedChallenge?.authorId;

	// 창 닫기
    const handleClose = () => {
        navigate('/challengelist');
    };

	// 수정 버튼 클릭시 수정하는 모달 상태창으로 변경하는 로직
	const handleUpdate = () => {
		navigate(`/challengelist/${selectedChallenge.id}/edit`);
	}


	// 글 작성하는 로직
    const handleSubmit = () => {
        if (isCreateMode) {
			// 1. 로컬 스토리지의 챌린지 가져오기
			const existingStorageChallenges = JSON.parse(localStorage.getItem('challenges') || '[]');

			// 2. 더미 데이터 챌린지와 로컬 스토리지에 저장된 챌린지 합치기
			const allChallenges = [...userChallengeList, ...existingStorageChallenges];

            // 3. 합쳐진 챌린지들 중에서 가장 큰 id 값 찾은 후에 + 1 하기 
			const maxId = Math.max(...allChallenges.map((challenge) => challenge.id), 0) + 1;
            
            const userInfo = JSON.parse(localStorage.getItem('users'))[0];
			
            const newChallenge = {
                ...formData,
                id: maxId,
                authorId: loggedInUser,
                nickname: userInfo?.nickname || '기본 닉네임',
                userImg: userInfo?.profileImage || '',
				clgJoin: false,  // 추가: 처음에는 참여하지 않은 상태
    			clgDoing: false, // 추가: 처음에는 진행하지 않는 상태
    			clgDone: false   // 추가: 처음에는 완료하지 않은 상태
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

            dispatch(addChallenge(newChallenge));
            navigate('/challengelist');
        } else if(isEditMode){

			// 필수 입력 체크
			if(!formData.title || !formData.content || !formData.duration || !formData.category){
				alert('모든 항목을 입력하시오');
				return;
			}

			// 수정된 내용 저장하는 로직
			const updatedChallenge = {
				...selectedChallenge,
				...formData
			};

			dispatch(updateChallenge(updatedChallenge));
			navigate('/challengelist');
		}
    };

	// 글 삭제하는 로직
	const handleDelete = (id) => {
		dispatch(deleteChallenge(id));
		navigate('/challengelist');
	}


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
					onDelete={ () => handleDelete(selectedChallenge.id)}
					onUpdate={handleUpdate}
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
                    nickname={isViewMode ? selectedChallenge?.nickname : ''}
                    isMyPost={isMyPost}
                    onSubmit={handleSubmit}
					onClose={handleClose}
                />
            </div>
        </div>
    );
};

export default PostDetailModal;