import pic1 from '../img/Group 233.svg';
import pic2 from '../img/Group 72.svg';

const LoginLayout = ({ children }) => {
    return (
        <div className='flex justify-end pr-[10vw]'>
            <div className='w-506 h-auto mt-[7.12rem] mr-[6rem] shrink-0'>
                <img src={pic1} alt='배경 이미지' className='w-full h-auto' />
            </div>
            <div className='flex items-center flex-col shrink-0 text-center w-[40.75rem] mt-[3rem] rounded-3xl bg-neutral-100'>
                <div className='relative inline-block mt-[3.5rem]'>
                    <img
                        src={pic2}
                        alt='타이틀 배경'
                        className='w-full h-auto'
                    />
                    <div className='absolute top-1/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-neutral-100'>
                        로그인 / 회원가입 하기
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default LoginLayout;
