import styles from '../../assets/styles/signup.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Axios } from '../../features/axios/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo';

const Signup = () => {
    const { user } = useSelector((state) => state.auth);
    setTimeout(console.log(user), 5000);

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
            {user ? user.id : null}
            <div className="Login-Page">
                {/* <div className="Logo-section">
          <img src={logo} alt="" />
        </div> */}
                <div className="Login-section">
                    <form action="" onSubmit={handlesubmit}>
                        <div className="Signin-section-data">
                            <div className="Login-heading">Username</div>
                            <div>
                                <input
                                    type="text"
                                    className="Input-type2"
                                    required
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="Login-heading">Email</div>
                            <div>
                                <input
                                    type="email"
                                    className="Input-type2"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="Login-heading">Password</div>
                            <div>
                                <input
                                    type="password"
                                    className="Input-type2"
                                    required
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="Login-heading">
                                Confirm Password
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className="Input-type2"
                                    required
                                    value={confirmpassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="Button-register">
                                <button
                                    type="submit"
                                    className="Input-type-login"
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
