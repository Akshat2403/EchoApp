import playerlogo from './Player-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Profile.css';
const Card1 = ({ data }) => {
    // const [newdata, setNewdata] = useState(null);
    // console.log(data)

    return (
        <>
            {data &&
                data.map((audio) => (
                    <Link
                        to={`/audioplayer/${audio.id}`}
                        className="Music-song"
                        key={audio.id}
                    >
                        <div className="Music-geet">
                            <img src={playerlogo} alt="" />
                        </div>
                        <div className="Music-card-details">
                            <div>{audio.title}</div>
                            <div className="Music-card-details-timing"></div>
                        </div>
                    </Link>
                ))}
        </>
    );
};
export default Card1;
