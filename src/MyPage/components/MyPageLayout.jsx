import React from 'react';
import MyProfile from './MyProfileSection';

const MyPageLayout = () => {
    return (
        <main className='w-[80%] max-w-1344px mx-auto'>
            <article className='flex flex-col'>
                <MyProfile />
            </article>
        </main>
    );
};

export default MyPageLayout;
