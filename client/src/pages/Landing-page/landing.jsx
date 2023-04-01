import playerlogo from '../../assets/images/Player-logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import '../../assets/styles/Home.css';
import searchlogo from '../../assets/images/search.png';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../features/axios/usefetch';
const Home = () => {
    const { data } = useFetch('http://localhost:5000/audio');
    console.log(data);
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/search');
    };

    return (
        <>
            <div className="Home">
                <Navbar />
                <div className="Homepage">
                    <div className="Homepage-cd"></div>
                    <div className="Homepage-search">
                        <div>
                            <div className="Homepage-search-title">ECHO</div>
                            <div className="Homepage-search-tought">
                                Reflecting your thoughts
                            </div>
                        </div>
                        <div className="Search-bar1">
                            <form action="">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onClick={handleclick}
                                />
                            </form>
                            <button className="Search-button1">
                                <img src={searchlogo} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Music-player">
                    <div className="Grid">
                        {data &&
                            data.map((audio) => (
                                <Link
                                    to={`/audioplayer/${audio.id}`}
                                    className="Music-song"
                                    key={audio.id}
                                >
                                    <div className="Music-card">
                                        <img src={playerlogo} alt="" />
                                    </div>
                                    <div className="Music-card-details">
                                        <div>{audio.title}</div>
                                        <div className="Music-card-details-timing">
                                            <div>AC-DC</div>
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
