import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <main className='w-[80%] max-w-[1344px] mx-auto bg-blue-100 min-h-screen md48rem (768px)@media (width >= 48rem) { ... }'>
            {children}

        </main>
    );
};

export default MainLayout;
