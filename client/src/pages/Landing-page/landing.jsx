import playerlogo from '../../assets/images/Audio.svg';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import '../../assets/styles/Home.css';
import '../../assets/styles/card.css';
import { useNavigate, useLocation } from 'react-router-dom';
import useFetch from '../../features/usefetch';
const Home = () => {
    const location = useLocation();
    const { data, isLoading, error } = useFetch(`/audio${location.search}`);
    const navigate = useNavigate();
    return (
        <>
            <div className="Home">
                <Navbar />
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
            </div>
        </>
    );
};
export default Home;
