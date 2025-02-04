import { useState } from 'react';

const ProfileSetup = ({ onProfileComplete }) => {
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');

  // 이메일과 비밀번호를 localStorage에서 불러오기
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);  // 이미지를 상태에 저장
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 닉네임 길이 제한 체크
    if (nickname.length > 6) {
        setError('닉네임은 6글자 이내여야 합니다.');
        return;
    }

    // 사용자 목록 가져오기
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 중복된 닉네임이 있는지 확인
    const existingNickname = users.find((user) => user.nickname === nickname);
    if (existingNickname) {
        setError('이 닉네임은 이미 사용 중입니다.');
        return;
    }

    // error 초기화
    setError('');

    // 새로운 사용자 정보 추가
    const newUser = { email, password, nickname, profileImage };
    users.push(newUser);

    // 사용자 배열을 localStorage에 다시 저장
    localStorage.setItem('users', JSON.stringify(users));

    // 프로필 설정 완료 후 콜백 호출
    onProfileComplete();
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
