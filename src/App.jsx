import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

import Main from './Main/Main';
import MyPage from './MyPage/MyPage';
import ChallengeList from './ChallengeList/ChallengeList';
import PostDetailModal from './Modal/PostDetailModal';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/challengelist' element={<ChallengeList />}>
                    <Route path='post/:id' element={<PostDetailModal />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
