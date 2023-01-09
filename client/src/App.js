import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Search from './Components/Search/Search';
import Upload from './Components/Upload/Upload';
import Profile from './Components/Profile/Profile';
import Error from './Components/404/404';
import UploadYt from './Components/Upload/UploadYt';
import Audioplayer from './Components/Audio-Player/Audio-Player';
import Home from './Components/Landing-Page/Home';
// import { AuthProvider } from './Components/auth';
import UploadYt from './Components/Upload/UploadYt';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/upload" element={<Upload />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/upload/yt" element={<UploadYt />} />
                    <Route
                        exact
                        path="/audioplayer/:id"
                        element={<Audioplayer />}
                    />
                    <Route exact path="/upload/yt" element={<UploadYt />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
