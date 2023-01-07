import './login.css';
import logo from './logo1.png';

const Login = () => {
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
                            <input type="text" className="Input-type" />
                        </div>
                        <div className="Login-heading"> Password</div>
                        <div>
                            <input type="text" className="Input-type" />
                        </div>
                        <div className="Login-Button">
                            <div className="Input-type-login">Login</div>
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
