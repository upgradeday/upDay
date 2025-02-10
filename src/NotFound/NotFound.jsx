import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from './Group 223.png';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-[#EDF5FC]">
            <img src={pic1} alt='Not Found' className="" />
            <div className="text-[40px] font-semibold text-blue-400 mt-[4.5rem] ">페이지를 찾을 수 없습니다.</div>
            <div className="text-neutral-800 text-lg font-normal mt-[2.5rem] ">
                페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다 <br />
                입력하신 주소가 정확한지 다시 한 번 확인해주세요.
            </div>
            <Link to='/main' className="btn-primary mt-[4.5rem] px-[40px] py-[12px] rounded-[12px] text-[24px] font-normal">
                메인으로
            </Link>
        </div>
    );
};

export default NotFound;

