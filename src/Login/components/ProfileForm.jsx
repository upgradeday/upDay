import useProfileSetup from '../hooks/UseProfileSetup';

const ProfileForm = () => {
    const {
        nickname,
        profileImage,
        error,
        setNicknameState,
        handleImageUpload,
        handleSubmit,
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
        </div>
    );
};

export default ProfileForm;
