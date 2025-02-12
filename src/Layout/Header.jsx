import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';



const Header = () => {

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const [loggedInUser, setLoggedInUser] = useState(
        localStorage.getItem('loggedInUser')
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setLoggedInUser(localStorage.getItem('loggedInUser'));
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

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
            
           <div className='md:hidden flex flex-col cursor-pointer'>
            <div className='w-6 h-1 bg-black mb-1'></div>
            <div className='w-6 h-1 bg-black mb-1'></div>
            <div className='w-6 h-1 bg-black'></div>
           </div>
            <nav
            className={`${
                isMenuOpen ? 'block' : 'hidden'}
                absolute top-full w-full bg-blue-100 md:static md:block md:w-auto`}> 
                <ul className='flex space-x-20 md:flex-row md:space-x-20'>
                    <li>
                        <Link to='/challengelist' className='hover:underline block py-2 md:py-0'>
                            챌린지 둘러보기
                        </Link>
                    </li>
                    <li>
                        <Link to='/mypage' className='hover:underline block py-2 md:py-0'>
                            마이페이지
                        </Link>
                    </li>
                    <li>
                        {loggedInUser ? (
                            <button onClick={handleLogout} className='block py-2 md:py-0'>로그아웃</button>
                        ) : (
                            <Link to='/login' className='hover:underline block py-2 md:py-0'>
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