import { Link } from 'react-router-dom';
import useLogin from '../hooks/UseLogin';
import pic3 from '../img/kakao_login_large_wide 1.svg';

const LoginForm = () => {
    const { email, setEmail, password, setPassword, error, handleSubmit } =
        useLogin();

    return (
        <div className='flex items-center flex-col text-center'>
            <div
                className='text-xs mt-[28px] mb-[20px]
                md:text-lg md:mt-[3rem] md:mb-[2.5rem]'
            >
                로그인 방법을 선택하세요
            </div>
            <form
                onSubmit={handleSubmit}
                className='flex items-center flex-col'
            >
                <input
                    type='email'
                    placeholder='이메일'
                    className='border border-gray-300 
                    md:mb-4 md:pl-6 md:w-80 md:h-12 md:rounded-xl'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='비밀번호'
                    className='border border-gray-300 w-[15rem] rounded-lg
                    md:mb-4 md:pl-6 md:w-80 md:h-12 md:rounded-xl'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='w-[20rem] px-[136.5px] py-3 mt-[2.5rem] mb-[2.1258rem] rounded-xl  bg-neutral-800 text-neutral-100'
                >
                    로그인
                </button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className='w-full flex items-center text-center text-gray-700 text-xs font-medium min-w-0'>
                <span className='w-[7.8125rem] border-b border-neutral-800 '></span>
                <span className='w-[22px] mx-6'>또는</span>
                <span className='w-[7.8125rem] border-b border-neutral-800'></span>
            </div>
            <img src={pic3} alt='카카오 로그인' className='my-9' />
            <Link to='/signup' className='text-neutral-700 text-lg'>
                회원가입하기
            </Link>
        </div>
    );
};

export default LoginForm;
