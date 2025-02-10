// import React, { useState, useEffect } from 'react';
// import { BsPersonCircle } from 'react-icons/bs';
// import { differenceInDays, format } from 'date-fns';

// // 비밀번호 유효성 검사 함수
// const validatePassword = (password) => {
//     if (password.length < 8) {
//         return '비밀번호는 8자 이상이어야 합니다.';
//     }
//     if (!/[a-z]/.test(password)) {
//         return '비밀번호에는 소문자가 하나 이상 포함되어야 합니다.';
//     }
//     if (!/[0-9]/.test(password)) {
//         return '비밀번호에는 숫자가 하나 이상 포함되어야 합니다.';
//     }
//     if (!/[!@#$%^&*]/.test(password)) {
//         return '비밀번호에는 특수 문자가 하나 이상 포함되어야 합니다.';
//     }
//     return null;
// };

// export default function PersonalInfo() {
//     const handleRefresh = () => {
//         window.location.reload();
//     };

//     const loggedInUserEmail = localStorage.getItem('loggedInUser');
//     const users = JSON.parse(localStorage.getItem('users')) || []; // JSON 변환
//     const loggedInUser = users.find((user) => user.email === loggedInUserEmail);

//     const [userInfo, setUserInfo] = useState({
//         email: '',
//         password: '',
//         nickname: '',
//         confirmPassword: '',
//         about: '',
//         profileImage: null,
//         signupDate: '',
//     });

//     // 새로운 상태 변수
//     const [passwordError, setPasswordError] = useState('');
//     const [daySinceSignup, setDaysSinceSignup] = useState(0);

//     useEffect(() => {
//         if (loggedInUser) {
//             setUserInfo((prev) => {
//                 const updatedInfo = {
//                     ...prev,
//                     email: loggedInUser.email || '',
//                     password: '',
//                     nickname: loggedInUser.nickname || '',
//                     signupDate: loggedInUser.signupDate || '',
//                     profileImage: loggedInUser.profileImage || null,
//                     about: loggedInUser.about || '',
//                 };
//                 // 변경 사항이 없으면 상태 업데이트 방지
//                 if (JSON.stringify(prev) === JSON.stringify(updatedInfo)) {
//                     return prev;
//                 }
//                 return updatedInfo;
//             });

//             if (loggedInUser.signupDate) {
//                 const signupDate = new Date(loggedInUser.signupDate);
//                 const today = new Date();
//                 const days = differenceInDays(today, signupDate);
//                 setDaysSinceSignup(days);
//             }
//         }
//     }, []); // 빈 배열로 설정하여 최초 마운트 시에만 실행

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserInfo((prev) => ({ ...prev, [name]: value }));

//         // 비밀번호 유효성 검사
//         if (name === 'password') {
//             const error = validatePassword(value);
//             setPasswordError(error || '');
//         }

