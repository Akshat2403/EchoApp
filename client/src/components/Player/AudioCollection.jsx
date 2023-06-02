import '../../assets/styles/Audio-collection.css';
import useFetch from '../../features/usefetch';
import playerlogo from '../../assets/images/Audio.svg';
import { Link } from 'react-router-dom';
const Audiocollection = () => {
    const { data, isLoading, error } = useFetch('/audio');
    
    return (
        <>
            <div className="Music-player">
                <div className="Grid">
                    {data &&
                        data.map((audio) => (
                            <Link
                                to={`/audioplayer/${audio.id}`}
                                className="Music-card"
                                key={audio.id}
                            >
                                <div>
                                    <img src={playerlogo} alt="" />
                                </div>
                                <div>
                                    <div>{audio.title}</div>
                                    <div className="artist">
                                        <div>{audio.author.name}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );
};
export default Audiocollection;
