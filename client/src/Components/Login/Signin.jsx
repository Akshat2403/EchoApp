import './login.css';
import logo from './logo1.png';
const Signup = () => {
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
                    <form action="">
                        <div className="Signin-section-data">
                            <div className="Login-heading">Username</div>
                            <div>
                                <input type="text" className="Input-type2" />
                            </div>
                            <div className="Login-heading">Email</div>
                            <div>
                                <input type="text" className="Input-type2" />
                            </div>
                            <div className="Login-heading">Password</div>
                            <div>
                                <input type="text" className="Input-type2" />
                            </div>
                            <div className="Login-heading">
                                Confirm Password
                            </div>
                            <div>
                                <input type="text" className="Input-type2" />
                            </div>
                            <div className="Button-register">
                                <div className="Input-type-login">Register</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Signup;
