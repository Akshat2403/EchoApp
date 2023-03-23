import logo from '../../assets/images/logo1.png';
import userlogo from '../../assets/images/User-logo.png';
import '../../assets/styles/Upload.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        axios.get('http://localhost:5000/logout', {
            withCredentials: true,
        });
        navigate('/');
    };
    return (
        <>
            <div className="Navbar">
                <div>
                    <div>
                        <Link to="/">
                            {' '}
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="Heading-top">Echo</div>
                </div>
                <div className="User-img">
                    {auth && (
                        <>
                            <div>
                                <Link to="/profile">
                                    {' '}
                                    <img src={userlogo} alt="" />
                                </Link>
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
