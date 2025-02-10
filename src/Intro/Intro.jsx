import React, { useEffect, useRef } from 'react';
import Charac from './img/character-bulb.svg';
import Arrow from './img/arrow-text.svg';
import Bg from './img/bg-element.svg';

const Intro = () => {
    const h1Ref = useRef(null);
    const pRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // h1 태그 애니메이션 추가
                        if (h1Ref.current) {
                            h1Ref.current.classList.add('animate-fadeInUp');
                        }
                        // p 태그 애니메이션 추가
                        if (pRef.current) {
                            pRef.current.classList.add('animate-fadeInUp');
                        }
                    }
                });
            },
            { threshold: 0.2 } // 요소가 20% 보이면 트리거
        );

        if (h1Ref.current) observer.observe(h1Ref.current);
        if (pRef.current) observer.observe(pRef);

        const sections = document.querySelectorAll('.section');

        if (sections.length === 0) {
            console.error('No section found with the class .section');
            return;
        }
        let currentSection = 0;
        const handleScroll = (event) => {
            event.preventDefault();

            if (event.deltaY > 0) {
                currentSection = Math.min(
                    currentSection + 1,
                    sections.length - 1
                );
            } else {
                currentSection = Math.max(currentSection - 1, 0);
            }
            if (sections[currentSection]) {
                sections[currentSection].scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='section flex flex-col items-center justify-center min-h-screen'>
                {/* section flex w-[80%] max-w-[1344px] mx-auto h-[800px] justify-between items-center h-fit mb-20 relative */}
                <div className='flex w-[80%] max-w-[1344px] mx-auto justify-between items-center'>
                    {/* flex flex-col items-center justify-between relative */}
                    <div className='flex flex-col items-start'>
                        {/* relative bottom-[100px] */}
                        <h1 className='text-5xl font-bold text-gray-800 leading-snug mb-4'>
                            좋은 습관, <br />
                            매일 매일 실천하고 싶으신가요?
                        </h1>
                        <p className='text-3xl text-gray-600 mt-4 mb-8'>
                            작심삼일은 이제 그만! <br />
                            <span className='text-4xl text-blue-600 font-bold'>
                                Up Day
                            </span>
                            와 함께 도전하고 성장하세요.
                        </p>
                        <button className='bg-blue-500 text-white font-bold w-80 h-14 mt-10 rounded-lg shadow-lg hover:bg-blue-600 transition'>
                            성장하기
                        </button>
                    </div>

                    <div className='w-40% flex justify-center'>
                        {/* relative flex-shrink-0 w-[30%] h-full */}
                        <img
                            src={Charac}
                            alt='Character'
                            className='w-auto h-[505px]'
                            // relative top-[300px] h-[505px] w-[400px]
                        />
                    </div>
                </div>

                <div className='animate-bounce flex items-center justify-center mt-20'>
                    <div className='row-span-2 flex flex-col items-center'>
                        <p className='text-gray-600 text-sm'>성장하러 가기</p>
                        <img src={Arrow} alt='Arrow' className='mt-4' />
                    </div>
                </div>
            </div>

            <div className='relative w-[80%] max-w-[1344px] mx-auto h-[900px] section'>
                <img
                    src={Bg}
                    alt='Background'
                    className='absolute inset-0 w-full h-full  object-contain'
                />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold text-center leading-[2] animate-fadeInUp delay-300'>
                        Up Day는 같은 목표를 가진 사람들이 <br />
                        함께 도전하고 성장하는 챌린지 커뮤니티입니다!
                    </h1>
                    <br />
                    <p className='text-3xl text-center mt-4 leading-[2] animate-fadeInUp delay-500'>
                        좋은 습관을 만들고 싶지만, 혼자서는 쉽게 포기하고 재미도
                        없었다면? <br /> 이제는 함께 도전하며 목표를 이루는
                        즐거움을 겸험해보세요!!
                    </p>
                </div>
            </div>
            <div>
                <p>👥 같은 목표를 가진 사람들과 응원하며 성장</p>
                <p>🎯 매일 작은 실천으로 꾸준한 습관 형성</p>
                <p>🔥 혼자가 아닌 함께, 더 즐겁고 쉽게 목표 완수!</p>
                <p>
                    좋은 습관으로 매일 더 나은 나를 만들어보세요! <br />
                    오늘부터 Up Day와 함께 도전해볼까요? 💪😊
                </p>
            </div>
        </div>
    );
};

