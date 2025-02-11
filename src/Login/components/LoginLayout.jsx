import pic1 from '../img/Group 108.svg';
import pic2 from '../img/Group 72.svg';

const LoginLayout = ({ children, title }) => {
    return (
        <div className=' w-[80%] max-w-[1344px] mx-auto flex justify-center  relative '>
            <div className='absolute w-506 h-auto shrink-0 '>
                <img
                    src={pic1}
                    alt='배경 이미지'
                    className='w-full h-auto top-0 left-0 object-cover w-full h-full -z-10'
                />
            </div>
            <div className='flex items-center flex-col shrink-0 text-center w-[40.75rem] h-[48rem] rounded-3xl bg-neutral-100 z-10 relative'>
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
        </div>
    );
};

export default LoginLayout;
