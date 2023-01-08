import './404.css';
import error from './error.png';
import emoji from './emoji.png';
import logo from './logo1.png';
import Background from './Background-search.png';
import NotFound from './not found.png';

const Error = () => {
    return (
        <>
            <div className="Error-main">
                <div className="Logo-top">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="Heading-top">Echo</div>
                </div>
                <div className="Error-404">
                    <img className="Error-Not-Found" src={NotFound}></img>
                </div>
                <img className="Error-name" src={error}></img>
            </div>
        </>
    );
};

export default Error;
