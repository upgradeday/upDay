import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from './Group 223.png';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center '>
            <img
                src={pic1}
                alt='Not Found'
                className='w-[324px] md:w-[486px] '
            />
            <div
                className='text-blue-400 font-semibold text-2xl mt-[40px]
            md:text-[40px] md:mt-[4.5rem] '
            >
                페이지를 찾을 수 없습니다.
            </div>
            <div
                className='mt-[24px] text-neutral-800 font-normal text-sm   
            md:text-lg md:mt-[2.5rem] '
            >
                페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다 <br />
                입력하신 주소가 정확한지 다시 한 번 확인해주세요.
            </div>
            <Link
                to='/main'
                className='btn-primary rounded-[12px] px-[26px] py-[11.5px] mt-[3rem]
                md:mt-[4.5rem] md:px-[40px] md:py-[12px] md:rounded-[12px] md:text-[24px] md:font-normal '
            >
                메인으로
            </Link>
        </div>
    );
};

export default NotFound;

