import pic1 from '../img/Group 108.svg';
import pic2 from '../img/Group 72.svg';
import pic3 from '../img/Group 111.svg';
import pic4 from '../img/Group 112.svg';

const LoginLayout = ({ children, title }) => {
    return (
        <div className='w-[80%] max-w-[1344px] mx-auto flex justify-center items-center relative h-screen'>
            {/* 배경 이미지 - 왼쪽 */}
            <img
                src={pic3}
                alt='왼쪽 배경'
                className='absolute top-0 left-0 w-auto h-auto'
            />

            {/* 로그인 카드 */}
            <div className='flex items-center flex-col shrink-0 text-center w-[48%] min-w-[30rem]  h-[46rem] rounded-3xl bg-neutral-100 z-10 relative '>
                <div className='relative inline-block mt-[3.5rem]'>
                    <img
                        src={pic2}
                        alt='타이틀 배경'
                        className='w-full h-auto'
                    />
                    <div className='absolute top-1/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-neutral-100'>
                        {title}
                    </div>
                </div>
                {children}
            </div>

            {/* 배경 이미지 - 오른쪽 */}
            <img
                src={pic4}
                alt='오른쪽 배경'
                className='absolute top-0 right-0 w-auto h-auto'
            />
        </div>
    );
};

export default LoginLayout;
