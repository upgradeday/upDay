import { Helmet } from 'react-helmet';
import useProfileSetup from './hooks/UseProfileSetup';

const ProfileSetup = () => {
    const {
        nickname,
        profileImage,
        error,
        setNicknameState,
        handleImageUpload,
        handleSubmit,
    } = useProfileSetup();

    return (
        <>
            <Helmet>
                <title>프로필 설정 - upDay</title>
            </Helmet>
            <div>
                <h2>프로필 설정하기</h2>
                <form onSubmit={handleSubmit} className='mt-6'>
          
                    <label
                        htmlFor='file-upload'
                        className='block w-[20rem] h-[20rem] bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer'
                    >
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt='프로필 미리보기'
                                className='w-[20rem] h-[20rem] object-cover rounded-lg'
                            />
                        ) : (
                            <span className='text-gray-500'>이미지 업로드</span>
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
                    />
                    <button type='submit'>설정 완료</button>
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </>
    );
};

export default ProfileSetup;
