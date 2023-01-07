import logo from './logo1.png';
import userlogo from './User-logo.png';
import './Upload.css';
const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="Heading-top">Echo</div>
                </div>
                <div className="User-img">
                    <div>
                        <img src={userlogo} alt="" />
                    </div>
                    <div className="div">Logout</div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
