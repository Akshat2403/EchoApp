import styles from '../../assets/styles/login.module.css';
import { useState } from 'react';
import {} from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCredentials } from '../../features/auth/authSlice';
export const Login = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    // const { user } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                '/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: 'include',
                }
            );

            // const accept = await handleUser(response.data);
            // console.log(accept);
            // accept ? navigate('/signup') : toast('Unable to Login');
            // console.log(user);
        } catch (err) {
            toast(err.response.data.message);
        }
    };

    return (
        <>
            <Logo />
            <div className="Login-Page">
                {/* <div className="Logo-section">
                        <img src={logo} alt="" />
                    </div> */}
                <form>
                    <div className="Login-section">
                        <div className="Login-section-data">
                            <div className="Login-heading">Username</div>
                            <div>
                                <input
                                    type="text"
                                    className="Input-type"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="Login-heading"> Password</div>
                            <div>
                                {user ? user.id : 0}
                                <input
                                    type="password"
                                    className="Input-type"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
            </div>
        </>
    );
};
export default Login;
