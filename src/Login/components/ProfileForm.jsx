import useProfileSetup from '../hooks/UseProfileSetup';
import pic1 from '../img/Group 122.svg';

const ProfileForm = () => {
    const {
        nickname,
        profileImage,
        error,
        isModalOpen,
        setNicknameState,
        handleImageUpload,
        handleSubmit,
        closeModal,
    } = useProfileSetup();

    return (
        <div className='flex items-center flex-col text-center'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-start gap-1 mb-3'
            >
                <label
                    htmlFor='file-upload'
                    className='block w-[20rem] h-[20rem] mt-[3rem] bg-neutral-300 rounded-lg flex items-center justify-center cursor-pointer'
                >
                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt='프로필 미리보기'
                            className='w-[20rem] h-[20rem] object-cover rounded-lg'
                        />
                    ) : (
                        <span className='text-neutral-500'>이미지 업로드</span>
                    )}
                </label>
                <input
                    id='file-upload'
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    className='hidden'
                />
                <input
                    type='text'
                    placeholder='닉네임'
                    value={nickname}
                    onChange={(e) => setNicknameState(e.target.value)}
                    className='border border-gray-300 mb-4 pl-6 w-80 h-12 mt-[2rem] rounded-xl'
                />
                {error && <div className='text-red-400'>{error}</div>}
                <button
                    type='submit'
                    className='w-[20rem] py-3 mt-[2rem] mb-[2.1258rem] rounded-xl  bg-neutral-800 text-neutral-100'
                >
                    설정 완료
                </button>
            </form>
            {isModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-50 backdrop-blur-sm'>
                    {/* 배경 이미지 */}
                    <div className='relative w-[615px] h-[640px] flex items-center justify-center'>
                        <img
                            src={pic1}
                            alt='회원가입 완료'
                            className='absolute inset-0 w-full h-full object-cover'
                        />

                        {/* 텍스트와 버튼 */}
                        <div className='absolute top-[12%] left-1/2 transform -translate-x-1/2 text-center text-black'>
                            <div className='text-3xl font-bold mb-4 whitespace-nowrap '>
                                회원 가입이 완료되었습니다 !
                            </div>
                            <div className='text-lg leading-relaxed mt-[3rem] leading-[2.2]'>
                                이제 업데이와 함께 챌린지 도전해보세요! <br />
                                원하던 목표를 이룰 수 있게 도와드려요 ❤ <br />
                                ヽ(✿ﾟ▽ﾟ)ノ️
                            </div>
                            <button
                                onClick={closeModal}
                                className='mt-[2rem] bg-blue-300 text-white px-6 py-2 rounded-xl '
                            >
                                로그인 하러가기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileForm;
