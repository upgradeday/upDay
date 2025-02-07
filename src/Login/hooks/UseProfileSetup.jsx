import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname, setProfileImage } from '../../store/features/UserSlice';
import { useNavigate } from 'react-router-dom';

const useProfileSetup = () => {
    const [nickname, setNicknameState] = useState('');
    const [profileImage, setProfileImageState] = useState(null);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImageState(reader.result);
                dispatch(setProfileImage(reader.result));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nickname.length > 6) {
            setError('닉네임은 6글자 이내여야 합니다.');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some((user) => user.nickname === nickname)) {
            setError('이 닉네임은 이미 사용 중입니다.');
            return;
        }

        // Redux 상태 업데이트
        dispatch(setNickname(nickname));

        const newUser = {
            email,
            password,
            nickname,
            profileImage,
            signupDate: new Date().toISOString().split('T')[0], // 날짜만 저장
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        navigate('/login');
    };

    return {
        nickname,
        profileImage,
        error,
        setNicknameState,
        handleImageUpload,
        handleSubmit,
    };
};

export default useProfileSetup;
