import Card from '../Profile/Music-card';
import Navbar from '../Upload/Navbar';
import './Home.css';
import searchlogo from '../Search/search.png';
const Home = () => {
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
                                <input type="text" placeholder="Search" />
                            </form>
                            <button className="Search-button1">
                                <img src={searchlogo} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Music-player">
                    <div className="Grid">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