export default Intro;

// import React, { useEffect, useRef } from 'react';
// import Charac from './img/character-bulb.svg';
// import Arrow from './img/arrow-text.svg';
// import Bg from './img/bg-element.svg';

// const Intro = () => {
//     const h1Ref = useRef(null);
//     const pRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // h1 태그 애니메이션 추가
//                         if (h1Ref.current) {
//                             h1Ref.current.classList.add('animate-fadeInUp');
//                         }
//                         // p 태그 애니메이션 추가
//                         if (pRef.current) {
//                             pRef.current.classList.add('animate-fadeInUp');
//                         }
//                     }
//                 });
//             },
//             { threshold: 0.2 } // 요소가 20% 보이면 트리거
//         );

//         if (h1Ref.current) observer.observe(h1Ref.current);
//         if (pRef.current) observer.observe(pRef.current);

//         return () => {
//             if (h1Ref.current) observer.unobserve(h1Ref.current);
//             if (pRef.current) observer.unobserve(pRef.current);
//         };
//     }, []);

//     return (
//         <div>
//             {/* 첫 번째 섹션 */}
//             <div className="section flex flex-col items-center justify-center min-h-screen">
//                 <div className="flex w-[80%] max-w-[1344px] mx-auto justify-between items-center">
//                     <div className="flex flex-col items-start">
//                         <h1 className="text-5xl font-bold text-gray-800 leading-snug mb-4">
//                             좋은 습관, <br />
//                             매일 매일 실천하고 싶으신가요?
//                         </h1>
//                         <p className="text-3xl text-gray-600 mt-4 mb-8">
//                             작심삼일은 이제 그만! <br />
//                             <span className="text-4xl text-blue-600 font-bold">
//                                 Up Day
//                             </span>
//                             와 함께 도전하고 성장하세요.
//                         </p>
//                         <button className="bg-blue-500 text-white font-bold w-80 h-14 mt-10 rounded-lg shadow-lg hover:bg-blue-600 transition">
//                             성장하기
//                         </button>
//                     </div>

//                     <div className="w-[40%] flex justify-center">
//                         <img src={Charac} alt="Character" className="w-auto h-[505px]" />
//                     </div>
//                 </div>

//                 <div className="animate-bounce flex items-center justify-center mt-20">
//                     <div className="row-span-2 flex flex-col items-center">
//                         <p className="text-gray-600 text-sm">성장하러 가기</p>
//                         <img src={Arrow} alt="Arrow" className="mt-4" />
//                     </div>
//                 </div>
//             </div>

//             {/* 두 번째 섹션 */}
//             <div className="relative w-[80%] max-w-[1344px] mx-auto h-[900px] section">
//                 <img
//                     src={Bg}
//                     alt="Background"
//                     className="absolute inset-0 w-full h-full object-contain"
//                 />
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                     {/* 애니메이션 대상 요소 */}
//                     <h1
//                         ref={h1Ref}
//                         className="text-4xl font-bold text-center leading-[2] opacity-0 transform translate-y-10 transition-all duration-700"
//                     >
//                         Up Day는 같은 목표를 가진 사람들이 <br />
//                         함께 도전하고 성장하는 챌린지 커뮤니티입니다!
//                     </h1>
//                     <p
//                         ref={pRef}
//                         className="text-3xl text-center mt-4 leading-[2] opacity-0 transform translate-y-10 transition-all duration-700"
//                     >
//                         좋은 습관을 만들고 싶지만, 혼자서는 쉽게 포기하고 재미도 없었다면? <br />
//                         이제는 함께 도전하며 목표를 이루는 즐거움을 겸험해보세요!!
//                     </p>
//                 </div>
//             </div>

//             {/* 세 번째 섹션 */}
//             <div>
//                 <p>👥 같은 목표를 가진 사람들과 응원하며 성장</p>
//                 <p>🎯 매일 작은 실천으로 꾸준한 습관 형성</p>
//                 <p>🔥 혼자가 아닌 함께, 더 즐겁고 쉽게 목표 완수!</p>
//                 <p>
//                     좋은 습관으로 매일 더 나은 나를 만들어보세요! <br />
//                     오늘부터 Up Day와 함께 도전해볼까요? 💪😊
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Intro;
