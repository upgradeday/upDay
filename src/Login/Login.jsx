import { Helmet } from 'react-helmet';
import LoginLayout from './components/LoginLayout';
import LoginForm from './components/LoginForm';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>로그인 | upDay와 함께 새로운 하루</title>
            </Helmet>
            <LoginLayout>
                <LoginForm />
            </LoginLayout>
        </>
    );
};

export default Login;
