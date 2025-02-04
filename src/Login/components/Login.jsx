import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // ✅ useNavigate 추가

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        const existingUser = storedUsers.find(
            (user) => user.email === email && user.password === password
        );
        if (existingUser) {
            setError('');
            localStorage.setItem('loggedInUser', email);
            navigate('/'); // ✅ 로그인 성공 후 메인 페이지로 이동
        } else {
            setError('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div>
            <h2>로그인</h2>
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
                <button type='submit'>로그인</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
