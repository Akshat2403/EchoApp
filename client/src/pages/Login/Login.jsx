import styles from '../../assets/styles/login.module.css';
import { useState } from 'react';
import { Axios } from '../../features/axios/axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo';
import logo1 from '../../assets/images/logo1.png'
export const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post(
                '/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: 'include',
                }
            );
            console.log(JSON.stringify(response?.data));
            if (response) {
                localStorage.setItem('user', JSON.stringify(response?.data));
            }
            navigate('/profile');

        } catch (err) {
            toast(err.response.data.message);
        }
    };

    return (
        <>
            <Logo />
            <div className={styles.Login_Page}>
                <div className={styles.Logo_section}>
                        <img src={logo1} alt="" />
                    </div>
                <form>
                    <div className={styles.Login_section}>
                        <div className={styles.Login_section_data}>
                            <div className={styles.Login_heading}>Username</div>
                            <div>
                                <input
                                    type="text"
                                    className={styles.Input_type}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles.Login_heading}> Password</div>
                            <div>
                                <input
                                    type="password"
                                    className={styles.Input_type}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div
                                className={styles.Login_Button}
                                onClick={handleSubmit}
                            >
                                <button className={styles.Input_type_login}>
                                    Login
                                </button>
                                <div className={styles.Register}>
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
