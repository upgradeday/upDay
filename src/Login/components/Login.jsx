import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
        <div className='flex justify-end pr-[10vw]  '>
            <Helmet>
                <title>로그인 | upDay와 함께 새로운 하루</title>
            </Helmet>
            <div className='w-506 h-auto mt-[7.12rem] mr-[6rem] shrink-0 '>
                <img src={pic1} alt='pic1' className='w-full h-auto' />
                {/* pic */}
            </div>
            <div className='flex items-center flex-col shrink-0 text-center w-[40.75rem] rounded-3xl bg-neutral-100'>
                <div className='relative inline-block mt-[3.5rem]'>
                    <img src={pic2} alt='pic2' className='w-full h-auto' />
                    <div className='absolute top-1/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-neutral-100'>
                        로그인 / 회원가입 하기
                    </div>
                </div>
                <div className='text-lg mt-[3rem] mb-[2.5rem]'>
                    로그인 방법을 선택하세요
                </div>
                <form
                    onSubmit={handleSubmit}
                    className='flex items-center flex-col'
                >
                    <input
                        type='email'
                        placeholder='이메일'
                        className='border border-gray-300 mb-4 pl-6 w-80 h-12 rounded-xl'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='비밀번호'
                        className='border border-gray-300 mb-4 pl-6 w-80 h-12 rounded-xl'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='w-[20rem] px-[136.5px] py-3 my-10 mb-9 bg-neutral-800 text-neutral-100 '
                    >
                        로그인
                    </button>
                </form>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <div className='w-92 flex items-center text-center text-gray-700 text-xs font-medium relative'>
                    <span className='flex-1 border-b border-gray-500 mx-6'></span>
                    또는
                    <span className='flex-1 border-b border-gray-500 mx-6'></span>
                </div>
                <img src={pic3} alt='pic3' className='my-9' />
                <Link to='/signup' className='text-neutral-700 text-lg'>
                    회원가입하기
                </Link>
            </div>
        </div>
    );
};

export default Login;
