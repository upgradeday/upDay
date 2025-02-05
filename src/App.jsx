import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Intro from './Intro/Intro';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Main/Main';
import MyPage from './MyPage/MyPage';
import ChallengeList from './ChallengeList/ChallengeList';
import PostDetailModal from './Modal/PostDetailModal';
import Signup from './Login/components/Signup';
import ProfileSetup from './Login/components/ProfileSetup';
import Login from './Login/components/Login';
import NotFound from './NotFound/NotFound'; // 404 NotFound 페이지 추가


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Intro />} />
                <Route path='/main' element={<Main />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/challengelist' element={<ChallengeList />} />
                <Route
                    path='/challengelist/post/:id'
                    element={<PostDetailModal />}
                />

                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<ProfileSetup />} />
                <Route path='/login' element={<Login />} />

                <Route path='*' element={<NotFound />} />
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
