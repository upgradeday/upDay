import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from './Group 223.png';
import styles from './NotFound.module.css'; // CSS Modules import

const NotFound = () => {
    return (
        <div className={styles.body}>
            <img src={pic1} alt='pic1' className={styles.pic1} />
            <div className={styles.ft40}>페이지를 찾을 수 없습니다.</div>
            <div className={styles.ft18}>
                페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다 <br />
                입력하신 주소가 정확한지 다시 한 번 확인해주세요.
            </div>
            <Link to='/main' className={styles.button}>
                메인으로
            </Link>
        </div>
    );
};

export default NotFound;
