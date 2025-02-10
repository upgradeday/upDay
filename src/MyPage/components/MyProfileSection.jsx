import React, { useState, useEffect } from 'react';
import Pic from '../img/up-logo.png';
import { differenceInDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    // 유저 데이터 상태 관리
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [daysSinceSignup, setDaysSinceSignup] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        const usersData = localStorage.getItem('users');
        if (!loggedInUserEmail) {
            navigate('/login');
            return;
        }
        if (usersData) {
            try {
                const users = JSON.parse(usersData);
                const foundUser = users.find(
                    (user) => user.email === loggedInUserEmail
                );
                // 기존 상태와 다를 때만 업데이트
                setLoggedInUser((prevUser) => {
                    if (
                        !prevUser ||
                        JSON.stringify(prevUser) !== JSON.stringify(foundUser)
                    ) {
                        return foundUser || null;
                    }
                    return prevUser; // 상태 변경 없음
                });

                if (foundUser && foundUser.signupDate) {
                    const signupDate = new Date(foundUser.signupDate);
                    const today = new Date();
                    const days = differenceInDays(today, signupDate);
                    setDaysSinceSignup(days);
                }
            } catch (error) {
                console.error('로컬 스토리지 데이터 파싱 오류:', error);
            }
        }
    }, [navigate]);
    // 유저 정보가 없을 때 메시지 출력
    if (!loggedInUser) {
        return null;
    }

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold'>내 프로필</h1>
            <div className='card flex flex-col gap-3 p-[36px]'>
                <div className='flex flex-row items-center'>
                    <div className='inline-block w-[35%] max-w-[200px] aspect-square mr-[10%]'>
                        {loggedInUser.profileImage ? (
                            <img
                                alt='프로필 이미지'
                                src={loggedInUser.profileImage}
                                className='w-full max-w-[200px] h-full object-cover rounded-full ring-2 ring-neutral-300 overflow-hidden'
                            />
                        ) : (
                            <img
                                alt='기본 프로필 이미지'
                                src={Pic}
                                className='w-full h-full object-cover rounded-full ring-2 ring-neutral-300 overflow-hidden' //w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500
                            />
                        )}
                    </div>
                    <div className='flex flex-col h-[200px] justify-evenly'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-semibold'>
                                {loggedInUser.nickname || '닉네임 없음'}
                            </p>
                            <p className='text-sm font-normal text-neutral-500'>
                                {loggedInUser.email || '이메일 없음'}
                            </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-semibold'>
                                <span className='text-blue-500'>
                                    {daysSinceSignup}
                                </span>
                                일 째 업데이 중
                            </p>
                            <p className='text-sm font-normal text-neutral-500'>
                                {loggedInUser.signupDate || '가입일 정보 없음'}
                            </p>
                        </div>
                    </div>
                </div>
                <p className='text-sm h-[100px]'>
                    {loggedInUser.about ||
                        '아직 소개글을 작성하지 않았습니다. 프로필을 업데이트해보세요!'}
                </p>
            </div>
        </div>
    );
};
export default MyProfile;

// import React, { useState, useEffect } from 'react';
// import Pic from '../img/up-logo.png';
// import { differenceInDays } from 'date-fns';
// import { useNavigate } from 'react-router-dom';

// const MyProfile = () => {
//     // 유저 데이터 상태 관리
//     const [loggedInUser, setLoggedInUser] = useState(null);
//     const [daysSinceSignup, setDaysSinceSignup] = useState(0);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const loggedInUserEmail = localStorage.getItem('loggedInUser');
//         const usersData = localStorage.getItem('users');
//         if (!loggedInUserEmail) {
//             navigate('/login');
//             return;
//         }
//         if (usersData) {
//             try {
//                 const users = JSON.parse(usersData);
//                 const foundUser = users.find(
//                     (user) => user.email === loggedInUserEmail
//                 );
//                 // 기존 상태와 다를 때만 업데이트
//                 setLoggedInUser((prevUser) => {
//                     if (
//                         !prevUser ||
//                         JSON.stringify(prevUser) !== JSON.stringify(foundUser)
//                     ) {
//                         return foundUser || null;
//                     }
//                     return prevUser; // 상태 변경 없음
//                 });

//                 if (foundUser && foundUser.signupDate) {
//                     const signupDate = new Date(foundUser.signupDate);
//                     const today = new Date();
//                     const days = differenceInDays(today, signupDate);
//                     setDaysSinceSignup(days);
//                 }
//             } catch (error) {
//                 console.error('로컬 스토리지 데이터 파싱 오류:', error);
//             }
//         }
//     }, [navigate]);
//     // 유저 정보가 없을 때 메시지 출력
//     if (!loggedInUser) {
//         return null;
//     }

//     return (
//         <div className='flex flex-col gap-2'>
//             <h1 className='text-2xl font-semibold'>내 프로필</h1>
//             <div className='card flex flex-col gap-3 p-[36px]'>
//                 <div className='flex flex-row items-center'>
//                     <div className='inline-block w-[35%] max-w-[200px] aspect-square mr-[10%]'>
//                         {loggedInUser.profileImage ? (
//                             <img
//                                 alt='프로필 이미지'
//                                 src={loggedInUser.profileImage}
//                                 className='w-full h-full object-cover rounded-full ring-2 ring-neutral-300 overflow-hidden'
//                             />
//                         ) : (
//                             <img
//                                 alt='기본 프로필 이미지'
//                                 src={Pic}
//                                 className='w-full h-full object-cover rounded-full ring-2 ring-neutral-300 overflow-hidden'
//                             />
//                         )}
//                     </div>
//                     <div className='flex flex-col h-[200px] justify-evenly'>
//                         <div className='flex flex-col gap-2'>
//                             <p className='text-2xl font-semibold'>
//                                 {loggedInUser.nickname || '닉네임 없음'}
//                             </p>
//                             <p className='text-sm font-normal text-neutral-500'>
//                                 {loggedInUser.email || '이메일 없음'}
//                             </p>
//                         </div>
//                         <div className='flex flex-col gap-2'>
//                             <p className='text-sm font-semibold'>
//                                 <span className='text-blue-500'>
//                                     {daysSinceSignup}
//                                 </span>
//                                 일 째 업데이 중
//                             </p>
//                             <p className='text-sm font-normal text-neutral-500'>
//                                 {loggedInUser.signupDate || '가입일 정보 없음'}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <p className='text-sm h-[100px]'>
//                     {loggedInUser.about ||
//                         '아직 소개글을 작성하지 않았습니다. 프로필을 업데이트해보세요!'}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default MyProfile;
