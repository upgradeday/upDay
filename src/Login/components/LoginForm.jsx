const LoginForm = ({
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    error,
}) => {
    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='이메일'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // setEmail이 정상적으로 동작
                />
                <input
                    type='password'
                    placeholder='비밀번호'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // setPassword도 정상적으로 동작
                />
                <button type='submit'>로그인</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default LoginForm;
