import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';

export default function PersonalInfo() {
    const handleRefresh = () => {
        window.location.reload();
    };

    const [userInfo, setUserInfo] = useState({
        nickname: '',
        name: '',
        password: '',
        confirmPassword: '',
        about: '',
        profileImage: null,
        email: '',
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserInfo({
                nickname: parsedUser.nickname || '',
                name: parsedUser.name || '',
                password: '',
                confirmPassword: '',
                about: parsedUser.about || '',
                profileImage: parsedUser.profileImage || null,
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUserInfo((prev) => ({
                    ...prev,
                    profileImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageDelete = () => {
        setUserInfo((prev) => ({ ...prev, profileImage: null }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (userInfo.password !== userInfo.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const updatedUser = {
            nickname: userInfo.nickname,
            name: userInfo.name,
            password: userInfo.password,
            about: userInfo.about,
            profileImage: userInfo.profileImage,
        };

        localStorage.setItem('users', JSON.stringify(updatedUser));
        alert('회원정보가 성공적으로 변경되었습니다.');
    };

    return (
        <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
            <form
                className='h-full flex flex-col justify-between'
                onSubmit={handleSubmit}
            >
                <div className='space-y-12'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                        <div className='col-span-full'>
                            <label htmlFor='photo' className='block text-sm'>
                                프로필 사진
                            </label>
                            <div className='mt-2 flex items-center gap-x-3'>
                                {userInfo.profileImage ? (
                                    <img
                                        src={userInfo.profileImage}
                                        alt='프로필'
                                        className='w-16 h-16 rounded-full object-cover'
                                    />
                                ) : (
                                    <BsPersonCircle
                                        aria-hidden='true'
                                        className='size-[24%] max-size-10 text-gray-300'
                                    />
                                )}

                                <input
                                    type='file'
                                    accept='image/*'
                                    onChange={handleImageUpload}
                                    className='btn btn-primary text-sm shadow-xs hidden'
                                    id='upload-photo'
                                />
                                <label
                                    htmlFor='upload-photo'
                                    className='btn btn-primary text-sm shadow-xs '
                                >
                                    사진 올리기
                                </label>
                                <button
                                    type='button'
                                    onClick={handleImageDelete}
                                    className='btn btn-secondary text-sm shadow-xs'
                                >
                                    삭제하기
                                </button>
                            </div>
                        </div>

                        <div className='col-span-full'>
                            <label htmlFor='about' className='block text-sm/6'>
                                소개글
                            </label>
                            <div className='mt-2'>
                                <textarea
                                    id='about'
                                    name='about'
                                    rows={3}
                                    value={userInfo.about}
                                    onChange={handleChange}
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 placeholder:text-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                    // defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-6'>
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='nickname'
                                className='block text-sm/6 font-medium text-gray-900'
                            >
                                닉네임
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='nickname'
                                    name='nickname'
                                    type='text'
                                    value={userInfo.nickname}
                                    onChange={handleChange}
                                    autoComplete='user-nickname'
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='name'
                                className='block text-sm/6 font-medium text-gray-900'
                            >
                                email
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    value={userInfo.name}
                                    onChange={handleChange}
                                    autoComplete='user-name'
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='password'
                                className='block text-sm/6 font-medium text-gray-900'
                            >
                                비밀번호
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    value={userInfo.password}
                                    onChange={handleChange}
                                    autoComplete='new-password'
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='confirmPassword'
                                className='block text-sm/6 font-medium text-gray-900'
                            >
                                비밀번호 확인
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type='password'
                                    value={userInfo.confirmPassword}
                                    onChange={handleChange}
                                    autoComplete='new-password-confirmation'
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500 md:text-sm/7'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-end gap-x-4'>
                    <button
                        type='button'
                        className='btn btn-secondary text-sm shadow-xs'
                    >
                        취소하기
                    </button>
                    <button
                        type='submit'
                        className='btn btn-primary px-6 text-sm shadow-xs'
                        onClick={handleRefresh}
                    >
                        저장하기
                    </button>
                </div>
            </form>
            {/* <div className='w-1/3 h-full p-[20px] bg-white rounded-lg shadow-md'>

                {userInfo.profileImage ? (
                    <img
                        src={userInfo.profileImage}
                        alt='프로필'
                        className='w-[120px] h-[120px] rounded-full mx-auto object-cover'
                    />
                ) : (
                    <BsPersonCircle
                        aria-hidden='true'
                        className='w-[120px] h-[120px] mx-auto text-gray-300'
                    />
                )}


                <h2 className='text-center mt-[10px] font-bold'>
                    {userInfo.nickname || '닉네임 없음'}
                </h2>


                <p className='text-center mt-[10px] text-gray-600'>
                    {userInfo.about || '소개글이 없습니다.'}
                </p>
            </div> */}
        </div>
    );
}
