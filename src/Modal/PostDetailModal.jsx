import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalHeader from './components/ModalHeader';
import ModalContent from './components/ModalContent';
import ModalFooter from './components/ModalFooter';

const PostDetailModal = () => {

	const selectedChallenge = useSelector(state => state.challenge.selectedChallenge);
	const navigate = useNavigate();
	const loggedInUser = localStorage.getItem('loggedInUser');
	
	if(! selectedChallenge){
		return null;
	}
	
	const isMyPost = loggedInUser === selectedChallenge.authorId;

    const handleClose = () => {
        navigate('/challengelist');
    };

    return (
        <div
            className='fixed inset-0 bg-neutral-900/60 flex items-center justify-center z-50'
            onClick={handleClose}
        >
            <div className='w-[440px] p-6 rounded-2xl bg-neutral-100'>
				<div className='mb-4 overflow-hidden rounded-2xl'>
					<img className='w-full' src={selectedChallenge.img} alt="" />
				</div>
				<ModalHeader category={selectedChallenge.category} duration={selectedChallenge.duration} isMyPost={isMyPost} />
				<ModalContent title={selectedChallenge.title} content={selectedChallenge.content} />
				<ModalFooter userImg={selectedChallenge.userImg} nickname={selectedChallenge.nickname} isMyPost={isMyPost} />
			</div>
        </div>
    );
};

export default PostDetailModal;
