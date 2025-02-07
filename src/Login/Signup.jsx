import useSignup from './hooks/UseSignup'

const Signup = () => {
    const {
        email,
        password,
        emailError,
        pwError,
        passwordConfirm,
        pwConfirmError,
        error,
        setEmailState,
        setPasswordState,
        setPasswordConfirmState,
        handleSubmit,
    } = useSignup ();

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>이메일</label>
                <input
                    type='email'
                    placeholder='ㅇㅇㅇ@example.com'
                    value={email}
                    onChange={(e) => setEmailState(e.target.value)}
                />
                {emailError && <div className=''>{emailError}</div>}

                <label htmlFor='password'>비밀번호</label>
                <input
                    type='password'
                    placeholder='8자 이상 특수문자 포함'
                    value={password}
                    onChange={(e) => setPasswordState(e.target.value)}
                />
                {pwError && <div className=''>{pwError}</div>}

                <label htmlFor='passwordConfirm'>비밀번호 확인</label>
                <input
                    type='password'
                    placeholder='8자 이상 특수문자 포함'
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirmState(e.target.value)}
                />
                {pwConfirmError && <div>{pwConfirmError}</div>}

                {error && <div className=''>{error}</div>}

                <button type='submit'>회원가입</button>
            </form>
        </div>
    );
};

export default Signup;