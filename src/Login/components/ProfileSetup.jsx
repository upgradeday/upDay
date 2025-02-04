import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
const ProfileSetup = () => {
    const [nickname, setNickname] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
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

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some((user) => user.nickname === nickname)) {
            setError('이 닉네임은 이미 사용 중입니다.');
            return;
        }

        users.push({ email, password, nickname, profileImage });
        localStorage.setItem('users', JSON.stringify(users));

        setError('');
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
                    onChange={(e) => setNickname(e.target.value)}
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
