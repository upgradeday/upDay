import pic2 from '../img/Group 72.svg';
import pic3 from '../img/Group 111.svg';
import pic4 from '../img/Group 112.svg';
import pic5 from '../img/Frame 647.svg';

const LoginLayout = ({ children, title }) => {
    return (
        <div className='w-[80%] max-w-[1344px] mx-auto flex justify-center items-center relative h-screen'>
            <img
                src={pic3}
                alt='왼쪽 배경'
                className='absolute top-0 left-0 w-auto h-auto hidden md:block'
            />

            <div
                className='flex items-center flex-col shrink-0 text-center w-[48%] min-w-[30rem]  h-[46rem] rounded-3xl z-10 relative bg-transparent 
                md:bg-neutral-100 '
            >
                <div className='relative inline-block mt-[3.5rem]'>
                    <img
                        src={pic2}
                        alt='타이틀 배경'
                        className='w-full h-auto hidden md:block'
                    />
                    <img
                        src={pic5}
                        alt='타이틀 배경'
                        className='w-full h-auto block md:hidden '
                    />
                    <div
                        className='absolute text-base top-1/2 left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-neutral-100
                        md:text-2xl '
                    >
                        {title}
                    </div>
                </div>
                {children}
            </div>

            <img
                src={pic4}
                alt='오른쪽 배경'
                className='absolute top-0 right-0 w-auto h-auto hidden md:block'
            />
        </div>
    );
};

export default LoginLayout;
