import './login.css';
import logo from './logo1.png';
import { useRef, useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'react-use-auth';
import AuthContext from '../auth';
import axios from 'axios';

// export const Login = () => {
//   const [user, setUser] = useState('')
//   const navigate = useHistory()
//   const location = useLocation()
//   const auth = useAuth()

//   const redirectPath = location.state?.path || '/'

//   const handleLogin = () => {
//     auth.login(user)
//     navigate(redirectPath, { replace: true })
//   }
// }

// const Login = () => {
//     const [user, setUser] = useState('')
//     const location = useLocation()
//     const auth = useAuth()

//     const redirectPath = location.state?.path || '/'

//     const handleLogin = () => {
//       auth.login(user)
//       navigate(redirectPath, { replace: true })
//     }

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
    const userRef = useRef();
    const errRef = useRef();

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
                '/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            // console.log(JSON.stringify(response?.data));
            const access_token = response?.data?.access_token;
            setAuth({ email, password, access_token });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            console.log(err.message);
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
                            <button
                                className="Input-type-login"
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                            <div className="Register">
                                NO account? <span>Register </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
