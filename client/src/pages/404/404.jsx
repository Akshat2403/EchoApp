import four from '../../assets/images/404.webp';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <img src={four} alt="" />
                <Link to="/">Back to Home</Link>
            </div>
        </>
    );
};

export default Error;
