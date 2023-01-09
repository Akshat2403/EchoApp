import logo from './logo1.png';
import userlogo from './User-logo.png';
import './Upload.css';
import useFetch from '../usefetch';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Navbar = () => {
    const auth = sessionStorage.getItem('user');
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        axios.get('http://localhost:5000/logout', {
            withCredentials: true,
        });
        navigate('/');
    };
    console.log(sessionStorage.getItem('user'));
    return (
        <>
            <div className="Navbar">
                <div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="Heading-top">Echo</div>
                </div>
                <div className="User-img">
                    {auth && (
                        <>
                            <div>
                                <img src={userlogo} alt="" />
                            </div>
                            <div className="div" onClick={handleLogout}>
                                Logout
                            </div>
                        </>
                    )}
                    {!auth && (
                        <>
                            <div className="div">
                                <Link to="/login">Login</Link>/
                                <Link to="/signup">signup</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
export default Navbar;
