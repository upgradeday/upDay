import React from 'react';

// import MyPage from '../MyPage/components/MyProfileSection';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';



const Header = () => {

    const [loggedInUser, setLoggedInUser] = useState(
        localStorage.getItem('loggedInUser')
    );
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setLoggedInUser(localStorage.getItem('loggedInUser'));
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, [loggedInUser]); 

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
        navigate('/');
    };

    return (
        <header className='flex justify-between items-center w-[80%] max-w-[1344px] mx-auto h-20 mb-10 mt-3'>
            <Link to='main' className='h-10 bagel-fat-one-regular text-3xl'>
                UpDay
            </Link>
            <nav>
                <ul className='flex space-x-20'>
                    <li>
                        {/* <a href='/mypage' className='hover:underline cursor-pointer'>
                            챌린지 둘러보기
                        </a> */}
                        <Link to='/challengelist' className='hover:underline'>
                            챌린지 둘러보기
                        </Link>
                    </li>
                    <li>
                        {/* <a href='/about' className='hover:underline'>
                            마이페이지
                        </a> */}
                        <Link to='/mypage' className='hover:underline'>
                            마이페이지
                        </Link>
                    </li>
                    <li>
                        {/* <a href='/contact' className='hover:underline'>
                            로그인
                        </a> */}
                        {loggedInUser ? (
                            <button onClick={handleLogout}>로그아웃</button>
                        ) : (
                            <Link to='/login' className='hover:underline'>
                                로그인
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
