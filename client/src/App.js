import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/auth';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Search from './Components/Search/Search';
import Upload from './Components/Upload/Upload';

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/upload" element={<Upload />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
