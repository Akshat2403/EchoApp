import './login.css';
import logo from './logo1.png';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import  useAuth from "./auth"
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Login = () => {
    // const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:5000/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            console.log(JSON.stringify(response?.data));
            if (response) {
                localStorage.setItem('user', JSON.stringify(response?.data));
            }
            console.log(localStorage.getItem('user'));
            const accessToken = response?.data?.access_Token;
            const id = response?.data?.id;
            setUser('');
            setPwd('');
            setSuccess(true);
            navigate('/profile');
        } catch (err) {
            setErrMsg(err.message);
            // errRef.current.focus();
        }
    };

    return (
        <>
            <div className="Logo-top">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="Heading-top">Echo</div>
            </div>
            <div className="Login-Page">
                <div className="Logo-section">
                    <img src={logo} alt="" />
                </div>
                {!errMsg && (
                    <form>
                        <div className="Login-section">
                            <div className="Login-section-data">
                                <div className="Login-heading">Username</div>
                                <div>
                                    <input
                                        type="text"
                                        className="Input-type"
                                        onChange={(e) =>
                                            setUser(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="Login-heading"> Password</div>
                                <div>
                                    <input
                                        type="password"
                                        className="Input-type"
                                        onChange={(e) => setPwd(e.target.value)}
                                    />
                                </div>
                                <div
                                    className="Login-Button"
                                    onClick={handleSubmit}
                                >
                                    <button className="Input-type-login">
                                        Login
                                    </button>
                                    <div className="Register">
                                        NO account?{' '}
                                        <span>
                                            {' '}
                                            <Link
                                                to="/Signup"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#a545c8',
                                                }}
                                            >
                                                Register{' '}
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
                {errMsg && <div className="err">{errMsg}</div>}
            </div>
        </>
    );
};
export default Login;
