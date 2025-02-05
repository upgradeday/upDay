import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import Main from './Main/Main';
import MyPage from './MyPage/MyPage';
import ChallengeList from './ChallengeList/ChallengeList';
import PostDetailModal from './Modal/PostDetailModal';

import Signup from './Login/components/Signup';
import ProfileSetup from './Login/components/ProfileSetup';
import Login from './Login/components/Login';
import NotFound from './NotFound/NotFound'; // 404page
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    const navigate = useNavigate(); // useNavigate 훅을 사용하려면 반드시 BrowserRouter 내에 있어야 함

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='*' component={NotFound} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/challengelist' element={<ChallengeList />}>
                    <Route path='post/:id' element={<PostDetailModal />} />
                </Route>

                <Route
                    path='/signup'
                    element={
                        <Signup onSignupSuccess={() => navigate('/profile')} />
                    }
                />
                <Route
                    path='/profile'
                    element={
                        <ProfileSetup
                            onProfileComplete={() => navigate('/login')}
                        />
                    }
                />
                <Route
                    path='/login'
                    element={<Login onLoginSuccess={() => navigate('/')} />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}
