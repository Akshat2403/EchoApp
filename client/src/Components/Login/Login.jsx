import './login.css';
import logo from './logo1.png';
import { useRef, useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useAuth } from 'react-use-auth';
import AuthContext from '../auth';
import UseridContext from '../userid';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Login = () => {
    //     const [user, setUser] = useState('')
    //   const navigate = useNavigate()
    //   const location = useLocation()
    //   const auth = useAuth()

    //   const redirectPath = location.state?.path || '/'

    //   const handleLogin = () => {
    //     auth.login(user)
    //     navigate(redirectPath, { replace: true })
    //   }

    const { setAuth } = useContext(AuthContext);
    const { setUserid } = useContext(UseridContext);
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

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
            const access_token = response?.data?.access_token;
            const uid = response?.data?.id;
            setAuth({ email, password, access_token });
            setUserid({ uid });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            setErrMsg(err.message);
            // if (!err?.response) {
            //     setErrMsg('No Server Response');
            // } else if (err.response?.status === 400) {
            //     setErrMsg('Missing Username or Password');
            // } else if (err.response?.status === 401) {
            //     setErrMsg('Unauthorized');
            // } else {
            //     setErrMsg('Login Failed');
            // }
            // errRef.current.focus();
        }
        // if(success){
        //     navigate('/', { replace: true })
        // }
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
                <form onSubmit={handleSubmit}>
                    <div className="Login-section">
                        <div className="Login-section-data">
                            <div className="Login-heading">Username</div>
                            <div>
                                <input
                                    type="text"
                                    className="Input-type"
                                    onChange={(e) => setUser(e.target.value)}
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
                            <div className="Login-Button">
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
