import React from 'react';
import MyProfile from './MyProfileSection';
import MyReport from './MyReportSection';
import Management from './ManagementSection';

const MyPageLayout = () => {
    return (
        <main className='w-[80%] max-w-[1344px] mx-auto flex flex-row justify-between'>
            <section className='flex flex-col w-[48%] gap-6'>
                <MyProfile />
                <MyReport />
            </section>
            <Management />
        </main>
    );
};

export default MyPageLayout;
