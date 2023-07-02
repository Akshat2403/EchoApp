import styles from '../../assets/styles/login_signup.module.css';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';
import Axios from '../../features/axios/axios';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [ispending, setIspending] = useState(false);
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        setIspending(true);
        e.preventDefault();

        if (password === confirmpassword) {
            const User = { email, name, password };
            await axios.post('/register', User, {
                headers: { 'Content-Type': 'application/json' },
            })
                .then((response) => {
                    navigate('/login');
                })
                .catch((Error) => {
                    toast(Error.response.data.message);
                });
        } else {
            toast("Password Doesn't Match");
        }
    };

    return (
        <>
            <div className={styles.main_section}>
                <Link
                    to="/"
                    className="Navcomp"
                    style={{ marginBottom: '4vh' }}
                >
                    <img className="navimg" src={logo} alt="" />
                    <div className="Heading-top" style={{ fontSize: '3vw' }}>
                        Echo
                    </div>
                </Link>
                <form className={styles.Login_section} onSubmit={handlesubmit}>
                    <div className={styles.login_heading}>
                        Get started today!
                    </div>
                    <div className={styles.input_heading}>Full Name</div>
                    <div>
                        <input
                            type="text"
                            className={styles.Input_type}
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className={styles.input_heading}>Email Address</div>
                    <div>
                        <input
                            type="email"
                            className={styles.Input_type}
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className={styles.input_heading}>Password</div>
                    <div>
                        <input
                            type="password"
                            className={styles.Input_type}
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="Enter password"
                        />
                    </div>
                    <div className={styles.input_heading}>Confirm Password</div>
                    <div>
                        <input
                            type="password"
                            className={styles.Input_type}
                            required
                            value={confirmpassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            placeholder="Re-Enter password"
                        />
                    </div>
                    <div className={styles.Button_register}>
                        <button
                            type="submit"
                            className={styles.Input_type_login}
                        >
                            Register
                        </button>
                    </div>
                    <div className={styles.Register}>
                        Already have an account?
                        <span>
                            {' '}
                            <Link to="/Login">Login</Link>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Signup;
