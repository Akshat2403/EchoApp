import logo from '../../assets/images/logo.svg';
import userlogo from '../../assets/images/User.svg';
import '../../assets/styles/navbar.css';
import search from '../../assets/images/search.svg';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const Navbar = () => {
    const auth = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const handleLogout = async () => {
        try {
            await axios.get('/logout', {
                withCredentials: true,
            });
            localStorage.clear();
            navigate('/');
        } catch (err) {}
    };
    const handleSearch = () => {
        navigate(`/?search=${query}`);
    };
    return (
        <>
            <div className="Navbar">
                <div>
                    <Link to="/" className="Navcomp">
                        <img className="navimg" src={logo} alt="" />
                        <div className="Heading-top">Echo</div>
                    </Link>
                </div>
                <div className="search">
                    <input
                        type="text"
                        className="searchbox"
                        placeholder="Search"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="button1" onClick={handleSearch}>
                        <img className="searchicon" src={search} alt="" />
                    </button>
                </div>
                <div className="User-img">
                    {auth && (
                        <>
                            <div className="Navcomp">
                                <Link to="/profile">
                                    <img
                                        src={userlogo}
                                        className="userlogo navimg"
                                        alt=""
                                    />
                                </Link>
                                <div onClick={handleLogout}>Logout</div>
                            </div>
                        </>
                    )}
                    {!auth && (
                        <>
                            <div className="div">
                                <Link to="/login">Login &nbsp;/</Link>
                                <Link to="/signup">&nbsp;Signup</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="search_mobile">
                <input
                    type="text"
                    className="searchbox"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button1" onClick={handleSearch}>
                    <img className="searchicon" src={search} alt="" />
                </button>
            </div>
        </>
    );
};
export default Navbar;
