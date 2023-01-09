import playerlogo from './Player-logo.png';
import { Link } from 'react-router-dom';

import './Profile.css';
const Card = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div>
                {data &&
                    data.audio.map((audio) => (
                        <Link
                            to={`http://localhost:3000/audio/${audio.id}`}
                            className="Music-song"
                            key={audio.id}
                        >
                            <div className="Music-card">
                                <img src={playerlogo} alt="" />
                            </div>
                            <div className="Music-card-details">
                                <div>{audio.title}</div>
                                <div className="Music-card-details-timing"></div>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    );
};
export default Card;
