import styles from '../../assets/styles/signup.module.css';
import { useState } from 'react';
import Axios from '../../features/axios/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo';
import logo1 from '../../assets/images/logo1.png'

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
            await Axios.post('/register', User, {
                headers: { 'Content-Type': 'application/json' },
            })
                .then((response) => {
                    navigate('/login');
                    console.log(response.data)
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
            <Logo />
            {/* {user ? user.id : null} */}
            <div className={styles.Login_Page}>
            <div className={styles.Logo_section}>
                        <img src={logo1} alt="" />
                    </div>
                <div className={styles.Login_section}>
                    <form action="" onSubmit={handlesubmit}>
                        <div className={styles.Signin_section_data}>
                            <div className={styles.Login_heading}>Username</div>
                            <div>
                                <input
                                    type="text"
                                    className={styles.Input_type2}
                                    required
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={styles.Login_heading}>Email</div>
                            <div>
                                <input
                                    type="email"
                                    className={styles.Input_type2}
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={styles.Login_heading}>Password</div>
                            <div>
                                <input
                                    type="password"
                                    className={styles.Input_type2}
                                    required
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={styles.Login_heading}>
                                Confirm Password
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className={styles.Input_type2}
                                    required
                                    value={confirmpassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Signup;
