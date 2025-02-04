import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div>페이지를 찾을 수 없습니다.</div>
            <div>
                페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다 <br/>
                입력하신 주소가 정확한지 다시 한 번 확인해주세요
            </div>
            <Link to='/'>메인으로</Link>
        </div>
    );
};

export default NotFound;
 