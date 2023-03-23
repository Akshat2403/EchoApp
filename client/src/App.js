import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/404/404';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/profile';
import Player from './pages/Player/Player'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* <Route exact path="" element={<Home />} /> */}
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    {/* <Route exact path="/search" element={<Search />} /> */}
                    {/* <Route exact path="/upload" element={<Upload />} /> */}
                    <Route exact path="/profile" element={<Profile />} />
                    {/* <Route exact path="/upload/yt" element={<UploadYt />} /> */}
                    <Route exact path="/audioplayer/:id" element={<Player />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

export default App;
