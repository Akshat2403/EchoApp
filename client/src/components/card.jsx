import playerlogo from '../assets/images/Audio.svg';
import { Link } from 'react-router-dom';
import useFetch from '../features/usefetch';

const Card = () => {
    const User = JSON.parse(localStorage.getItem('user'));
    const { data } = useFetch(`/${User.id}`);
    return (
        <>
            <div className="Grid">
                {data &&
                    data.audio.map((audio) => (
                        <Link
                            to={`/audioplayer/${audio.id}`}
                            className="Music-card"
                            key={audio.id}
                        >
                            <img src={playerlogo} alt="" />
                            <div className="Music-card-details">
                                <div>{audio.title}</div>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    );
};
export default Card;
