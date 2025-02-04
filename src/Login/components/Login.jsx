import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../style/Login.module.css';
import pic1 from '../img/Group 233.svg';
import pic2 from '../img/Group 72.svg';
import pic3 from '../img/kakao_login 1.svg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        const existingUser = storedUsers.find(
            (user) => user.email === email && user.password === password
        );
        if (existingUser) {
            setError('');
            localStorage.setItem('loggedInUser', email);
            navigate('/'); 
        } else {
            setError('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className={style.body}>
            <div className={style.imageWrapper}>
                <img src={pic1} alt='pic1' className={style.pic1} />
            </div>
            <div className={style.loginForm}>
                <div className={style.title}>
                    <img src={pic2} alt='pic2' className={style.pic2} />
                    <div className={style.textOverlay}>
                        로그인 / 회원가입 하기
                    </div>
                </div>
                <div className={style.ft18}>로그인 방법을 선택하세요</div>
                <form onSubmit={handleSubmit} className={style.submit}>
                    <input
                        type='email'
                        placeholder='이메일'
                        className={style.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='비밀번호'
                        className={style.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className={style.button}>
                        로그인
                    </button>
                </form>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <div className={style.orText}>또는</div>
                <img src={pic3} alt='pic3' className={style.pic3} />
                <Link to='/signup' className={style.signup}>
                    회원가입하기
                </Link>
            </div>
        </div>
    );
};

export default Login;
