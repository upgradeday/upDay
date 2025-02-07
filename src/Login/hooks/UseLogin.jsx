import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/features/UserSlice';
import { userData } from '../../data/userData';

const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(userData));
        }
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        const existingUser = storedUsers.find(
            (user) => user.email === email && user.password === password
        );


        if (existingUser) {
            setError('');
            localStorage.setItem('loggedInUser', existingUser.email); 
            dispatch(setUser(existingUser));
            navigate('/main');
        } else {
            setError('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleSubmit,
    };
};

export default useLogin;