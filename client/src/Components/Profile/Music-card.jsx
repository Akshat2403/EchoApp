import playerlogo from './Player-logo.png';
import { Link } from 'react-router-dom';

import './Profile.css';
const Card = ({ data }) => {
    return (
        <>
            <div>
                {data &&
                    data.audio.map((audio) => (
                        <Link to="" className="Music-song" key={audio.id}>
                            <div className="Music-card">
                                <img src={playerlogo} alt="" />
                            </div>
                            <div className="Music-card-details">
                                <div>Highway to Hell</div>
                                <div className="Music-card-details-timing">
                                    <div>AC-DC</div>
                                    <div>3:42</div>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    );
};
export default Card;
