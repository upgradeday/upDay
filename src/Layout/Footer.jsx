import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='flex justify-between items-center w-[80%] max-w-[1344px] h-25 mx-auto'>
                <p className='text-3xl font-bold bagel-fat-one-regular'>
                    UpDay
                </p>

                <div className='text-sm text-gray-600 text-right'>
                    <p>서울 강동구 고덕로 429 팍스에비뉴 4~5층</p>
                    <p>© 2025 My Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
