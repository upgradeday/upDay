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
import Signup from './Login/Signup';
import ProfileSetup from './Login/ProfileSetup';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound'; // 404 NotFound 페이지 추가

function App() {
    return (

        <div className=''>

        <div className='h-screen max-h-[969px] flex flex-col justify-between'>

            <Header />
            <Routes>
                <Route path='/' element={<Intro />} />
                <Route path='/main' element={<Main />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/challengelist' element={<ChallengeList />}>
                    {/* 글 생성 */}
                    <Route path='create' element={<PostDetailModal />} />

                    {/* 글 읽기 */}
                    <Route path=':id' element={<PostDetailModal />} />

                    {/* 글 수정 */}
                    <Route path=':id/edit' element={<PostDetailModal />} />
                </Route>

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
