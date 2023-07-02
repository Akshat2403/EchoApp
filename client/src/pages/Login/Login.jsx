import styles from '../../assets/styles/login_signup.module.css';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import Axios from '../../features/axios/axios';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
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
            if (response) {
                localStorage.setItem('user', JSON.stringify(response?.data));
            }
            navigate('/profile');
        } catch (err) {
            toast(err.response.data.message);
        }
    };

    return (
        <div className={styles.main_section}>
            <Link to="/" className="Navcomp" style={{ marginBottom: '4vh' }}>
                <img className="navimg" src={logo} alt="" />
                <div className="Heading-top" style={{ fontSize: '3vw' }}>
                    Echo
                </div>
            </Link>
            <form className={styles.Login_section}>
                <div className={styles.login_heading}>
                    Log in to your account
                </div>
                <div className={styles.input_heading}>Email Address</div>
                <div>
                    <input
                        type="text"
                        className={styles.Input_type}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        required
                    />
                </div>
                <div className={styles.input_heading}>Password</div>
                <div>
                    <input
                        type="password"
                        className={styles.Input_type}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                </div>
                <div className={styles.Login_Button} onClick={handleSubmit}>
                    <button className={styles.Input_type_login}>Login</button>
                </div>
                <div className={styles.Register}>
                    Not an user yet?{' '}
                    <span>
                        {' '}
                        <Link to="/Signup">Create an account</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};
export default Login;
