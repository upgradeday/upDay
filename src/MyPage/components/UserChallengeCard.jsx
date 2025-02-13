import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setMyPosts,
    toggleClgState,
    deleteChallenge,
} from '../../store/features/userChallengeSlice';
import { HiFire, HiDocumentCheck } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const UserChallengeCard = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedChallenge = useSelector(
        (state) => state.myClgList.selectedChallenge
    );
    const loggedInUser = localStorage.getItem('loggedInUser');

    useEffect(() => {
        dispatch(setMyPosts()); // 새로고침해도 유지되도록 불러오기
    }, [dispatch]);

    if (!isOpen || !selectedChallenge) return null;

    const { id, category, title, clgDoing, clgDone, authorId } =
        selectedChallenge;

    // 내가 작성한 챌린지인지 확인
    const isMyPost = loggedInUser === authorId;

    // 챌린지 카테고리별 뱃지 클래스 설정
    const badgeClasses = {
        식단: 'badge-meal',
        학습: 'badge-study',

        운동: 'badge-sport',
        습관: 'badge-habit',
    };
    const getBadgeClass = (category) =>
        badgeClasses[category] || 'badge-default';

    // 챌린지 상태에 따른 동적 클래스 설정
    const getClgTitleClass = (doing, done) => {
        if (!doing && done) return 'line-through';
        if (!doing && !done) return 'line-through text-neutral-500';
        return '';
    };
    const getClgDoingClass = (doing) => (doing ? 'doing-on' : 'doing-off');
    const getClgDoneClass = (done) => (done ? 'done-on' : 'done-off');

    // 챌린지 상태 토글 함수
    const handleToggle = (type) => {
        dispatch(toggleClgState({ id, type }));
    };

    // 수정 버튼 클릭 시 수정 페이지로 이동
    const handleEdit = () => {
        navigate(`/challengelist/${id}/edit`);
    };

    // 삭제 버튼 클릭 시 챌린지 삭제
    const handleDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            dispatch(deleteChallenge(id)); // 동기 액션 사용
            onClose(); // 모달 닫기
        }
    };

    return (
        <div className='fixed w-full inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-50'>
            <div className='h-auto min-w-80 w-[82%] max-w-96 md:w-96 bg-neutral-100 p-6 rounded-xl shadow-lg'>
                {/* 챌린지 제목 */}
                <h2
                    className={`${getClgTitleClass(clgDoing, clgDone)} text-lg font-bold mb-4`}
                >
                    {title}
                </h2>
                {/* 챌린지 카테고리 뱃지 */}
                <p
                    className={`text-sm text-gray-600 ${getBadgeClass(category)}`}
                >
                    {category}
                </p>

                {/* 챌린지 진행 상태 버튼 */}
                <div className='flex justify-between mt-4'>
                    <button
                        className={`p-2 rounded-lg ${getClgDoingClass(clgDoing)}`}
                        onClick={() => handleToggle('doing')}
                    >
                        <HiFire className='text-white' />
                    </button>
                    <button
                        className={`p-2 rounded-lg ${getClgDoneClass(clgDone)}`}
                        onClick={() => handleToggle('done')}
                    >
                        <HiDocumentCheck className='text-white' />
                    </button>
                </div>

                {/* 내가 작성한 챌린지일 경우 수정/삭제 버튼 표시 */}
                {isMyPost && (
                    <div className='flex justify-between mt-4'>
                        <button
                            onClick={handleEdit}
                            className='w-[48%] bg-yellow-500 text-white p-2 rounded-lg'
                        >
                            수정
                        </button>
                        <button
                            onClick={handleDelete}
                            className='w-[48%] bg-red-500 text-white p-2 rounded-lg'
                        >
                            삭제
                        </button>
                    </div>
                )}

                {/* 하단 버튼 - 내가 작성한 챌린지일 경우 메시지 변경 */}
                <button
                    onClick={onClose}
                    className='mt-4 w-full bg-gray-500 text-white p-2 rounded-lg'
                >
                    {isMyPost ? '내가 작성한 챌린지입니다.' : '참여 중'}
                </button>
            </div>
        </div>
    );
};

export default UserChallengeCard;
