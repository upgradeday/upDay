import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ModalHeader from './components/ModalHeader';
import ModalContent from './components/ModalContent';
import ModalFooter from './components/ModalFooter';
import { challengeList } from '../data/challengeData';
import { addChallenge } from '../store/features/challengeSlice';

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
        title: isEditMode ? selectedChallenge?.title : '',
        content: isEditMode ? selectedChallenge?.content : '',
        category: isEditMode ? selectedChallenge?.category : '',
        duration: isEditMode ? selectedChallenge?.duration : '',
    });

    // 존재하지 않는 글을 보려고 할 때 빈 화면을 보여주는 안전장치
    if (isViewMode && !selectedChallenge) {
        return null;
    }

    const isMyPost =
        isCreateMode || loggedInUser === selectedChallenge?.authorId;

    const handleClose = () => {
        navigate('/challengelist');
    };

    const handleSubmit = () => {
        const maxId = Math.max(
            ...challengeList.map((challenge) => challenge.id)
        );
        const userInfo = JSON.parse(localStorage.getItem('users'));

        if (isCreateMode) {
            const newChallenge = {
                ...formData,
                id: maxId,
                authorId: loggedInUser,
                nickname: 'ㄴㅇㅇ',
                userImg:
                    'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
            };
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
            <div className='w-[440px] p-6 rounded-2xl bg-neutral-100' onClick={e => e.stopPropagation()}>
				
                <div className='mb-4 overflow-hidden rounded-2xl'>
                    <img
                        className='w-full'
                        src={selectedChallenge.img}
                        alt=''
                    />
                </div>
                <ModalHeader
                    category={selectedChallenge.category}
                    duration={selectedChallenge.duration}
                    isMyPost={isMyPost}
                />
                <ModalContent
                    title={selectedChallenge.title}
                    content={selectedChallenge.content}
                />
                <ModalFooter
                    userImg={selectedChallenge.userImg}
                    nickname={selectedChallenge.nickname}
                    isMyPost={isMyPost}
                />
            </div>
        </div>
    );
};

export default PostDetailModal;
