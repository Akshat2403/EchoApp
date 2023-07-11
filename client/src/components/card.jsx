import playerlogo from '../assets/images/Audio.svg';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../features/usefetch';
import axios from 'axios';
import { toast } from 'react-toastify';

const Card = () => {
    const User = JSON.parse(localStorage.getItem('user'));
    const { data } = useFetch(`/${User.id}`);
    const handleDelete = async (e, id) => {
        try {
            await axios.delete(`/audio/${User.id}/${id}`, {
                withCredentials: true,
            });
            window.location.reload();
        } catch (err) {
            toast(err);
            toast(err.response.data.message);
        }
    };
    return (
        <>
            <div className="Grid">
                {data &&
                    data.audio.map((audio) => (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            key={audio.id}
                        >
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
                            <div
                                style={{ padding: '1vw' }}
                                onClick={(e) => handleDelete(e, audio.id)}
                            >
                                Delete
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};
export default Card;
