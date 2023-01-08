import './404.css';

import logo from './logo1.png';

import NotFound from './not found.png';

const Error = () => {
    return (
        <>
            <div className="Logo-top">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="Heading-top">Echo</div>
            </div>
            <div className="Error-main">
                <div className="Error-404">
                    <img src={NotFound}></img>
                </div>
            </div>
        </>
    );
};

export default Error;
