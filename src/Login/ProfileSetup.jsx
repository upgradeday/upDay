import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setNickname,setProfileImage} from '../store/features/UserSlice';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
    const [nickname, setNicknameState] = useState('');
    const [profileImage, setProfileImageState] = useState(null);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Redux 에서 email , password 값 불러오기기
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
            signupDate: new Date().toISOString().split('T')[0],
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        navigate('/login');
    };


    return (
        <div>
            <h2>프로필 설정</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='닉네임'
                    value={nickname}
                    onChange={(e) => setNicknameState(e.target.value)}
                />
                <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                />
                {profileImage && (
                    <img src={profileImage} alt='프로필 미리보기' width={100} />
                )}
                <button type='submit'>설정 완료</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ProfileSetup;
