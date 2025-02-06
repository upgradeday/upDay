import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../store/features/UserSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmailState] = useState('');
    const [password, setPasswordState] = useState('');
    const [passwordConfirm, setPasswordConfirmState] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pwError, setPwError] = useState('');
    const [pwConfirmError, setPwConfirmError] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) =>
        password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newEmailError = '';
        let newPwError = '';
        let newPwConfirmError = '';
        let newError = '';

        if (!validateEmail(email)) {
            newEmailError = '올바른 이메일 형식을 입력하세요.';
        }

        if (!validatePassword(password)) {
            newPwError = '8자 이상이며 특수문자를 포함해야 합니다.';
        }

        if (password !== passwordConfirm) {
            newPwConfirmError = '비밀번호가 일치하지 않습니다.';
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some((user) => user.email === email)) {
            newError = '이미 등록된 아이디입니다.';
        }

        setEmailError(newEmailError);
        setPwError(newPwError);
        setPwConfirmError(newPwConfirmError);
        setError(newError);

        if (newEmailError || newPwError || newPwConfirmError || newError) return;

        dispatch(setEmail(email));
        dispatch(setPassword(password));

        navigate('/profile');
    };

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>이메일</label>
                <input
                    type='email'
                    placeholder='ㅇㅇㅇ@example.com'
                    value={email}
                    onChange={(e) => setEmailState(e.target.value)}
                />
                {emailError && <div>{emailError}</div>}

                <label htmlFor='password'>비밀번호</label>
                <input
                    type='password'
                    placeholder='8자 이상 특수문자 포함'
                    value={password}
                    onChange={(e) => setPasswordState(e.target.value)}
                />
                {pwError && <div>{pwError}</div>}

                <label htmlFor='passwordConfirm'>비밀번호 확인</label>
                <input
                    type='password'
                    placeholder='8자 이상 특수문자 포함'
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirmState(e.target.value)}
                />
                {pwConfirmError && <div>{pwConfirmError}</div>}

                {error && <div>{error}</div>}

                <button type='submit'>회원가입</button>
            </form>
        </div>
    );
};

export default Signup;