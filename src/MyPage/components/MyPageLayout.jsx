import React from 'react';
import { Helmet } from 'react-helmet';
import MyProfile from './MyProfileSection';
import MyReport from './MyReportSection';
import TabSwitcher from './TabSwitcher.js';

const MyPageLayout = () => {
    return (
        <main className='w-[80%] max-w-[1344px] mx-auto flex flex-row justify-between'>
            <Helmet>
                <title>마이페이지 | </title>
            </Helmet>
            <section className='flex flex-col w-[48%] gap-6'>
                <MyProfile />
                <MyReport />
            </section>

            <TabSwitcher />
        </main>
    );
};

export default MyPageLayout;
<Helmet>
    <title>로그인 | upDay와 함께 새로운 하루</title>
</Helmet>;
