import './login.css';
import logo from './logo1.png';
import { useState } from 'react';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [ispending, setIspending] = useState(false);
    const [confirm, setConfirm] = useState(true);

    const handlesubmit = (e) => {
        setIspending(true);
        e.preventDefault();

        if (password === confirmpassword) {
            const User = { email, name, password };
            fetch('url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(User),
            }).then(() => {
                setIspending(false);
            });
        } else {
            setConfirm(false);
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
                                    type="text"
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
                                    type="text"
                                    className="Input-type2"
                                    required
                                    value={confirmpassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                />
                            </div>
                            {!confirm && confirmpassword && (
                                <div classname="passwordnot-matched">
                                    {' '}
                                    password doesn't match
                                </div>
                            )}
                            <div className="Button-register">
                                <button className="Input-type-login">
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
