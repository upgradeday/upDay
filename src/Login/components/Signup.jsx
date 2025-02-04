import { useState } from 'react';

const Signup = ({ onSignupSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('올바른 이메일 형식을 입력하세요.');
            return;
        }
        if (!validatePassword(password)) {
            setError('비밀번호는 8자 이상이며 특수문자를 포함해야 합니다.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingEmail = users.find((user) => user.email === email);
        if (existingEmail) {
        setError('이미 등록된 아이디입니다.');
        return;
        }

        // 이메일과 비밀번호를 각각 localStorage에 저장
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        setError('');
        onSignupSuccess(); // 회원가입 성공 후 프로필 설정 페이지로 이동
    };

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='이메일'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='비밀번호'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>가입하기</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Signup;

