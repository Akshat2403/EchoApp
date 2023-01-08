import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Search from './Components/Search/Search';
import Upload from './Components/Upload/Upload';
import Profile from './Components/Profile/Profile';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
