import playerlogo from '../Profile/Player-logo.png';
import { Link } from 'react-router-dom';
import Navbar from '../Upload/Navbar';
import './Home.css';
import searchlogo from '../Search/search.png';
import { useNavigate } from 'react-router-dom';
// import useFetch from '../usefetch';
// import Fetch from '../fetch';
import useFetch from '../usefetch';
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
                                    to=""
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