//         if (name === 'confirmPassword') {
//             if (value !== userInfo.password) {
//                 setPasswordError('비밀번호가 일치하지 않습니다.');
//             } else {
//                 setPasswordError('');
//             }
//         }
//     };

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setUserInfo((prev) => ({
//                     ...prev,
//                     profileImage: reader.result,
//                 }));
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleImageDelete = () => {
//         setUserInfo((prev) => ({ ...prev, profileImage: null }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (passwordError) {
//             alert(passwordError);
//             return;
//         }

//         if (userInfo.password !== userInfo.confirmPassword) {
//             alert('비밀번호가 일치하지 않습니다.');
//             return;
//         }

//         const updatedUser = {
//             email: userInfo.email,
//             password: userInfo.password || loggedInUser.password, // 기존 비밀번호 유지
//             nickname: userInfo.nickname,
//             signupDate: userInfo.signupDate,
//             about: userInfo.about,
//             profileImage: userInfo.profileImage,
//         };
//         const updatedUsers = users.map((user) =>
//             user.email === userInfo.email ? updatedUser : user
//         );
//         localStorage.setItem('users', JSON.stringify(updatedUsers));

//         alert('회원정보가 성공적으로 변경되었습니다.');
//         handleRefresh();
//     };

//     if (!loggedInUser) {
//         return (
//             <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
//                 <p className='text-center text-gray-500'>
//                     로그인한 유저 정보를 찾을 수 없습니다.
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
//             <form
//                 className='h-full flex flex-col justify-between'
//                 onSubmit={handleSubmit}
//             >
//                 <div className='space-y-12'>
//                     <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
//                         <div className='col-span-full'>
//                             <label htmlFor='photo' className='block text-sm'>
//                                 프로필 사진
//                             </label>
//                             <div className='mt-2 flex items-center gap-x-3'>
//                                 {userInfo.profileImage ? (
//                                     <img
//                                         src={userInfo.profileImage}
//                                         alt='프로필'
//                                         className='w-16 h-16 rounded-full object-cover'
//                                     />
//                                 ) : (
//                                     <BsPersonCircle
//                                         aria-hidden='true'
//                                         className='size-[24%] max-size-10 text-gray-300'
//                                     />
//                                 )}

//                                 <input
//                                     type='file'
//                                     accept='image/*'
//                                     onChange={handleImageUpload}
//                                     className='hidden'
//                                     id='upload-photo'
//                                 />
//                                 <label
//                                     htmlFor='upload-photo'
//                                     className='btn btn-primary text-sm'
//                                 >
//                                     사진 올리기
//                                 </label>
//                                 <button
//                                     type='button'
//                                     onClick={handleImageDelete}
//                                     className='btn btn-secondary text-sm'
//                                 >
//                                     삭제하기
//                                 </button>
//                             </div>
//                         </div>

//                         <div className='col-span-full'>
//                             <label htmlFor='about' className='block text-sm/6'>
//                                 소개글
//                             </label>
//                             <div className='mt-2'>
//                                 <textarea
//                                     id='about'
//                                     name='about'
//                                     rows={3}
//                                     value={userInfo.about}
//                                     onChange={handleChange}
//                                     className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <div className='grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-6'>
//                         <div className='sm:col-span-3'>
//                             <label
//                                 htmlFor='nickname'
//                                 className='block text-sm/6 font-medium'
//                             >
//                                 닉네임
//                             </label>
//                             <div className='mt-2'>
//                                 <input
//                                     id='nickname'
//                                     name='nickname'
//                                     type='text'
//                                     value={userInfo.nickname}
//                                     onChange={handleChange}
//                                     className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
//                                 />
//                             </div>
//                         </div>

//                         <div className='sm:col-span-3'>
//                             <label
//                                 htmlFor='email'
//                                 className='block text-sm/6 font-medium'
//                             >
//                                 email
//                             </label>
//                             <div className='mt-2'>
//                                 <input
//                                     id='email'
//                                     name='email'
//                                     type='text'
//                                     value={userInfo.email}
//                                     onChange={handleChange}
//                                     className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-neutral-500 border border-neutral-300 focus:outline-blue-500'
//                                     readOnly
//                                 />
//                             </div>
//                         </div>
//                         <div className='sm:col-span-3'>
//                             <label
//                                 htmlFor='password'
//                                 className='block text-sm/6 font-medium'
//                             >
//                                 변경할 비밀번호
//                             </label>
//                             <div className='mt-2'>
//                                 <input
//                                     id='password'
//                                     name='password'
//                                     type='password'
//                                     value={userInfo.password}
//                                     onChange={handleChange}
//                                     className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
//                                 />
//                                 {passwordError && (
//                                     <p className='text-red-500 text-sm'>
//                                         {passwordError}
//                                     </p>
//                                 )}
//                             </div>
//                         </div>
//                         <div className='sm:col-span-3'>
//                             <label
//                                 htmlFor='confirmPassword'
//                                 className='block text-sm/6 font-medium'
//                             >
//                                 변경할 비밀번호 확인
//                             </label>
//                             <div className='mt-2'>
//                                 <input
//                                     id='confirmPassword'
//                                     name='confirmPassword'
//                                     type='password'
//                                     value={userInfo.confirmPassword}
//                                     onChange={handleChange}
//                                     className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='flex items-center justify-end gap-x-4'>
//                     <button type='button' className='btn btn-secondary text-sm'>
//                         취소하기
//                     </button>
//                     <button
//                         type='submit'
//                         className='btn btn-primary px-6 text-sm'
//                     >
//                         저장하기
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

/* <button type='button' className='btn btn-secondary text-sm'>
                        취소하기
                    </button>
                    <button
                        type='submit'
                        className='btn btn-primary px-6 text-sm'
                    >
                        저장하기
                    </button> */

// 마이페이지 들어가면 모든게 다 디스에이블 돼어있고 아래 수정 버튼을 넣어주고 수정하기를 누르면 지금 나오는 변경화면이 나와서 정보를 바꾸는 창으로 변하는걸로 만들기

import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { differenceInDays, format } from 'date-fns';

// 비밀번호 유효성 검사 함수
const validatePassword = (password) => {
    if (password.length < 8) {
        return '비밀번호는 8자 이상이어야 합니다.';
    }
    if (!/[a-z]/.test(password)) {
        return '비밀번호에는 소문자가 하나 이상 포함되어야 합니다.';
    }
    if (!/[0-9]/.test(password)) {
        return '비밀번호에는 숫자가 하나 이상 포함되어야 합니다.';
    }
    if (!/[!@#$%^&*]/.test(password)) {
        return '비밀번호에는 특수 문자가 하나 이상 포함되어야 합니다.';
    }
    return null;
};

const validateNickname = (nickname) => {
    if (nickname.length > 6) {
        return '닉네임은 6글자 이내여야 합니다.';
    }
    return null;
};

export default function PersonalInfo() {
    const handleRefresh = () => {
        window.location.reload();
    };

    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    const [users, setUsers] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('users')) || [];
        } catch (error) {
            return [];
        }
    });
    const loggedInUser = users.find((user) => user.email === loggedInUserEmail);

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        nickname: '',
        confirmPassword: '',
        about: '',
        profileImage: null,
        signupDate: '',
    });

    // 새로운 상태 변수
    const [passwordError, setPasswordError] = useState('');
    const [daySinceSignup, setDaysSinceSignup] = useState(0);
    const [nicknameError, setNicknameError] = useState('');
    const [editMode, setEditMode] = useState(false); // 수정 모드 상태 추가

    useEffect(() => {
        if (loggedInUser) {
            setUserInfo((prev) => {
                const updatedInfo = {
                    ...prev,
                    email: loggedInUser.email || '',
                    password: '',
                    nickname: loggedInUser.nickname || '',
                    signupDate: loggedInUser.signupDate || '',
                    profileImage: loggedInUser.profileImage || null,
                    about: loggedInUser.about || '',
                };
                // 변경 사항이 없으면 상태 업데이트 방지
                if (JSON.stringify(prev) === JSON.stringify(updatedInfo)) {
                    return prev;
                }
                return updatedInfo;
            });

            if (loggedInUser.signupDate) {
                const signupDate = new Date(loggedInUser.signupDate);
                const today = new Date();
                const days = differenceInDays(today, signupDate);
                setDaysSinceSignup(days);
            }
        }
    }, [loggedInUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));

        if (name === 'nickname') {
            const error = validateNickname(value);
            setNicknameError(error || '');
        }

        // 비밀번호 유효성 검사
        if (name === 'password') {
            const error = validatePassword(value);
            setPasswordError(error || '');
        }

        if (name === 'confirmPassword') {
            if (value !== userInfo.password) {
                setPasswordError('비밀번호가 일치하지 않습니다.');
            } else {
                setPasswordError('');
            }
        }
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

        let error = validateNickname(userInfo.nickname);
        if (error) {
            setNicknameError(error);
            return;
        }

        const isNicknameTaken = users.some(
            (user) =>
                user.nickname === userInfo.nickname &&
                user.email !== loggedInUserEmail
        );
        if (isNicknameTaken) {
            setNicknameError('이 닉네임은 이미 사용 중입니다.');
            return;
        }

        if (passwordError) {
            alert(passwordError);
            return;
        }

        if (userInfo.password !== userInfo.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const updatedUser = {
            email: userInfo.email,
            password: userInfo.password || loggedInUser.password, // 기존 비밀번호 유지
            nickname: userInfo.nickname,
            signupDate: userInfo.signupDate,
            about: userInfo.about,
            profileImage: userInfo.profileImage,
        };
        const updatedUsers = users.map((user) =>
            user.email === userInfo.email ? updatedUser : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);

        handleRefresh();
        setEditMode(false); // 수정 완료 후 수정 모드 비활성화
    };

    if (!loggedInUser) {
        return (
            <div className='w-full h-[756px] rounded-r-3xl rounded-bl-3xl bg-neutral-100 p-[36px]'>
                <p className='text-center text-gray-500'>
                    로그인한 유저 정보를 찾을 수 없습니다.
                </p>
            </div>
        );
    }

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
                                    className='hidden'
                                    id='upload-photo'
                                    disabled={!editMode} // 수정 모드에 따라 활성화/비활성화
                                />
                                <label
                                    htmlFor='upload-photo'
                                    className='btn text-sm'
                                    style={{
                                        backgroundColor: editMode
                                            ? 'blue'
                                            : 'gray',
                                        color: 'white',
                                    }}
                                >
                                    사진 올리기
                                </label>
                                <button
                                    type='button'
                                    onClick={handleImageDelete}
                                    className='btn btn-secondary text-sm'
                                    disabled={!editMode} // 수정 모드에 따라 활성화/비활성화
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
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
                                    disabled={!editMode} // 수정 모드에 따라 활성화/비활성화
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-6'>
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='nickname'
                                className='block text-sm/6 font-medium'
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
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
                                    disabled={!editMode} // 수정 모드에 따라 활성화/비활성화
                                />
                                {nicknameError && (
                                    <p className='text-red-500 text-sm'>
                                        {nicknameError}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='email'
                                className='block text-sm/6 font-medium'
                            >
                                email
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    name='email'
                                    type='text'
                                    value={userInfo.email}
                                    onChange={handleChange}
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-neutral-500 border border-neutral-300 focus:outline-blue-500'
                                    readOnly
                                    disabled // 이메일은 항상 비활성화
                                />
                            </div>
                        </div>
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='password'
                                className='block text-sm/6 font-medium'
                            >
                                변경할 비밀번호
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    value={userInfo.password}
                                    onChange={handleChange}
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
                                    disabled={!editMode} // 수정 모드에 따라 활성화/비활성화
                                />
                                {passwordError && (
                                    <p className='text-red-500 text-sm'>
                                        {passwordError}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='confirmPassword'
                                className='block text-sm/6 font-medium'
                            >
                                변경할 비밀번호 확인
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type='password'
                                    value={userInfo.confirmPassword}
                                    onChange={handleChange}
                                    className='block w-full rounded-xl bg-neutral-100 px-3 py-1.5 text-base border border-neutral-300 focus:outline-blue-500'
                                    disabled={!editMode} // 수정 모드에 따라 활성화/비활성화
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-end gap-x-4'>
                    {!editMode && (
                        <button
                            type='button'
                            className='btn btn-primary px-6 text-sm'
                            onClick={() => setEditMode(true)}
                        >
                            수정하기
                        </button>
                    )}
                    {editMode && (
                        <>
                            <button
                                type='button'
                                className='btn btn-secondary text-sm'
                                onClick={() => {
                                    setEditMode(false);
                                    handleRefresh();
                                }}
                            >
                                취소하기
                            </button>
                            <button
                                type='submit'
                                className='btn btn-primary px-6 text-sm'
                            >
                                저장하기
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}
